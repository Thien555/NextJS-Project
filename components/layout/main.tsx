import React from "react";
import { LayoutProps } from "../../models/common";
import Link from "next/link";
interface PropsMainLayout {}

const MainLayout = ({ children }: LayoutProps) => {
  return (
    <div>
      <h1>Main layout</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <div>{children}</div>
    </div>
  );
};

export default MainLayout;
