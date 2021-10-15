function email(email: string) {
  const regex =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[x01-x08x0bx0cx0e-x1fx21x23-x5bx5d-x7f]|\\[x01-x09x0bx0cx0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[x01-x08x0bx0cx0e-x1f\x21-\x5a\x53-\x7f]|\\[x01-x09x0bx0cx0e-\x7f])+)\])/g;
  return regex.test(email);
}

function insuranceNumber(insuranceNumber: string) {
  const regex = /^\s*[a-zA-Z]{2}(?:\s*\d\s*){6}[a-zA-Z]{1}\s*$/;
  return regex.test(insuranceNumber);
}

function onlyLetters(input: string) {
  const regex = /^[A-Za-z]+$/;
  return regex.test(input);
}

export { email, onlyLetters, insuranceNumber };
