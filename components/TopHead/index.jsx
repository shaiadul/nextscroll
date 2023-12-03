import React from "react";

const TopHead = () => {
  return (
    <section className="container mx-auto">
      <div className="flex justify-center items-center gap-3 my-20">
        <div className="bg-teal-600 rounded-lg">
          <img
            className="w-14 h-14"
            src="https://i.ibb.co/VtXm0F7/logo.png"
            alt="logo"
          />
        </div>
        <span className="text-4xl text-gray-300 font-mono">NextScroll</span>
      </div>
    </section>
  );
};

export default TopHead;
