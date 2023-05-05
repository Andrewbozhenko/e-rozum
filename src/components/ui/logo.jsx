import Link from "next/link";

export const Logo = (props) => {
  return (
    <div className="logo">
      <Link href="/">
        <img
          src="img/ui/logo.svg"
          width="102"
          height="58"
          alt="Logotype e-rozum"
        />
      </Link>
    </div>
  );
};
