import React from "react";

const Navbar = ({ filterItem, menuList }) => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar_item">
          {menuList.map((curElem) => {
            return (
              <button
                className="btn-nav"
                onClick={() => filterItem(curElem)}>{curElem}
                
              </button>
            );
          })}
          
          {/* <button className="btn-nav" onClick={() => setMenuData(Menu)}>
            All
          </button> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
