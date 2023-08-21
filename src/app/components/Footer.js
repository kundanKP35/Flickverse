import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <>
        <div className="text-center flex flex-col md:flex-row items-center justify-center gap-4 text-sm  border-t border-[#ccc] py-4">
            <div>
            <Link href="/">
              <Image src="/nav-logo.svg" alt="KFLIX" width={150} height={45} />
            </Link>
            </div>

            <div>
            <span >
              Copyright © 2023{" "}
              <Link href="https://www.linkedin.com/in/kundan35" className="text-[blue]">
                Kundan Prasad
              </Link>
              . All rights reserved.
            </span>
            </div>
        </div>
    </>
  );
};

export default Footer;
