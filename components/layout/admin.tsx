import React from "react";
import { LayoutProps } from "../../models/common";
import Link from "next/link";
interface Props {}

export const AdminLayout = ({ children }: LayoutProps) => {
  return (
    <div>
      <div>
        <h1>Admin layout</h1>
        <div>Sidebar</div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <div>{children}</div>
      </div>
    </div>
  );
};
