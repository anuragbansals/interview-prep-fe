import React, { useState } from "react";

function PopupOver() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      {clicked ? (
        <div
          style={{
            border: "1px solid black",
            width: 200,
          }}
        >
          This is a clicked container
        </div>
      ) : null}
    </div>
  );
}

export default PopupOver;
