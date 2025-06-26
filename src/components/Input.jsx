function Input({ textarea, label, ...props }) {
  const inputStyleClass =
    "bg-stone-200 p-1 border-b-2 border-stone-300 text-stone-600 rounded-sm focus:outline-none focus:border-stone-600";
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500 ">
        {label}
      </label>
      {textarea ? (
        <textarea {...props} className={inputStyleClass} />
      ) : (
        <input {...props} className={inputStyleClass} />
      )}
    </p>
  );
}

export default Input;
