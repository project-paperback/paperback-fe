const TextArea = (props) => {
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
};

export default TextArea;
