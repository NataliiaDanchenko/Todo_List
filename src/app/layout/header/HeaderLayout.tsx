// react
import { FC } from "react";
import { Outlet } from "react-router-dom";
// widgets
import { Header } from "@/widgets/header";

interface HeaderLayoutProps {}

export const HeaderLayout: FC<HeaderLayoutProps> = ({}) => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
