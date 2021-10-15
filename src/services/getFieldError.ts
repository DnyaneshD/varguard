import { ValidationTypes } from "../components/interfaces";
import { email, insuranceNumber, onlyLetters } from "./validations";

export enum ERRORS {
  requiredField = "Field is required",
  onlyLetters = "Only letters",
  invalidInsuranceNumber = "Invalid number. Eg. SN123456G.",
  incorrectEmail = "Email is incorrect",
}

export function getFieldError(
  value: string | undefined,
  isRequired: boolean | undefined,
  validationType?: ValidationTypes | undefined
) {
  if (isRequired && !value) return ERRORS.requiredField;

  if (!value) {
    return null;
  }

  switch (validationType) {
    case ValidationTypes.Email:
      return !email(value) ? ERRORS.incorrectEmail : null;
    case ValidationTypes.OnlyLetters:
      return !onlyLetters(value) ? ERRORS.onlyLetters : null;
    case ValidationTypes.InsuranceNumber:
      return !insuranceNumber(value) ? ERRORS.invalidInsuranceNumber : null;
    default:
      return null;
  }
}
