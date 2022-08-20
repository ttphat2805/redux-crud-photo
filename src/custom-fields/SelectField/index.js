import { ErrorMessage } from "formik";
import Select from "react-select";
import { FormFeedback, FormGroup, Label } from "reactstrap";
const SelectField = (props) => {
  const { field, form, options, label, placeholder, disabled = false } = props;
  const { name, value } = field;

  const { errors, touched } = form;
  const showError = errors[name] && touched[name];
  const selectedValue = options.find((option) => option.value === value);

  const handleSelectedChange = (selected) => {
    const selectedValue = selected ? selected.value : selected;
    const ChangeEvent = {
      target: {
        name: name,
        value: selectedValue,
      },
    };
    field.onChange(ChangeEvent);
  };

  return (
    <FormGroup>
      {label && <Label for={name}>{label} </Label>}
      <Select
        id={name}
        {...field}
        value={selectedValue}
        onChange={handleSelectedChange}
        placeholder={placeholder}
        isDisabled={disabled}
        options={options}
        className={showError ? "is-invalid" : ""}
      ></Select>
      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  );
};

export default SelectField;
