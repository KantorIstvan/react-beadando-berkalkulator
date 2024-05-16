export function Range({ value, onChange }) {
  return (
    <input
      className="w-[100%] m-0"
      type="range"
      value={value}
      onChange={onChange}
      min="0"
      max="5000000"
    />
  );
}
