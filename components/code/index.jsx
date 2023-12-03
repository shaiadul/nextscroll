// Code.js

import React from "react";

const Code = () => {
  return (
    <div>
      <h1 className="text-2xl text-gray-200 font-sans font-semibold">Code</h1>

      <div className="text-gray-400">
        <pre>
          {`
body {
  --sb-track-color: #1691ca;
  --sb-thumb-color: #6BAF8D;
  --sb-size: 15px;

  scrollbar-color: var(--sb-thumb-color) 
                   var(--sb-track-color);
}

body::-webkit-scrollbar {
  width: var(--sb-size);
}

body::-webkit-scrollbar-track {
  background: var(--sb-track-color);
  border-radius: 10px;
}

body::-webkit-scrollbar-thumb {
  background: var(--sb-thumb-color);
  border-radius: 10px;
  border: 20px solid #3d3d98;
}
          `}
        </pre>
      </div>
    </div>
  );
};

export default Code;
