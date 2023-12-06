import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href={"/"}>
      <div className="h-full flex items-center">
        <Image
          src={"/logo.svg"}
          alt="logo"
          height={10}
          width={10}
          className="h-10 w-10"
        />
      </div>
    </Link>
  );
};
