import React, { useMemo, memo, useState } from "react";
import Template from "./Template";
import type { KcProps } from "./KcProps";
import type { KcContextBase } from "keycloakify/lib/getKcContext/KcContextBase";
import { useCssAndCx } from "keycloakify/lib/tools/useCssAndCx";
import type { I18n } from "./i18n";
import { UserProfileFormFields } from "./shared/UserProfileCommons";
import { Button } from "./components";
import { Link } from "./components/Link";

const RegisterUserProfile = memo(
  ({
    kcContext,
    i18n,
    doFetchDefaultThemeResources = false,
    ...props_
  }: {
    kcContext: KcContextBase.RegisterUserProfile;
    i18n: I18n;
    doFetchDefaultThemeResources?: boolean;
  } & KcProps) => {
    const { url, messagesPerField, recaptchaRequired, recaptchaSiteKey } =
      kcContext;

    const { msg, msgStr } = i18n;

    const { cx, css } = useCssAndCx();

    const props = useMemo(
      () => ({
        ...props_,
        kcFormGroupClass: cx(
          props_.kcFormGroupClass,
          css({ marginBottom: 20 })
        ),
      }),
      [cx, css]
    );

    const [isFomSubmittable, setIsFomSubmittable] = useState(false);

    return (
      <Template
        {...{ kcContext, i18n, doFetchDefaultThemeResources, ...props }}
        displayMessage={messagesPerField.exists("global")}
        displayRequiredFields={true}
        headerNode={msg("registerTitle")}
        formNode={
          <form
            id="kc-register-form"
            className={cx(props.kcFormClass)}
            action={url.registrationAction}
            method="post"
          >
            <UserProfileFormFields
              kcContext={kcContext}
              onIsFormSubmittableValueChange={setIsFomSubmittable}
              i18n={i18n}
              {...props}
            />
            {recaptchaRequired && (
              <div className="form-group">
                <div className={cx(props.kcInputWrapperClass)}>
                  <div
                    className="g-recaptcha"
                    data-size="compact"
                    data-sitekey={recaptchaSiteKey}
                  />
                </div>
              </div>
            )}
            <div className={cx(props.kcFormGroupClass)}>
              <div
                id="kc-form-options"
                className={cx(props.kcFormOptionsClass)}
              >
                <div className={cx(props.kcFormOptionsWrapperClass)}>
                  <Link href={url.loginUrl} text={msg("backToLogin")} />
                </div>
              </div>

              <div
                id="kc-form-buttons"
                className={cx(props.kcFormButtonsClass)}
              >
                <Button
                  className={cx(
                    props.kcButtonClass,
                    props.kcButtonPrimaryClass,
                    props.kcButtonBlockClass,
                    props.kcButtonLargeClass
                  )}
                  type="submit"
                  value={msgStr("doRegister")}
                  disabled={!isFomSubmittable}
                />
              </div>
            </div>
          </form>
        }
      />
    );
  }
);

export default RegisterUserProfile;
