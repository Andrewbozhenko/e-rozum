import { Logo } from "@components/ui/logo";
import { Menu } from "./menu";
import { Burger } from "@components/ui";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo />
          <Menu />
          <button className="header__button">Записатися на урок</button>
          <Burger />
        </div>
      </div>
    </header>
  );
};
