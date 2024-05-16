function HouseholdSummary({ member }) {
  const totalNetSalary = member.reduce(
    (total, member) => total + Number(member.netSalary),
    0
  );

  const formattedTotalNetSalary = new Intl.NumberFormat("hu-HU", {
    style: "currency",
    currency: "HUF",
  }).format(totalNetSalary);

  return (
    <div className="bg-slate-300 rounded-lg p-4">
      <h2 className="text-xl font-bold mb-2">
        Háztartás összesített jövedelme
      </h2>
      <div className="flex justify-around p-3 rounded-md bg-white/50">
        <table className=" w-[25rem]">
          <thead>
            <tr>
              <th className="p-1 border-[5px] rounded-2xl bg-white">
                Családtag
              </th>
              <th className="p-1 border-[5px] rounded-2xl bg-white">
                Nettó bér
              </th>
            </tr>
          </thead>
          <tbody>
            {member.map((member) => {
              const formattedNetSalary = new Intl.NumberFormat("hu-HU", {
                style: "currency",
                currency: "HUF",
              }).format(member.netSalary);

              return (
                <tr key={member.name}>
                  <td className="p-1 border-[5px] rounded-2xl bg-white">
                    {member.name === "" ? "Név" : member.name}
                  </td>
                  <td className="p-1 border-[5px] rounded-2xl bg-white">
                    {formattedNetSalary}
                  </td>
                </tr>
              );
            })}
            <tr>
              <td className="p-1 border-[5px] rounded-2xl bg-white">
                Összesen
              </td>
              <td className="p-1 border-[5px] rounded-2xl bg-white">
                {formattedTotalNetSalary}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HouseholdSummary;
