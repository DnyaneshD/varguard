import React from "react";
import { getFieldError } from "../../services/getFieldError";
import { EmailContext, SetEmailContext } from "../EmailProvider";
import { ValidationTypes } from "../interfaces";

interface InputProps {
  inputKey: string;
  name: string;
  wasSubmitted: boolean;
  isRequried?: boolean;
  validationType?: ValidationTypes;
}

function useEmail() {
  const email = React.useContext(EmailContext);
  if (email === null) {
    throw new Error("useEmail must be used in a decendent of EmailProvider");
  }
  return email;
}

function useSetEmail() {
  const setEmail = React.useContext(SetEmailContext);
  if (setEmail === null) {
    throw new Error("useEmail must be used in a decendent of EmailProvider");
  }
  return setEmail;
}

function Email(props: InputProps) {
  const { inputKey, name, isRequried, validationType, wasSubmitted } = props;

  const [value, setValue] = [useEmail(), useSetEmail()];
  const [touched, setTouched] = React.useState(false);
  const errorMessage = getFieldError(value, isRequried, validationType);
  const displayErrorMessage = (wasSubmitted || touched) && errorMessage;

  return (
    <section className=" inline-position">
      <label htmlFor={`${inputKey}-input`} data-testid={`${inputKey}-testid`}>
        {name}
      </label>{" "}
      <section>
        <input
          id={`${inputKey}-input`}
          name={inputKey}
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

export default Email;
