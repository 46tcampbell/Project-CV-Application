import '../styles/Button.css';

export default function Button({
  clickHandler,
  text,
  color = 'white',
  backgroundColor,
}) {
  return (
    <button
      style={{ color: color, backgroundColor: backgroundColor }}
      onClick={clickHandler}
    >
      {text}
    </button>
  );
}
