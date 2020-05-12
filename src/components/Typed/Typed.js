import React from "react";
import Typed from "react-typed";
import '../Typed/Typed.scss';

export default function MyComponent() {
  return (
    <div className="typed">
      <Typed strings={["Here you can find anything"]} typeSpeed={40} />
      <br />

      <Typed
        strings={[
          "Search for products",
          "Search for categories",
          "Search for brands"
        ]}
        typeSpeed={40}
        backSpeed={50}
        attr="placeholder"
        loop
      >
        <input type="text" />
      </Typed>
    </div>
  );
}
