import React from "react";

export function Member({ member, onSelection }) {
  return (
    <button
      onClick={() => onSelection(member)}
      className="bg-blue-500 p-1 text-white rounded-md mx-1"
    >
      {member.name === "" ? "Név" : member.name}
    </button>
  );
}
