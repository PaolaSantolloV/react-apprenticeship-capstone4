import React from "react";

// eslint-disable-next-line react/prop-types
function Checkbox({ title, id, value, onCheck, onChange }) {
  return (
    <input
      type="checkbox"
      title={title}
      id={id}
      value={value}
      checked={onCheck}
      onChange={onChange}
    />
  );
}

export default Checkbox;
