"use client";
import { useCode } from "@/app/context/codeContext";
import React, { useRef } from "react";

const Code = () => {
  const { settings } = useCode();
  const {
    thumbColor,
    trackColor,
    scrollbarWidth,
    scrollbarBorderRadius,
    thumbBorderWidth,
    thumbBorderColor,
  } = settings;

  const codeRef = useRef(null);

  const handleCopyClick = () => {
    if (codeRef.current) {
      const codeText = codeRef.current.innerText;

      // Create a temporary textarea element to copy the text to the clipboard
      const textarea = document.createElement("textarea");
      textarea.value = codeText;
      document.body.appendChild(textarea);

      // Select and copy the text
      textarea.select();
      document.execCommand("copy");

      // Remove the temporary textarea
      document.body.removeChild(textarea);
    }
  };

  return (
    <div>
      <h1 className="text-2xl text-gray-200 font-sans font-semibold">Code</h1>
      <div className="text-gray-400 ">
        <pre className="my-0" ref={codeRef}>
          {`
body {
  --sb-track-color: ${trackColor};
  --sb-thumb-color: ${thumbColor};
  --sb-size: ${scrollbarWidth}px;

  scrollbar-color: var(--sb-thumb-color) 
                   var(--sb-track-color);
}

body::-webkit-scrollbar {
  width: var(--sb-size);
}

body::-webkit-scrollbar-track {
  background: var(--sb-track-color);
  border-radius: ${scrollbarBorderRadius}px;
}

body::-webkit-scrollbar-thumb {
  background: var(--sb-thumb-color);
  border-radius: ${scrollbarBorderRadius}px;
  border: ${thumbBorderWidth}px solid ${thumbBorderColor};
}
          `}
        </pre>
        <button className="cssbuttons-io" onClick={handleCopyClick}>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                fill="currentColor"
                d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"
              ></path>
            </svg>{" "}
            Code
          </span>
        </button>
      </div>
    </div>
  );
};

export default Code;
