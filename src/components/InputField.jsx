function InputField({ placeholder }) {
  if (placeholder === "Details") {
    return <textarea placeholder={placeholder}></textarea>;
  }
  return <input type="text" placeholder={placeholder} />;
}

export default InputField;
