import React from "react";

const Header = () => {
  return (
    <section className="header">
      <button className="header-btn">Add</button>
      <h1 className="header-title">Todo Lists</h1>
      <button className="header-btn clear">Clear</button>
    </section>
  );
};

export default Header;
