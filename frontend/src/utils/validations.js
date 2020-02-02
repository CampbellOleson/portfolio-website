import Validator from "validator";

const validateFormInput = ({ name, email, phone }) => {
  const result = {};

  if (Validator.isEmpty(name)) {
    result["name"] = "Please provide your name";
    result["isValid"] = false;
    return result;
  }

  if (Validator.isEmpty(email) && Validator.isEmpty(phone)) {
    result["contact"] = "Please provide me with a way to contact you";
    result["isValid"] = false;
    return result;
  }

  if (!Validator.isEmail(email)) {
    result["contact"] = "Please provide a valid email";
    result["isValid"] = false;
    return result;
  }

  result["isValid"] = true;
  return result;
};

export default validateFormInput;
