function InputField({ placeholder, name = "", onChange }) {
  if (placeholder === "Details") {
    return <textarea placeholder={placeholder} name={name}></textarea>;
  }
  return (
    <input
      type="text"
      placeholder={placeholder}
      name={name}
      onChange={onChange}
    />
  );
}

export default InputField;
