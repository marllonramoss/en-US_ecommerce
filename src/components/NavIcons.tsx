"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import CartModal from "./CartModal";

const NavIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = React.useState<boolean>(false);
  const [isCartOpen, setIsCartOpen] = React.useState<boolean>(false);

  const router = useRouter();

  //   TEMPORARY
  const isLoggedIn = true;

  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    }
    setIsProfileOpen(!isProfileOpen);
  };

  useEffect(() => {
    console.log(isProfileOpen);
  }, [isProfileOpen]);

  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      <Image
        src={"/profile.png"}
        alt=""
        width={22}
        height={22}
        className="cursor-pointer"
        onClick={() => handleProfile()}
      />

      {isProfileOpen && (
        <div className=" absolute top-12 left-0 text-sm rounded-md shadow-black/20 shadow-xl p-4 z-20">
          <Link href={"#"}>Profile</Link>
          <div className="mt-2 cursor-pointer">Logout</div>
        </div>
      )}
      <Image
        src={"/notification.png"}
        alt=""
        width={22}
        height={22}
        className="cursor-pointer"
      />
      <div className="relative cursor-pointer">
        <Image
          src={"/cart.png"}
          alt=""
          width={22}
          height={22}
          onClick={() => setIsCartOpen(!isCartOpen)}
        />
        <div className="absolute -top-4 -right-4 w-6 h-6 bg-lama rounded-full text-white text-sm flex items-center justify-center">
          2
        </div>
      </div>

      {isCartOpen && <CartModal />}
    </div>
  );
};

export default NavIcons;
