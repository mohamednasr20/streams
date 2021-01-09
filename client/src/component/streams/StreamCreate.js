import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createStream } from "../../actions";

const StreamCreate = ({ handleSubmit, createStream }) => {
  const renderError = ({ touched, error }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="error">{error}</div>
        </div>
      );
    }
  };
  const renderInput = ({ input, label, meta }) => {
    const errorClass = meta.touched && meta.error ? "error" : "";
    return (
      <div className={`field ${errorClass}`}>
        <label>{label}</label>
        <input {...input} />
        {renderError(meta)}
      </div>
    );
  };

  const onSubmit = (formValues) => {
    createStream(formValues);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="ui form error">
      <Field name="title" component={renderInput} label="Enter Title" />
      <Field
        name="description"
        component={renderInput}
        label="Enter Description"
      />
      <button className="ui button primary">Submit</button>
    </form>
  );
};

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "You must enter title";
  }
  if (!formValues.description) {
    errors.description = "You must enter description";
  }

  return errors;
};

const formWrapped = reduxForm({
  form: "streamCreate",
  validate,
})(StreamCreate);

export default connect(null, { createStream })(formWrapped);
