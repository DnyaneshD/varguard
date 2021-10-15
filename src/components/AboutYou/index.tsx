import React from "react";
import { nations, titles } from "../../services/data";
import { getFieldError } from "../../services/getFieldError";
import ConfirmEmail from "../ConfirmEmail";
import Dropdown from "../Dropdown";
import Email from "../Email";
import EmailProvider from "../EmailProvider";
import Input from "../Input";
import { ValidationTypes } from "../interfaces";
import { validationRules } from "../Registration/validationsRules";
import "./styles.css";

function validate(fieldValues: { [k: string]: FormDataEntryValue }) {
  for (const key in fieldValues) {
    if (validationRules[key]) {
      const result = getFieldError(
        fieldValues[key].toString(),
        validationRules[key].isRequired,
        validationRules[key].validationType
      );

      if (result) {
        return false;
      }
    }
  }
  return true;
}

function AboutYou(props: { setCanShowNext: (val: boolean) => void }) {
  const [wasSubmitted, setWasSubmitted] = React.useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const fieldValues = Object.fromEntries(formData.entries());

    const formIsValid = validate(fieldValues);
    setWasSubmitted(true);

    if (formIsValid) {
      props.setCanShowNext(true);
      console.log(fieldValues);
      // This is the place where we decide if we want to
      // take fieldValues to global State/ in parent component/ in context
    }
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="form">
      <section className="message">
        Please fill in your details to complete the process
      </section>
      <section className="form-title">About you</section>

      <section className="title">
        <Dropdown
          dropdownKey="title"
          name="Title"
          values={titles}
          wasSubmitted={wasSubmitted}
          isRequried={true}
        />
      </section>

      <section className="name">
        <Input
          key="firstName"
          inputKey="firstName"
          name="First Name"
          wasSubmitted={wasSubmitted}
          validationType={ValidationTypes.OnlyLetters}
          isRequried={true}
        />
        <Input
          key="middleName"
          inputKey="middleName"
          name="Middle name(s)"
          wasSubmitted={wasSubmitted}
        />
        <Input
          key="lastName"
          inputKey="lastName"
          name="Last Name"
          wasSubmitted={wasSubmitted}
          validationType={ValidationTypes.OnlyLetters}
          isRequried={true}
        />
      </section>

      <section className="email">
        <EmailProvider>
          <Email
            inputKey="email"
            name="Email"
            wasSubmitted={wasSubmitted}
            isRequried={true}
            validationType={ValidationTypes.Email}
          />
          <ConfirmEmail
            inputKey="confirmEmail"
            name="Confirm Email"
            wasSubmitted={wasSubmitted}
          />
        </EmailProvider>
      </section>

      <section className="number">
        <Input
          key="insuranceNumber"
          inputKey="insuranceNumber"
          name="National Insurace number"
          withInfoIcon={true}
          wasSubmitted={wasSubmitted}
          validationType={ValidationTypes.InsuranceNumber}
          isRequried={true}
        />
      </section>

      <section className="nation">
        <Dropdown
          dropdownKey="nation"
          name="Country of Nationality"
          values={nations}
          withInfoIcon={true}
          wasSubmitted={wasSubmitted}
          isRequried={true}
        />
      </section>
      <button data-cy="submit" type="submit" className="next">
        Next
      </button>
    </form>
  );
}

export default AboutYou;
