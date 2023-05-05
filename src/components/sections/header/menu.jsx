import { MenuItem } from "./menuItem";
import { MENU } from "@utils";

export const Menu = (props) => {
  return (
    <nav className="menu">
      <ul className="menu__list">
        {MENU.map((item) => (
          <MenuItem
            key={item.name}
            total={item.total}
            href={item.href}
            name={item.name}
          />
        ))}
      </ul>
    </nav>
  );
};
