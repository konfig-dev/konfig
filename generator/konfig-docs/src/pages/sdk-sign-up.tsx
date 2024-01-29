import Layout from "@theme/Layout";
import React from "react";
import { useSdkSignup } from "../util/use-sdk-signup";
import clsx from "clsx";
import { LoadingIcon } from "../components/LoadingIcon";
import { IconPencil } from "@tabler/icons-react";

export default function SdkSignUp() {
  // get query parameters
  const urlParams = new URLSearchParams(window.location.search);
  const company = urlParams.get("company");
  const serviceName = urlParams.get("serviceName");
  const language = urlParams.get("language");
  const { handleSubmit, signedUp, signedUpEmail, email, setEmail, loading } =
    useSdkSignup({ company, serviceName, language });

  return (
    <Layout
      title={`${company} ${serviceName} API ${language} SDK`}
      description={`SDK Signup Form for ${company} ${serviceName} API ${language} SDK`}
    >
      <form
        onSubmit={handleSubmit}
        id="signup"
        className="p-8 rounded-md bg-emerald-50 ring-1 ring-emerald-300 transition-all hover:scale-[1.01] hover:shadow-lg shadow-md mb-8"
      >
        <div className="flex flex-col">
          <h2
            className={clsx("text-lg lg:text-xl text-emerald-900 font-bold", {
              "mb-3": !signedUp,
            })}
          >
            {signedUp
              ? `Thanks for signing up for access to ${company}'s ${language} SDK 🎉!`
              : `Need a ${language} SDK for ${company}'s API?`}
          </h2>
          {signedUp ? (
            <>
              <p className="mb-4">{`Your email, ${signedUpEmail}, has been successfully registered for access to the ${language} SDK. We will notify you as soon as it is available.`}</p>
              <p className="mb-0">
                For inquiries or support, please contact us at{" "}
                <a href="mailto:sdks@konfigthis.com">sdks@konfigthis.com</a>
              </p>
            </>
          ) : null}
          {signedUp ? null : (
            <input
              type="email"
              name="email"
              className="border rounded-md px-2 py-1 w-full mb-2"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          )}
          {signedUp ? null : (
            <button
              type="submit"
              className="font-medium group flex gap-3 hover:gap-2 items-center transition-all bg-gradient-to-br text-white w-fit text-center px-3 py-2 from-emerald-600 to-emerald-800 rounded-md text-sm"
            >
              {loading ? (
                <LoadingIcon />
              ) : (
                <>
                  <div>
                    Sign up for access to {company}'s {language} SDK
                  </div>
                  <IconPencil
                    size="1rem"
                    className="transition-all group-hover:text-emerald-50 text-emerald-300"
                  />
                </>
              )}
            </button>
          )}
        </div>
      </form>
    </Layout>
  );
}
