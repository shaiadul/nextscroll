import React from "react";

const Description = () => {
  return (
    <section className="col-span-2 mb-5 border-gray-400 border-l-2 border-b-2 px-2 h-[70vh] overflow-y-scroll rounded-md">
      <h1 className="text-2xl text-gray-200 font-sans font-semibold">
        CSS Scrollbar Selectors
      </h1>
      <p className="text-gray-400 font-sans py-5">
        Scrollbars are an essential component of any website that contains
        lengthy content. They provide users with a way to navigate through the
        content with ease. While browsers come with default scrollbar styles,
        they may not always match the design of your website. This is where CSS
        scrollbar selectors come in. <br /> <br />
        There are multiple CSS pseudo-elements that allows us to customize
        elements scrollbar on WebKit and Blink based browsers. <br /> <br />
        Here is a quick reminder of the available pseudo-elements: <br />
      </p>
      <ul className="text-gray-400">
        <li className="my-3">
          <strong className="bg-gray-600 p-1 mr-1 rounded-sm text-gray-200">
            {" "}
            ::-webkit-scrollbar{" "}
          </strong>{" "}
          — the entire scrollbar. <br />
        </li>
        <li className="my-3">
          <strong className="bg-gray-600 p-1 mr-1 rounded-sm text-gray-200">
            {" "}
            ::-webkit-scrollbar-thumb{" "}
          </strong>{" "}
          — the draggable scrolling handle. <br />
        </li>
        <li className="my-3">
          <strong className="bg-gray-600 p-1 mr-1 rounded-sm text-gray-200">
            {" "}
            ::-webkit-scrollbar-track{" "}
          </strong>{" "}
          — the track (progress bar) of the scrollbar <br />
        </li>
        <li className="my-3 leading-relaxed">
          <strong className="bg-gray-600 p-1 mr-1 rounded-sm text-gray-200">
            {" "}
            ::-webkit-scrollbar-corner{" "}
          </strong>{" "}
          — the bottom corner of the scrollbar, where both horizontal and
          vertical scrollbars meet. This is often the bottom-right corner of the
          browser window.
        </li>
      </ul>
      <p className="text-gray-400 font-sans py-5">
        You can add these pseudo-elements to any element that has content which
        is longer than the space reserved for the element. <br /> <br />
        Note: Elements{" "}
        <span className="bg-gray-600 px-1 mx-1 rounded-sm text-gray-200">
          {" "}
          overflow
        </span>{" "}
        property must be set to
        <span className="bg-gray-600 px-1 mx-1 rounded-sm text-gray-200">
          {" "}
          scroll{" "}
        </span>{" "}
        . Othervice no scrollbar is displayed. <br /> <br />
        It is worth noting that the selectors mentioned above only work in Blink
        and WebKit based browsers like Google Chrome and Safari. For other
        browsers, you can use the scrollbar selectors provided by the W3C, such
        as{" "}
        <span className="bg-gray-600 px-1 mx-1 rounded-sm text-gray-200">
          {" "}
          scrollbar-width
        </span>
        ,{" "}
        <span className="bg-gray-600 px-1 mx-1 rounded-sm text-gray-200">
          {" "}
          scrollbar-color{" "}
        </span>
        ,{" "}
        <span className="bg-gray-600 px-1 mx-1 rounded-sm text-gray-200">
          {" "}
          scrollbar-track-color{" "}
        </span>
        ,{" "}
        <span className="bg-gray-600 px-1 mx-1 rounded-sm text-gray-200">
          {" "}
          scrollbar-thumb-color{" "}
        </span>
        , and{" "}
        <span className="bg-gray-600 px-1 mx-1 rounded-sm text-gray-200">
          {" "}
          scrollbar-face-color{" "}
        </span>
        .
      </p>

      <p className="text-gray-400 font-sans py-5">
        Supported browsers include:
      </p>
      <ul className="text-gray-400 list-disc ml-20">
        <li>Chrome</li>
        <li>Brave</li>
        <li>Edge</li>
        <li>Safari</li>
        <li>Vivaldi</li>
        <li>Opera</li>
      </ul>
      <p className="text-gray-400 font-sans py-5">
        In conclusion, CSS scrollbar selectors provide web developers with a way
        to customize the appearance of scrollbars and make them match the design
        of their websites. By using these selectors, you can create a more
        cohesive and aesthetically pleasing user experience for your visitors.
      </p>
    </section>
  );
};

export default Description;
