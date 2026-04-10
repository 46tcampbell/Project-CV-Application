import '../styles/Button.css';

export default function Button({
  clickHandler,
  text,
  color = 'white',
  backgroundColor,
  dataId = '',
}) {
  return (
    <button
      style={{ color: color, backgroundColor: backgroundColor }}
      onClick={clickHandler}
      data-id={dataId}
    >
      {text}
    </button>
  );
}
