import { ValidationTypes } from "../interfaces";

interface Rule {
  [key: string]: {
    validationType: ValidationTypes;
    isRequired: boolean;
  };
}

export const validationRules: Rule = {
  firstName: {
    validationType: ValidationTypes.OnlyLetters,
    isRequired: true,
  },
  lastName: {
    validationType: ValidationTypes.OnlyLetters,
    isRequired: true,
  },
  insuranceNumber: {
    validationType: ValidationTypes.InsuranceNumber,
    isRequired: true,
  },
  email: {
    validationType: ValidationTypes.Email,
    isRequired: true,
  },
};
