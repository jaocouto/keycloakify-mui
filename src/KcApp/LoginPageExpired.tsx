import React, { memo } from "react";
import Template from "./Template";
import type { KcProps } from "./KcProps";
import type { KcContextBase } from "keycloakify/lib/getKcContext/KcContextBase";
import type { I18n } from "./i18n";

const LoginPageExpired = memo(
  ({
    kcContext,
    i18n,
    doFetchDefaultThemeResources = false,
    ...props
  }: {
    kcContext: KcContextBase.LoginPageExpired;
    i18n: I18n;
    doFetchDefaultThemeResources?: boolean;
  } & KcProps) => {
    const { url } = kcContext;

    const { msg } = i18n;

    return (
      <Template
        {...{ kcContext, i18n, doFetchDefaultThemeResources, ...props }}
        displayMessage={false}
        headerNode={msg("pageExpiredTitle")}
        formNode={
          <>
            <p id="instruction1" className="instruction">
              {msg("pageExpiredMsg1")}
              <a id="loginRestartLink" href={url.loginRestartFlowUrl}>
                {msg("doClickHere")}
              </a>{" "}
              .<br />
              {msg("pageExpiredMsg2")}{" "}
              <a id="loginContinueLink" href={url.loginAction}>
                {msg("doClickHere")}
              </a>{" "}
              .
            </p>
          </>
        }
      />
    );
  }
);

export default LoginPageExpired;
