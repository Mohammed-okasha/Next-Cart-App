import React from "react";
import Link from "next/link";

const Logo = (props) => {
  return (
    <h2 className={props.className}>
      <Link href="/">cart app</Link>
    </h2>
  );
};

export default Logo;
