import React, { useState } from "react";
import { MenuMobile, NavMenu } from "./styled";

export interface MenuType {
  href: string;
  children?: MenuType[];
  label: string;
  id: string;
}
const HeaderMobile = () => {
  const headerMenu: MenuType[] = [
    {
      id: "1",
      href: "/",
      label: "Home",
    },
    {
      id: "2",
      href: "/",
      label: "Skill",
    },
    {
      id: "3",
      href: "/",
      label: "Project",
    },

    {
      id: "4",
      href: "/",
      label: "Contact",
    },
  ];

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
          {headerMenu.map((item) => {
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
