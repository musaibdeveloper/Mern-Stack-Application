import React, { useState, useEffect } from "react";
import "./Input.css"; // Make sure this path is correct for your CSS file

const MyForm = () => {
  // State for form values
  const [formValues, setFormValues] = useState({ title: "", description: "" });
  // State for form errors
  const [formErrors, setFormErrors] = useState({});
  // State to check if form is being submitted
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form value changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmitting(true);
  };

  // Submit form if there are no errors
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      submitForm();
    }
  }, [formErrors]);

  // Function to simulate form submission
  const submitForm = () => {
    console.log(formValues);
    // Here you would usually send the formValues to a backend service
    // Reset isSubmitting
    setIsSubmitting(false);
  };

  // Validate form inputs
  const validate = (values) => {
    let errors = {};

    if (!values.title) {
      errors.title = "Title is required";
    }

    if (!values.description) {
      errors.description = "Description is required";
    } else if (values.description.length < 5) {
      errors.description = "Description must be at least 5 characters";
    }

    return errors;
  };

  return (
    <div className="form-container">
      <h1>Share your Place 😊</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-field">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formValues.title}
            onChange={handleChange}
            className="input-field"
          />
          {formErrors.title && <div className="error">{formErrors.title}</div>}
        </div>
        <div className="form-field">
          <label htmlFor="description">Description (min 5 letters)</label>
          <input
            type="text"
            id="description"
            name="description"
            value={formValues.description}
            onChange={handleChange}
            className="input-field"
          />
          {formErrors.description && (
            <div className="error">{formErrors.description}</div>
          )}
        </div>
        <button type="submit" className="submit-button">
          Add Place
        </button>
      </form>
    </div>
  );
};

export default MyForm;
