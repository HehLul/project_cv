function Button({ text, onChange }) {
  return <button onClick={onChange}>{text}</button>;
}
export default Button;
