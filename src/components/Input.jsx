function Input({ textarea, label, ...props }) {
  return (
    <p className="flex flex-col gap-2">
      <label>{label}</label>
      {textarea ? <textarea {...props} /> : <input {...props} />}
    </p>
  );
}

export default Input;
