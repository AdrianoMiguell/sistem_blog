import React, { useState } from "react";

const EditButton = () => {
  const [hidden, setHidden] = useState(true);

  return (
    <div>
      <i
        class="bi bi-pencil-square"
        onClick={() => {
          setHidden(!hidden);
          console.log(hidden);
        }}
        style={{ cursor: "pointer" }}
      ></i>
    </div>
  );
};

export default EditButton;
