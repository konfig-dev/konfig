import { FormEventHandler, useCallback, useState } from "react";

export function useSdkSignup({
  company,
  serviceName,
  language,
}: {
  company: string;
  serviceName: string;
  language: string;
}) {
  const url =
    process.env.NODE_ENV === "development"
      ? "http://localhost:8911/sdkSignupForm"
      : "https://api.konfigthis.com/sdkSignupForm";
  const [email, setEmail] = useState("");
  const [signedUp, setSignedUp] = useState(false);
  const [signedUpEmail, setSignedUpEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit: FormEventHandler = useCallback(
    async (event) => {
      event.preventDefault();
      setLoading(true);

      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            company,
            service: serviceName,
            language,
          }),
        });

        setLoading(false);

        if (!response.ok) {
          // handle error
        }

        setSignedUp(true);
        setSignedUpEmail(email);
      } catch (e) {
        // if error when calling fetch, set loading to false
        setLoading(false);
      }
    },
    [serviceName, company, email]
  );
  return {
    handleSubmit,
    email,
    setEmail,
    signedUp,
    signedUpEmail,
    loading,
    setLoading,
  };
}
