import React from "react";

const SubmitButton = ({ fields, setResponse, setError }) => {
  const handleSubmit = async () => {
    if (Object.values(fields).some((value) => value.trim() === "")) {
      alert("Please fill out all fields before submitting.");
      return;
    }

    try {
      const res = await fetch("https://api.gemini.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });

      if (!res.ok) {
        throw new Error("Failed to fetch response from Gemini API");
      }

      const data = await res.json();
      setResponse(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setResponse(null);
    }
  };

  return (
    <button
      onClick={handleSubmit}
      className="mt-4 p-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
    >
      Submit
    </button>
  );
};

export default SubmitButton;
