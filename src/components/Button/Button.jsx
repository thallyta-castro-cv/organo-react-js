import "./Button.css";

export const Button = ({ children, text }) => {
  return (
    <button className="button">
      {children}
      {text}
    </button>
  );
};
