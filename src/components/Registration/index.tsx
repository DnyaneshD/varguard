import { useState } from "react";
import AboutYou from "../AboutYou";
import NextPage from "../NextPage";

function Registration() {
  const [canShowNext, setCanShowNext] = useState(false);
  return (
    <>
      {!canShowNext ? (
        <AboutYou setCanShowNext={setCanShowNext} />
      ) : (
        <NextPage />
      )}
    </>
  );
}

export default Registration;
