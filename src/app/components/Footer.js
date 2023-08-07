import React from "react";
import footerStyles from "@/app/styles/footer.module.css";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className={footerStyles.footer}>
        <div className={footerStyles.content}>
          <div className={footerStyles["logo-details"]}>
            <Link href="/">
              <Image src="/nav-logo.svg" alt="KFLIX" width={150} height={45} />
            </Link>
          </div>
        </div>
        <div className={footerStyles["bottom-details"]}>
          <div className={footerStyles.bottom_text}>
            <span className={footerStyles["copyright_text"]}>
              Copyright © 2023{" "}
              <Link href="https://www.linkedin.com/in/kundan35">
                Kundan Prasad
              </Link>
              . All rights reserved.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
