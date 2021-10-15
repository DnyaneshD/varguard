import React from "react";
import { getFieldError } from "../../services/getFieldError";
import infoIcon from "../../assests/info.svg";

interface Value {
  key: string;
  value: string;
}

interface IDropdownProps {
  dropdownKey: string;
  name: string;
  values: Array<Value>;
  wasSubmitted: boolean;
  withInfoIcon?: boolean;
  isRequried?: boolean;
}

function Dropdown(props: IDropdownProps) {
  const { dropdownKey, name, values, withInfoIcon, isRequried, wasSubmitted } =
    props;
  const [value, setValue] = React.useState("");
  const errorMessage = getFieldError(value, isRequried);
  const displayErrorMessage = wasSubmitted && errorMessage;

  return (
    <section>
      <label>{name}</label> {withInfoIcon && <img src={infoIcon} alt="" />}
      <section>
        <select
          value={value}
          onChange={(event) => setValue(event.target.value)}
          name={dropdownKey}
          data-testid={`${name}-testid`}
          data-cy={dropdownKey}
        >
          <option value="">Please select</option>
          {values.map((e: Value) => (
            <option key={e.key} value={e.key}>
              {e.value}
            </option>
          ))}
        </select>
      </section>
      {displayErrorMessage ? (
        <span
          role="alert"
          data-cy={`${dropdownKey}-error`}
          className="error-message"
        >
          {errorMessage}
        </span>
      ) : null}
    </section>
  );
}

export default Dropdown;
