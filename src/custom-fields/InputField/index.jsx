import { ErrorMessage } from "formik";
import { FormFeedback, FormGroup, Input, Label } from "reactstrap";

const InputField = (props) => {
  const {
    field,
    form,
    type = "text",
    label,
    placeholder,
    disabled = false,
  } = props;

  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];
  return (
    <FormGroup>
      {label && <Label for={name}>{label} </Label>}
      <Input
        id={name}
        {...field}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        invalid={showError}
      ></Input>
      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  );
};

export default InputField;
