import React from "react";

export default function FilterButton({
  classname,
  value,
  buttonLabel,
  onClick,
}) {
  return (
    <button onClick={onClick} value={value} className={classname}>
      {buttonLabel}
    </button>
  );
}
