import "./kc_css/Login.css";
import "./KcApp.css";
import React, { memo } from "react";
import Template from "./Template";
import type { KcProps } from "./KcProps";
import type { KcContextBase } from "keycloakify/lib/getKcContext/KcContextBase";
import { useCssAndCx } from "keycloakify/lib/tools/useCssAndCx";
import type { I18n } from "./i18n";
import { Button, TextField } from "./components";
import { Link } from "./components/Link";

const LoginResetPassword = memo(
  ({
    kcContext,
    i18n,
    doFetchDefaultThemeResources = false,
    ...props
  }: {
    kcContext: KcContextBase.LoginResetPassword;
    i18n: I18n;
    doFetchDefaultThemeResources?: boolean;
  } & KcProps) => {
    const { url, realm, auth } = kcContext;

    const { msg, msgStr } = i18n;

    const { cx } = useCssAndCx();

    return (
      <Template
        {...{ kcContext, i18n, doFetchDefaultThemeResources, ...props }}
        displayMessage={false}
        headerNode={msg("emailForgotTitle")}
        formNode={
          <form
            id="kc-reset-password-form"
            className={cx(props.kcFormClass)}
            action={url.loginAction}
            method="post"
          >
            <div className={cx(props.kcFormGroupClass)}>
              <div className={cx(props.kcLabelWrapperClass)}>
                <TextField
                  type="text"
                  id="username"
                  name="username"
                  className={cx(props.kcInputClass)}
                  autoFocus
                  label={
                    !realm.loginWithEmailAllowed
                      ? msg("username")
                      : !realm.registrationEmailAsUsername
                      ? msg("usernameOrEmail")
                      : msg("email")
                  }
                  defaultValue={
                    auth !== undefined && auth.showUsername
                      ? auth.attemptedUsername
                      : undefined
                  }
                />
              </div>
            </div>
            <div
              className={cx(props.kcFormGroupClass, props.kcFormSettingClass)}
            >
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
                  value={msgStr("doSubmit")}
                />
              </div>
            </div>
          </form>
        }
        infoNode={msg("emailInstruction")}
      />
    );
  }
);

export default LoginResetPassword;
