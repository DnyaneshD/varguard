import React from "react";
import { getFieldError } from "../../services/getFieldError";
import { ValidationTypes } from "../interfaces";
import "./styles.css";
import infoIcon from "../../assests/info.svg";

interface InputProps {
  inputKey: string;
  name: string;
  wasSubmitted: boolean;
  withInfoIcon?: boolean;
  isRequried?: boolean;
  validationType?: ValidationTypes;
}

function Input(props: InputProps) {
  const {
    inputKey,
    name,
    withInfoIcon,
    isRequried,
    validationType,
    wasSubmitted,
  } = props;

  const [value, setValue] = React.useState("");
  const [touched, setTouched] = React.useState(false);
  const errorMessage = getFieldError(value, isRequried, validationType);
  const displayErrorMessage = (wasSubmitted || touched) && errorMessage;

  return (
    <section className="inline-position">
      <label htmlFor={`${inputKey}-input`} data-testid={`${inputKey}-testid`}>
        {name}
      </label>{" "}
      {withInfoIcon && <img src={infoIcon} alt="" />}
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

export default Input;
