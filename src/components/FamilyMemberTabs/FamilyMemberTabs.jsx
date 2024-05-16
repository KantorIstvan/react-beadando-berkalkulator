import React, { useState, useEffect } from "react";
import { AddMember } from "./components/AddMember";
import { FamilyMemberList } from "./components/FamilyMemberList";

function FamilyMemberTabs({
  name,
  netSalary,
  isUnder25Exempt,
  isDiscounted,
  isPersonalTaxAllowanceChecked,
  isCheckedDiscountedMembers,
  people,
  discountedPeople,
  member,
  setMember,
  handleAddMember,
  onSelection,
  selectedMember,
  setSelectedMember,
  grossSalary,
  setGrossSalary,
}) {
  useEffect(() => {
    console.log(member);
  }, [member]);

  function handleSelection(member) {
    setSelectedMember(member);
    console.log(selectedMember);
  }

  return (
    <div className="flex">
      <FamilyMemberList
        member={member}
        name={member.name}
        netSalary={member.netSalary}
        onSelection={handleSelection}
      />
      <AddMember
        name={name}
        netSalary={netSalary}
        onAddFriend={handleAddMember}
        isUnder25Exempt={isUnder25Exempt}
        isDiscounted={isDiscounted}
        isPersonalTaxAllowanceChecked={isPersonalTaxAllowanceChecked}
        isCheckedDiscountedMembers={isCheckedDiscountedMembers}
        people={people}
        discountedPeople={discountedPeople}
        grossSalary={grossSalary}
      />
    </div>
  );
}

export default FamilyMemberTabs;
