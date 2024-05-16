export function ApprovedMarriage({ marriageDate }) {
  if (!marriageDate) {
    return null;
  }

  const currentDate = new Date();
  const marriageDateObj = new Date(marriageDate);
  const differenceInMilliseconds = currentDate - marriageDateObj;
  const differenceInYears =
    differenceInMilliseconds / (1000 * 60 * 60 * 24 * 365);

  return (
    <div
      style={{
        backgroundColor: differenceInYears <= 2 ? "#aacc00" : "#ef233c",
        fontSize: "0.8em",
        color: "white",
        padding: "1px 10px",
        borderRadius: "5px",
      }}
    >
      <p>{differenceInYears <= 2 ? "Jogosult" : "Nem jogosult"}</p>
    </div>
  );
}
