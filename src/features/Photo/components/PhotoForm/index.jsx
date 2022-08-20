import Spinner from "components/Spinner";
import { PHOTO_CATEGORY } from "constant/global";
import InputField from "custom-fields/InputField";
import RandomPhotoField from "custom-fields/RandomPhotoField";
import SelectField from "custom-fields/SelectField";
import { FastField, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { Button, FormGroup } from "reactstrap";
import * as Yup from "yup";

function PhotoForm(props) {
  const { initialValues } = props;
  const Navigate = useNavigate();
  const initialValuesEmpty = {
    title: "",
    categoryId: "",
    photo: "",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("This field is required !"),

    categoryId: Yup.number().required("This field is required !"),

    photo: Yup.string().when("categoryId", {
      is: 1,
      then: Yup.string().required("This field is required !"),
      otherwise: Yup.string().notRequired(),
    }),
  });

  return (
    <Formik
      initialValues={initialValues ? initialValues : initialValuesEmpty}
      validationSchema={validationSchema}
      onSubmit={props.onSubmit}
    >
      {(formikProps) => {
        const { isSubmitting } = formikProps;
        return (
          <>
            {isSubmitting ? (
              <Spinner />
            ) : (
              <Form>
                <FastField
                  name="title"
                  placeholder="Eg: Wow nature..."
                  label="Title"
                  component={InputField}
                />
                <FastField
                  name="categoryId"
                  placeholder="Enter your photo category ?"
                  label="Category"
                  component={SelectField}
                  options={PHOTO_CATEGORY}
                />

                <FastField
                  label="Photo"
                  name="photo"
                  component={RandomPhotoField}
                />

                <FormGroup>
                  <Button
                    type="submit"
                    color={!initialValues ? "primary" : "success"}
                  >
                    {!initialValues ? "Add to Album" : "Update your Album"}
                  </Button>
                  <Button
                    color="secondary"
                    className="mx-3"
                    onClick={() => Navigate("/photos")}
                  >
                    Back
                  </Button>
                </FormGroup>
              </Form>
            )}
          </>
        );
      }}
    </Formik>
  );
}

export default PhotoForm;
