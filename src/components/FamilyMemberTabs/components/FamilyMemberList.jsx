import React from "react";
import { Member } from "./Member";

export function FamilyMemberList({ member, onSelection }) {
  return (
    <div
      className={
        member.length > 0
          ? "flex bg-picton-blue-400 text-[0.6rem] text-white font-bold p-1 gap-[1rem] rounded-lg mr-2"
          : "flex text-[0.6rem] text-white font-bold p-1 gap-[1rem] rounded-lg mr-2"
      }
    >
      <ul>
        {member.map((member) => (
          <Member member={member} key={member.id} onSelection={onSelection} />
        ))}
      </ul>
    </div>
  );
}
