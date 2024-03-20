import React, { useState } from 'react';
import "./Formcreation.css"

const FormCreationApp = () => {
  const [formFields, setFormFields] = useState([]);
  const [fieldName, setFieldName] = useState('');
  const [fieldType, setFieldType] = useState('text');
  const [submitted, setSubmitted] = useState(false); // State to track form submission

  const addField = () => {
    if (fieldName.trim() === '') {
      alert('Please enter a field name.');
      return;
    }

    setFormFields([...formFields, { name: fieldName, type: fieldType }]);
    setFieldName('');
  };

  const deleteField = (index) => {
    const updatedFields = [...formFields];
    updatedFields.splice(index, 1);
    setFormFields(updatedFields);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); // Update state to indicate form submission
    console.log('Form submitted with fields:', formFields);
    // You can implement form submission logic here
    // For demonstration purposes, showing an alert
    alert('Form submitted successfully!');

    // Set a timer to reset the submitted state after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="form-box">
      <div className="form-container">
        <h2 className="form-heading">Form Creation Application</h2> 
        <form onSubmit={handleSubmit}>
          <div className="form-field"> 
            <label htmlFor="fieldName" className="form-label">Field Name:</label> 
            <input
              type="text"
              id="fieldName"
              value={fieldName}
              onChange={(e) => setFieldName(e.target.value)}
              className="form-input" 
            />
          </div>
          <div className="form-field"> 
            <label htmlFor="fieldType" className="form-label">Field Type:</label> 
            <select
              id="fieldType"
              value={fieldType}
              onChange={(e) => setFieldType(e.target.value)}
              className="form-select" 
            >
              <option value="text">Text</option>
              <option value="email">Email</option>
              <option value="number">Number</option>
              <option value="textarea">Textarea</option>
            </select>
          </div>
          <button type="button" onClick={addField} className="form-button"> 
            Add Field
          </button>
          <ul className="form-field-list"> 
            {formFields.map((field, index) => (
              <li key={index} className="form-field-item"> 
                {field.name} ({field.type})
                <button type="button" onClick={() => deleteField(index)} className="form-delete-button"> 
                  Delete
                </button>
              </li>
            ))}
          </ul>
          <button type="submit" className="form-submit-button">Submit Form</button> 
        </form>
      </div>
      {submitted && <p className="form-submitted-message">Form submitted successfully!</p>}
    </div>
  );
};

export default FormCreationApp;
