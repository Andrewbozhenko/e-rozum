export const ButtonEnroll = ({ text, onClick, className }) => {
  return (
    <button
      className={`button__enroll ${className ? className : ""}`}
      onClick={onClick}
    >
      {text}
      <span></span>
    </button>
  );
};
