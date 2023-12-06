import Link from "next/link";

export const NavBar = () => {
  return (
    <nav>
      <ul className="lg:flex md:flex lg:flex-row md:flex-row md:items-center lg:items-center gap-5 ">
        <Link href={"/"}>Home</Link>
        <Link href={"/blogs"}>Blogs</Link>
        <Link href={"/category"}>Category</Link>
        <Link href={"/"}>About Us</Link>
        <Link href={"/"}>Contact Us</Link>
      </ul>
    </nav>
  );
};
