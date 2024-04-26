const InputField = (props) => {
  return (
    <div className="w-full">
      <label htmlFor={props.id}>{props.labelValue}</label>
      <input
        type={props.type}
        name=""
        id={props.id}
        placeholder={props.placeholder}
        className={props.styles}
      />
    </div>
  );
};

export default InputField;
