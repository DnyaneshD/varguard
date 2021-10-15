import React from "react";
import { EmailContext } from "../EmailProvider";

function useEmail() {
  const email = React.useContext(EmailContext);
  if (email === null) {
    throw new Error("useEmail must be used in a decendent of EmailProvider");
  }
  return email;
}

interface IConfirmEmail {
  inputKey: string;
  name: string;
  wasSubmitted: boolean;
}

function ConfirmEmail(props: IConfirmEmail) {
  const { inputKey, name, wasSubmitted } = props;

  const emailValue = useEmail();
  const [value, setValue] = React.useState("");
  const [touched, setTouched] = React.useState(false);
  const errorMessage = emailValue !== value ? "email does not match" : null;
  const displayErrorMessage = (wasSubmitted || touched) && errorMessage;

  return (
    <section className=" inline-position">
      <label htmlFor={`${inputKey}-input`} data-testid={`${inputKey}-testid`}>
        {name}
      </label>{" "}
      <section>
        <input
          id={`${inputKey}-input`}
          name={name}
          type="text"
          onChange={(event) => setValue(event.currentTarget.value)}
          onBlur={() => setTouched(true)}
          data-cy={inputKey}
        />
      </section>
      {displayErrorMessage ? (
        <span
          role="alert"
          data-cy={`${inputKey}-error`}
          className="error-message"
        >
          {errorMessage}
        </span>
      ) : null}
    </section>
  );
}

export default ConfirmEmail;
