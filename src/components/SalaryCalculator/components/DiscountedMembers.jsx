export function DiscountedMembers({ checked, onChange }) {
  return (
    <li className="flex gap-[1rem] text-sm">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <label>Családi kedvezmény</label>
    </li>
  );
}
