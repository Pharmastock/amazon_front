import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const AddData = () => {
  const initialValues = {
    name: "",
    image: "",
    material: "",
    brand: "",
    color: "",
    description: "",
    MRP: "",
    sellingPrice: "",
    platform: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    image: Yup.string().url("Invalid URL").required("Required"),
    material: Yup.string().required("Required"),
    brand: Yup.string().required("Required"),
    color: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    MRP: Yup.number()
      .required("Required")
      .positive("Must be positive")
      .integer("Must be an integer"),
    sellingPrice: Yup.number()
      .required("Required")
      .positive("Must be positive")
      .integer("Must be an integer"),
    platform: Yup.string()
      .oneOf(["Amazon", "Flipkart", "Meesho"], "Invalid Platform")
      .required("Required"),
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    axios
      .post("https://aamzon-back.onrender.com/product/add", values)
      .then((response) => {
        console.log(response.data);
        alert("Product added successfully!");
        resetForm();
      })
      .catch((error) => {
        console.error("There was an error adding the product!", error);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <div className="container">
      <h1 className="text-center">Add Product</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="form-group">
            <label htmlFor="name">Name</label>
            <Field name="name" type="text" className="form-control" />
            <ErrorMessage name="name" component="div" className="text-danger" />

            <label htmlFor="image">Image URL</label>
            <Field name="image" type="text" className="form-control" />
            <ErrorMessage
              name="image"
              component="div"
              className="text-danger"
            />

            <label htmlFor="material">Material</label>
            <Field name="material" type="text" className="form-control" />
            <ErrorMessage
              name="material"
              component="div"
              className="text-danger"
            />

            <label htmlFor="brand">Brand</label>
            <Field name="brand" type="text" className="form-control" />
            <ErrorMessage
              name="brand"
              component="div"
              className="text-danger"
            />

            <label htmlFor="color">Color</label>
            <Field name="color" type="text" className="form-control" />
            <ErrorMessage
              name="color"
              component="div"
              className="text-danger"
            />

            <label htmlFor="description">Description</label>
            <Field name="description" as="textarea" className="form-control" />
            <ErrorMessage
              name="description"
              component="div"
              className="text-danger"
            />

            <label htmlFor="MRP">MRP</label>
            <Field name="MRP" type="number" className="form-control" />
            <ErrorMessage name="MRP" component="div" className="text-danger" />

            <label htmlFor="sellingPrice">Selling Price</label>
            <Field name="sellingPrice" type="number" className="form-control" />
            <ErrorMessage
              name="sellingPrice"
              component="div"
              className="text-danger"
            />

            <label htmlFor="platform">Platform</label>
            <Field name="platform" as="select" className="form-control">
              <option value="">Select Platform</option>
              <option value="Amazon">Amazon</option>
              <option value="Flipkart">Flipkart</option>
              <option value="Meesho">Meesho</option>
              <option value="All">All</option>
            </Field>
            <ErrorMessage
              name="platform"
              component="div"
              className="text-danger"
            />

            <button
              type="submit"
              className="btn btn-primary mt-3"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddData;
