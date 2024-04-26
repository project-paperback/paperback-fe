export function InputField(props) {
  return (
    <div className="w-full">
      <label htmlFor={props.id}>{props.labelValue}</label>
      <input
        autoComplete={props.autoComplete}
        type={props.type}
        name=""
        id={props.id}
        placeholder={props.placeholder}
        className={props.styles}
      />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="w-full">
      <label htmlFor={props.id}>{props.labelValue}</label>
      <textarea
        type={props.type}
        name=""
        id={props.id}
        placeholder={props.placeholder}
        className={props.styles}
      />
    </div>
  );
}
