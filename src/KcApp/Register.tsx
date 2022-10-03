// This is a copy paste from https://github.com/InseeFrLab/keycloakify/blob/main/src/lib/components/Register.tsx
// It is now up to us to implement a special behavior to leverage the non standard authorizedMailDomains
// provided by the plugin: https://github.com/micedre/keycloak-mail-whitelisting installed on our keycloak server.
// Note that it is no longer recommended to use register.ftl, it's best to use register-user-profile.ftl
// See: https://docs.keycloakify.dev/realtime-input-validation
import "./kc_css/Login.css";
import { memo } from "react";
import type { KcProps } from "keycloakify";
import type { KcContext } from "./kcContext";
import { useCssAndCx } from "keycloakify/lib/tools/useCssAndCx";
import type { I18n } from "./i18n";
import Template from "./Template";
import { Button, TextField } from "../KcApp/components";
import { Link } from "./components/Link";

type KcContext_Register = Extract<KcContext, { pageId: "register.ftl" }>;

const Register = memo(
  ({
    kcContext,
    i18n,
    ...props
  }: { kcContext: KcContext_Register; i18n: I18n } & KcProps) => {
    const {
      url,
      messagesPerField,
      register,
      realm,
      passwordRequired,
      recaptchaRequired,
      recaptchaSiteKey,
    } = kcContext;

    const { msg, msgStr } = i18n;

    const { cx } = useCssAndCx();

    console.log(
      `NOTE: It is up to you do do something meaningful with ${kcContext.authorizedMailDomains}`
    );

    return (
      <Template
        {...{ kcContext, i18n, ...props }}
        doFetchDefaultThemeResources={false}
        headerNode={msg("registerTitle")}
        formNode={
          <form
            id="kc-register-form"
            className={cx(props.kcFormClass)}
            action={url.registrationAction}
            method="post"
          >
            <div
              className={cx(
                props.kcFormGroupClass,
                messagesPerField.printIfExists(
                  "firstName",
                  props.kcFormGroupErrorClass
                )
              )}
            >
              <TextField
                label={msg("firstName")}
                type="text"
                id="firstName"
                className={cx(props.kcInputClass)}
                name="firstName"
                defaultValue={register.formData.firstName ?? ""}
              />
            </div>
            <div
              className={cx(
                props.kcFormGroupClass,
                messagesPerField.printIfExists(
                  "lastName",
                  props.kcFormGroupErrorClass
                )
              )}
            >
              <TextField
                label={msg("lastName")}
                type="text"
                id="lastName"
                className={cx(props.kcInputClass)}
                name="lastName"
                defaultValue={register.formData.lastName ?? ""}
              />
            </div>

            <div
              className={cx(
                props.kcFormGroupClass,
                messagesPerField.printIfExists(
                  "email",
                  props.kcFormGroupErrorClass
                )
              )}
            >
              <TextField
                label={msg("email")}
                type="email"
                id="email"
                className={cx(props.kcInputClass)}
                name="email"
                defaultValue={register.formData.email ?? ""}
                autoComplete="email"
              />
            </div>
            {!realm.registrationEmailAsUsername && (
              <div
                className={cx(
                  props.kcFormGroupClass,
                  messagesPerField.printIfExists(
                    "username",
                    props.kcFormGroupErrorClass
                  )
                )}
              >
                <TextField
                  label={msg("username")}
                  type="username"
                  id="username"
                  className={cx(props.kcInputClass)}
                  name="username"
                  defaultValue={register.formData.username ?? ""}
                  autoComplete="username"
                />
              </div>
            )}
            {passwordRequired && (
              <>
                <div
                  className={cx(
                    props.kcFormGroupClass,
                    messagesPerField.printIfExists(
                      "password",
                      props.kcFormGroupErrorClass
                    )
                  )}
                >
                  <TextField
                    label={msg("password")}
                    type="password"
                    id="password"
                    className={cx(props.kcInputClass)}
                    name="password"
                    autoComplete="password"
                  />
                </div>

                <div
                  className={cx(
                    props.kcFormGroupClass,
                    messagesPerField.printIfExists(
                      "password-confirm",
                      props.kcFormGroupErrorClass
                    )
                  )}
                >
                  <TextField
                    label={msg("passwordConfirm")}
                    type="password"
                    id="password-confirm"
                    className={cx(props.kcInputClass)}
                    name="password-confirm"
                  />
                </div>
              </>
            )}
            {recaptchaRequired && (
              <div className="form-group">
                <div className={cx(props.kcInputWrapperClass)}>
                  <div
                    className="g-recaptcha"
                    data-size="compact"
                    data-sitekey={recaptchaSiteKey}
                  ></div>
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
                  fullWidth
                  className={cx(
                    props.kcButtonClass,
                    props.kcButtonPrimaryClass,
                    props.kcButtonBlockClass,
                    props.kcButtonLargeClass
                  )}
                  type="submit"
                  value={msgStr("doRegister")}
                />
              </div>
            </div>
          </form>
        }
      />
    );
  }
);

export default Register;
