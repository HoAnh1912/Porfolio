import React, { useState } from "react";
import { MenuMobile, NavMenu } from "./styled";
import { headerMenuMobile } from "../../constants/menu";


const HeaderMobile = () => {


  const [active, setActive] = useState(false);
  
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <MenuMobile onClick={handleClick} className={active ? "click" : ""}>
        <span></span>
      </MenuMobile>
      <NavMenu className={active ? " active" : ""}>
        <ul>
          {headerMenuMobile.map((item) => {
            return (
              <li key={item.id}>
                <a href={item.href}>{item.label}</a>
              </li>
            );
          })}
        </ul>
      </NavMenu>
    </>
  );
};

export default HeaderMobile;
