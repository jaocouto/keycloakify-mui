import React, { useState, memo } from "react";
import Template from "./Template";
import type { KcProps } from "./KcProps";
import type { KcContextBase } from "keycloakify/lib/getKcContext/KcContextBase";
import { useCssAndCx } from "keycloakify/lib/tools/useCssAndCx";
import { useConstCallback } from "powerhooks/useConstCallback";
import type { FormEventHandler } from "react";
import type { I18n } from "./i18n";
import { Button, TextField } from "./components";
import { CheckBox } from "./components/Checkbox";
import { Link } from "./components/Link";

const Login = memo(
  ({
    kcContext,
    i18n,
    doFetchDefaultThemeResources = false,
    ...props
  }: {
    kcContext: KcContextBase.Login;
    i18n: I18n;
    doFetchDefaultThemeResources?: boolean;
  } & KcProps) => {
    const {
      social,
      realm,
      url,
      usernameEditDisabled,
      login,
      auth,
      registrationDisabled,
    } = kcContext;

    const { msg, msgStr } = i18n;

    const { cx } = useCssAndCx();

    const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(false);

    const onSubmit = useConstCallback<FormEventHandler<HTMLFormElement>>(
      (e) => {
        e.preventDefault();

        setIsLoginButtonDisabled(true);

        const formElement = e.target as HTMLFormElement;

        //NOTE: Even if we login with email Keycloak expect username and password in
        //the POST request.
        formElement
          .querySelector("input[name='email']")
          ?.setAttribute("name", "username");

        formElement.submit();
      }
    );

    return (
      <Template
        {...{ kcContext, i18n, doFetchDefaultThemeResources, ...props }}
        displayInfo={social.displayInfo}
        displayWide={realm.password && social.providers !== undefined}
        headerNode={msg("doLogIn")}
        formNode={
          <div
            id="kc-form"
            className={cx(
              realm.password &&
                social.providers !== undefined &&
                props.kcContentWrapperClass
            )}
          >
            <div
              id="kc-form-wrapper"
              className={cx(
                realm.password &&
                  social.providers && [
                    props.kcFormSocialAccountContentClass,
                    props.kcFormSocialAccountClass,
                  ]
              )}
            >
              {realm.password && (
                <form
                  id="kc-form-login"
                  onSubmit={onSubmit}
                  action={url.loginAction}
                  method="post"
                >
                  <div className={cx(props.kcFormGroupClass)}>
                    {(() => {
                      const label = !realm.loginWithEmailAllowed
                        ? "username"
                        : realm.registrationEmailAsUsername
                        ? "email"
                        : "usernameOrEmail";

                      const autoCompleteHelper: typeof label =
                        label === "usernameOrEmail" ? "username" : label;

                      return (
                        <>
                          <TextField
                            id={autoCompleteHelper}
                            className={cx(props.kcInputClass)}
                            label={msg(label)}
                            //NOTE: This is used by Google Chrome auto fill so we use it to tell
                            //the browser how to pre fill the form but before submit we put it back
                            //to username because it is what keycloak expects.
                            name={autoCompleteHelper}
                            defaultValue={login.username ?? ""}
                            type="text"
                            {...(usernameEditDisabled
                              ? { disabled: true }
                              : {
                                  autoFocus: true,
                                  autoComplete: "off",
                                })}
                          />
                        </>
                      );
                    })()}
                  </div>
                  <div className={cx(props.kcFormGroupClass)}>
                    <TextField
                      id="password"
                      className={cx(props.kcInputClass)}
                      name="password"
                      type="password"
                      autoComplete="off"
                      label={msg("password")}
                    />
                  </div>
                  <div
                    className={cx(
                      props.kcFormGroupClass,
                      props.kcFormSettingClass
                    )}
                  >
                    <div id="kc-form-options">
                      {realm.rememberMe && !usernameEditDisabled && (
                        <div className="checkbox">
                          <CheckBox
                            tabIndex={3}
                            id="rememberMe"
                            name="rememberMe"
                            type="checkbox"
                            label={msg("rememberMe")}
                            {...(login.rememberMe
                              ? {
                                  checked: true,
                                }
                              : {})}
                          />
                        </div>
                      )}
                    </div>
                    <div className={cx(props.kcFormOptionsWrapperClass)}>
                      {realm.resetPasswordAllowed && (
                        <span>
                          <Link
                            tabIndex={5}
                            href={url.loginResetCredentialsUrl}
                            text={msg("doForgotPassword")}
                          />
                        </span>
                      )}
                    </div>
                  </div>
                  <div
                    id="kc-form-buttons"
                    className={cx(props.kcFormGroupClass)}
                  >
                    <input
                      type="hidden"
                      id="id-hidden-input"
                      name="credentialId"
                      {...(auth?.selectedCredential !== undefined
                        ? {
                            value: auth.selectedCredential,
                          }
                        : {})}
                    />
                    <Button
                      tabIndex={4}
                      name="login"
                      id="kc-login"
                      type="submit"
                      value={msgStr("doLogIn")}
                      fullWidth
                      disabled={isLoginButtonDisabled}
                    />
                  </div>
                </form>
              )}
            </div>
            {realm.password && social.providers !== undefined && (
              <div
                id="kc-social-providers"
                className={cx(
                  props.kcFormSocialAccountContentClass,
                  props.kcFormSocialAccountClass
                )}
              >
                <ul
                  className={cx(
                    props.kcFormSocialAccountListClass,
                    social.providers.length > 4 &&
                      props.kcFormSocialAccountDoubleListClass
                  )}
                >
                  {social.providers.map((p) => (
                    <li
                      key={p.providerId}
                      className={cx(props.kcFormSocialAccountListLinkClass)}
                    >
                      <a
                        href={p.loginUrl}
                        id={`zocial-${p.alias}`}
                        className={cx("zocial", p.providerId)}
                      >
                        <span>{p.displayName}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        }
        infoNode={
          realm.password &&
          realm.registrationAllowed &&
          !registrationDisabled && (
            <div className={cx("registerArea")}>
              {msg("noAccount")}
              <a tabIndex={6} href={url.registrationUrl}>
                {msg("doRegister")}
              </a>
            </div>
          )
        }
      />
    );
  }
);

export default Login;
