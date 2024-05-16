export function InputField({ placeholder, onChange, value }) {
  return (
    <input
      className="rounded-md p-2 w-[15rem] h-[2rem]"
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
}
