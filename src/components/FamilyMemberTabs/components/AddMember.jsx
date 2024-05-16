import React from "react";

export function AddMember({
  name,
  netSalary,
  onAddFriend,
  isUnder25Exempt,
  isDiscounted,
  isPersonalTaxAllowanceChecked,
  isCheckedDiscountedMembers,
  people,
  discountedPeople,
  grossSalary,
}) {
  function handleOnClick(e) {
    if (name === "" || netSalary === "") {
      return;
    }

    const id = crypto.randomUUID();
    const newMember = {
      name: name,
      netSalary: netSalary,
      id,
      isUnder25Exempt: isUnder25Exempt,
      isDiscounted: isDiscounted,
      isPersonalTaxAllowanceChecked: isPersonalTaxAllowanceChecked,
      isCheckedDiscountedMembers: isCheckedDiscountedMembers,
      people: people,
      discountedPeople: discountedPeople,
      grossSalary: grossSalary,
    };

    onAddFriend(newMember);
  }

  return (
    <button
      onClick={handleOnClick}
      className="bg-picton-blue-400 px-2 text-white rounded-md "
    >
      +
    </button>
  );
}
