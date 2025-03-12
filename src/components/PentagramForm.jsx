import React, { useState } from "react";
import ResetButtons from "./ResetButtons";
import SubmitButton from "./SubmitButton";

const PentagramForm = () => {
  const [fields, setFields] = useState({
    persona: "",
    context: "",
    task: "",
    output: "",
    constraint: "",
  });
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-4 border rounded-lg max-w-lg mx-auto">
      {Object.keys(fields).map((field, index) => (
        <div key={index} className="mb-2">
          <label className="block text-sm font-medium mb-1">
            {field.toUpperCase()}
          </label>
          <input
            type="text"
            name={field}
            value={fields[field]}
            onChange={handleInputChange}
            className="border p-2 rounded w-full"
          />
          <ResetButtons field={field} fields={fields} setFields={setFields} />
        </div>
      ))}
      <ResetButtons isResetAll fields={fields} setFields={setFields} />
      <SubmitButton
        fields={fields}
        setResponse={setResponse}
        setError={setError}
      />
      {response && (
        <div className="mt-4 p-2 bg-green-100 border border-green-400 rounded">
          {JSON.stringify(response)}
        </div>
      )}
      {error && (
        <div className="mt-4 p-2 bg-red-100 border border-red-400 rounded">
          {error}
        </div>
      )}
    </div>
  );
};

export default PentagramForm;
