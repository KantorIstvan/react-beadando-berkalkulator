import React, { useState } from "react";
import FamilyMemberTabs from "./FamilyMemberTabs/FamilyMemberTabs";
import HouseholdSummary from "./HouseholdSummary/HouseholdSummary";
import SalaryCalculator from "./SalaryCalculator/SalaryCalculator";

const HouseholdSalaryCalculator = () => {
  const [name, setName] = useState("");
  const [netSalary, setNetSalary] = useState();
  const [grossSalary, setGrossSalary] = useState("");
  const [isUnder25Exempt, setIsUnder25Exempt] = useState(false);
  const [isDiscounted, setIsDiscounted] = useState(false);
  const [isPersonalTaxAllowanceChecked, setIsPersonalTaxAllowanceChecked] =
    useState(false);
  const [isCheckedDiscountedMembers, setIsCheckedDiscountedMembers] =
    useState(false);
  const [people, setPeople] = useState(1);
  const [discountedPeople, setDiscountedPeople] = useState(0);
  const [member, setMember] = useState([]);
  const [selectedMember, setSelectedMember] = useState(null);

  function handleAddMember(member) {
    setMember((members) => [...members, member]);
  }

  return (
    <div className="flex p-[5rem] justify-center h-screen bg-gradient-to-br from-picton-blue-300 to-picton-blue-700 ">
      <div className="w-[80%] h-[110%] p-5 bg-gradient-to-br from-picton-blue-800 to-picton-blue-950 rounded-lg">
        <header className="ml-[2%]">
          <FamilyMemberTabs
            name={name}
            setName={setName}
            netSalary={netSalary}
            setNetSalary={setNetSalary}
            isUnder25Exempt={isUnder25Exempt}
            setIsUnder25Exempt={setIsUnder25Exempt}
            isDiscounted={isDiscounted}
            setIsDiscounted={setIsDiscounted}
            isPersonalTaxAllowanceChecked={isPersonalTaxAllowanceChecked}
            setIsPersonalTaxAllowanceChecked={setIsPersonalTaxAllowanceChecked}
            isCheckedDiscountedMembers={isCheckedDiscountedMembers}
            setIsCheckedDiscountedMembers={setIsCheckedDiscountedMembers}
            people={people}
            setPeople={setPeople}
            discountedPeople={discountedPeople}
            setDiscountedPeople={setDiscountedPeople}
            member={member}
            setMember={setMember}
            handleAddMember={handleAddMember}
            selectedMember={selectedMember}
            setSelectedMember={setSelectedMember}
            grossSalary={grossSalary}
            setGrossSalary={setGrossSalary}
          />
        </header>
        <main>
          <div className="flex gap-[5rem] justify-center">
            <SalaryCalculator
              name={name}
              setName={setName}
              netSalary={netSalary}
              setNetSalary={setNetSalary}
              isUnder25Exempt={isUnder25Exempt}
              setIsUnder25Exempt={setIsUnder25Exempt}
              isDiscounted={isDiscounted}
              setIsDiscounted={setIsDiscounted}
              isPersonalTaxAllowanceChecked={isPersonalTaxAllowanceChecked}
              setIsPersonalTaxAllowanceChecked={
                setIsPersonalTaxAllowanceChecked
              }
              isCheckedDiscountedMembers={isCheckedDiscountedMembers}
              setIsCheckedDiscountedMembers={setIsCheckedDiscountedMembers}
              people={people}
              setPeople={setPeople}
              discountedPeople={discountedPeople}
              setDiscountedPeople={setDiscountedPeople}
              selectedMember={selectedMember}
              grossSalary={grossSalary}
              setGrossSalary={setGrossSalary}
            />
            <HouseholdSummary member={member} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default HouseholdSalaryCalculator;
