import React from "react";
import { Outlet } from "react-router-dom";
import RightBar from "./rightbar";
import SideBar from "./sidebar";

const MainLayout = () => {
  return (
    <div className="w-[1265px] mx-auto flex">
      <SideBar />
      <div className="flex-1 flex gap-[30px]">
        <main className="flex-1 max-w-[600px] border-x border-[#2f3336]">
          <Outlet />
        </main>
        <RightBar />
      </div>
    </div>
  );
};

export default MainLayout;
