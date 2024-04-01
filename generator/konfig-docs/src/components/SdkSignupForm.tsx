import { IconPencil } from "@tabler/icons-react";
import { useSdkSignup } from "../util/use-sdk-signup";
import { LoadingIcon } from "./LoadingIcon";
import clsx from "clsx";

export function SdkSignupForm({
  doNotShowQuestion,
}: {
  doNotShowQuestion?: boolean;
}) {
  const { setEmail, signedUp, signedUpEmail, loading, handleSubmit, email } =
    useSdkSignup({});

  return (
    <form
      onSubmit={handleSubmit}
      id="signup"
      className="py-4 px-8 rounded-md bg-blue-100 ring-1 transition-all hover:scale-[1.01] hover:shadow-lg shadow-md my-8"
    >
      <div className="flex flex-col">
        {((!signedUp && !doNotShowQuestion) || signedUp) && (
          <h2
            className={clsx("text-base md:text-lg text-blue-900 font-bold", {
              "mb-3": !signedUp,
            })}
          >
            {signedUp
              ? `Thanks for signing up for access to Konfig SDKs 🎉!`
              : `Start building faster with Konfig SDKs`}
          </h2>
        )}
        {signedUp ? (
          <div className="text-blue-800">
            <p className="mb-4 !mt-0">
              Your email, <span className="italic">{signedUpEmail}</span>, has
              been successfully registered for access to Konfig SDKs. We will
              notify you by email soon.
            </p>
            <p className="mb-0">
              For questions, please contact us at{" "}
              <a href="mailto:sdks@konfigthis.com" className="font-bold">
                sdks@konfigthis.com
              </a>
            </p>
          </div>
        ) : null}
        {signedUp ? null : (
          <input
            type="email"
            name="email"
            className="rounded-md border px-2 py-1 w-full mb-2"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        )}
        {signedUp ? null : (
          <button
            type="submit"
            className="font-medium group flex gap-3 hover:gap-2 items-center transition-all bg-gradient-to-br text-white w-fit text-center px-3 py-2 from-blue-600 to-blue-800 rounded-md text-sm"
          >
            {loading ? (
              <LoadingIcon />
            ) : (
              <>
                <div>Sign up for access to Konfig SDKs</div>
                <IconPencil
                  size="1rem"
                  className="transition-all group-hover:text-blue-50 text-blue-300"
                />
              </>
            )}
          </button>
        )}
      </div>
    </form>
  );
}
