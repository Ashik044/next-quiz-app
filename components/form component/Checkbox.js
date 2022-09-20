export default function Checkbox({ style, text, ...rest }) {
  return (
    <label className={style}>
      <input className="mr-2" type="checkbox" {...rest} /> <span>{text}</span>
    </label>
  );
}
