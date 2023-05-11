import Link from "next/link";

export const MenuItem = (props) => {
  const { name, href, total, onClick } = props;

  return (
    <li className="menu__item">
      <Link href={href} onClick={onClick}>
        {total >= 1 && <span className="menu__item-total">{total}</span>}
        {name}
      </Link>
    </li>
  );
};
