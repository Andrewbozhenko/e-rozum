import { Logo } from "@components/ui/logo";
import { Menu } from "./menu";
import { Burger } from "@components/ui";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo />
          <Menu />
          <Link href="/#contacts" className="header__button">
            Записатися на урок
          </Link>
          <Burger />
        </div>
      </div>
    </header>
  );
};
