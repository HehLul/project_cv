function Button({ text, onChange }) {
  function handleSaveButtonClicked(e) {
    console.log("inside button componenet:s" + e.target.value);
  }
  return (
    <button type="submit" onClick={handleSaveButtonClicked}>
      {text}
    </button>
  );
}
export default Button;
