import React from "react";

const SettingBar = () => {
  return (
    <div>
      <h1 className="text-2xl text-gray-200 font-sans font-semibold">
        Settings
      </h1>

      <div className="py-5 text-gray-400 text-md font-sans">
        <div className="flex justify-between items-center">
          <span>Thumb Color</span>
          <input
            className="input_style"
            type="color"
            name="thumb"
            id="thumb"
            defaultValue="#43da86"
          />
        </div>
        <div className="flex justify-between items-center my-2">
          <span>Track Color</span>
          <input
            className="input_style"
            type="color"
            name="track"
            id="track"
            defaultValue="#23769C"
          />
        </div>
        <div className="flex justify-between items-center my-2">
          <span>Scrollbar Width</span>
          <div className="flex justify-between items-center">
            <button> - </button>
            <button className="mx-2 read-only:"> 10px </button>
            <button> + </button>
          </div>
        </div>
        <div className="flex justify-between items-center my-2">
          <span>Scrollbar Border Radius</span>
          <div className="flex justify-between items-center">
            <button> - </button>
            <button className="mx-2 read-only:"> 10px </button>
            <button> + </button>
          </div>
        </div>
        <div className="flex justify-between items-center my-2">
          <span>Thumb Border Width</span>
          <div className="flex justify-between items-center">
            <button> - </button>
            <button className="mx-2 read-only:"> 0px </button>
            <button> + </button>
          </div>
        </div>
        <div className="flex justify-between items-center my-2">
          <span>Thumb Border Color Color</span>
          <input
            className="input_style"
            type="color"
            name="thumb-border"
            id="thumb-border"
            defaultValue="#232E33"
          />
        </div>
      </div>


      <div className="group relative my-10 mx-auto">
        <button>
          <svg
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
            className="w-8 hover:scale-125 duration-200 hover:stroke-teal-500"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </button>
        <span className="absolute -top-1 left-[30%] -translate-x-[50%] z-20 origin-left scale-0 px-3 rounded-lg border border-gray-300 bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100 text-gray-700">
          GitHub<span></span>
        </span>
      </div>
    </div>
  );
};

export default SettingBar;
