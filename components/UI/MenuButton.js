import React, { useState } from "react";

export const MenuButton = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  props.isClicked(isClicked);

  return (
    <>
      <div className="menu-button" onClick={() => setIsClicked(!isClicked)}>
        {isClicked ? (
          <div className="menu-button">
            <svg
              style={{ width: "40px", marginRight: "10px" }}
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        ) : (
          <div className="menu-button">
            <svg
              style={{ width: "40px", marginRight: "10px" }}
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
        )}
      </div>
    </>
  );
};
