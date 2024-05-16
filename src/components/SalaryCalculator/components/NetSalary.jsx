export function NetSalary({ netSalary, selectedMember }) {
  const salaryToFormat = selectedMember ? selectedMember.netSalary : netSalary;

  const formattedNetSalary =
    salaryToFormat !== ""
      ? `${Number(salaryToFormat).toLocaleString("hu-HU")} Ft`
      : "0 Ft";

  return (
    <p className="bg-gradient-to-br from-picton-blue-300 to-picton-blue-700 p-3 rounded-md font-bold text-white">
      {formattedNetSalary}
    </p>
  );
}
