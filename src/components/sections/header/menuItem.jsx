import Link from "next/link";

export const MenuItem = (props) => {
  const { name, href, total } = props;

  return (
    <li className="menu__item">
      <Link href={href}>
        {total >= 1 && <span className="menu__item-total">{total}</span>}
        {name}
      </Link>
    </li>
  );
};
