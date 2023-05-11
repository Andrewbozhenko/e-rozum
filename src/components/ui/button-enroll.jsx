export const ButtonEnroll = ({ text, onClick }) => {
  return (
    <button className="button__enroll" onClick={onClick}>
      {text}
      <span></span>
    </button>
  );
};
