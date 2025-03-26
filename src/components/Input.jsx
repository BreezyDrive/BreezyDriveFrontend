import React from "react";

const Input = ({ label, type = "text", name, value, onChange, placeholder }) => {
  return (
    <div className="mb-4">
      {label && <label className="block text-gray-700 font-medium mb-1">{label}</label>}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
      />
    </div>
  );
};

export default Input;
