import { HeaderContainer } from "./styles";
import { Timer, Scroll } from "phosphor-react";

import logoIgnite from "../../assets/logo-ignite.svg";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <span>
        <img src={logoIgnite} alt="" />
      </span>
      <nav>
        <NavLink to="/timer-project" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/timer-project/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
