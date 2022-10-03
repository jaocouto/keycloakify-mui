import "./KcApp.css";
import "./kc_css/Login.css";

import { lazy, Suspense } from "react";
import type { KcContext } from "./kcContext";
import KcAppBase, { defaultKcProps } from "keycloakify";
import { useI18n } from "./i18n";

const Login = lazy(() => import("./Login"));
const Register = lazy(() => import("./Register"));
// const RegisterUserProfile = lazy(() => import("./RegisterUserProfile"));
const Info = lazy(() => import("./Info"));
const Error = lazy(() => import("./Error"));
const LoginResetPassword = lazy(() => import("./LoginResetPassword"));
const LoginVerifyEmail = lazy(() => import("./LoginVerifyEmail"));
const Terms = lazy(() => import("./Terms"));
// const LoginOtp = lazy(() => import("./LoginOtp"));
const LoginUpdatePassword = lazy(() => import("./LoginUpdatePassword"));
const LoginUpdateProfile = lazy(() => import("./LoginUpdateProfile"));
const LoginIdpLinkConfirm = lazy(() => import("./LoginIdpLinkConfirm"));
const LoginPageExpired = lazy(() => import("./LoginPageExpired"));
const LoginIdpLinkEmail = lazy(() => import("./LoginIdpLinkEmail"));
const LoginConfigTotp = lazy(() => import("./LoginConfigTotp"));
const LogoutConfirm = lazy(() => import("./LogoutConfirm"));
// const UpdateUserProfile = lazy(() => import("./UpdateUserProfile"));
// const IdpReviewUserProfile = lazy(() => import("./IdpReviewUserProfile"));
const MyExtraPage1 = lazy(() => import("./MyExtraPage1"));
const MyExtraPage2 = lazy(() => import("./MyExtraPage2"));

export type Props = {
  kcContext: KcContext;
};

export default function KcApp({ kcContext }: Props) {
  const i18n = useI18n({ kcContext });

  //NOTE: Locales not yet downloaded
  if (i18n === null) {
    return null;
  }

  const props = {
    i18n,
    ...defaultKcProps,
    // NOTE: The classes are defined in ./KcApp.css
    // kcHeaderWrapperClass: "my-color my-font",
    kcFormGroupClass: "spacing",
    kcFormSettingClass: "settings",
    kcRegistration: "settings",
    kcFormButtonsClass: "spacing",
    // kcHtmlClass: "container",
    // kcLoginCLass: "container",
  };

  return (
    <Suspense>
      {(() => {
        switch (kcContext.pageId) {
          case "login.ftl":
            return <Login {...{ kcContext, ...props }} />;
          case "register.ftl":
            return <Register {...{ kcContext, ...props }} />;
          // case "register-user-profile.ftl":
          //   return <RegisterUserProfile {...{ kcContext, ...props }} />;
          case "info.ftl":
            return <Info {...{ kcContext, ...props }} />;
          case "error.ftl":
            return <Error {...{ kcContext, ...props }} />;
          case "login-reset-password.ftl":
            return <LoginResetPassword {...{ kcContext, ...props }} />;
          case "login-verify-email.ftl":
            return <LoginVerifyEmail {...{ kcContext, ...props }} />;
          case "terms.ftl":
            return <Terms {...{ kcContext, ...props }} />;
          // case "login-otp.ftl":
          //       return <LoginOtp {...{ kcContext, ...props }} />;
          case "login-update-password.ftl":
            return <LoginUpdatePassword {...{ kcContext, ...props }} />;
          case "login-update-profile.ftl":
            return <LoginUpdateProfile {...{ kcContext, ...props }} />;
          case "login-idp-link-confirm.ftl":
            return <LoginIdpLinkConfirm {...{ kcContext, ...props }} />;
          case "login-idp-link-email.ftl":
            return <LoginIdpLinkEmail {...{ kcContext, ...props }} />;
          case "login-page-expired.ftl":
            return <LoginPageExpired {...{ kcContext, ...props }} />;
          case "login-config-totp.ftl":
            return <LoginConfigTotp {...{ kcContext, ...props }} />;
          case "logout-confirm.ftl":
            return <LogoutConfirm {...{ kcContext, ...props }} />;
          // case "update-user-profile.ftl":
          //   return <UpdateUserProfile {...{ kcContext, ...props }} />;
          // case "idp-review-user-profile.ftl":
          //   return <IdpReviewUserProfile {...{ kcContext, ...props }} />;

          case "my-extra-page-1.ftl":
            return <MyExtraPage1 {...{ kcContext, ...props }} />;
          case "my-extra-page-2.ftl":
            return <MyExtraPage2 {...{ kcContext, ...props }} />;
          default:
            return <KcAppBase {...{ kcContext, ...props }} />;
        }
      })()}
    </Suspense>
  );
}
