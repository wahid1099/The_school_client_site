import React from "react";
import { Outlet } from "react-router-dom";
// import SideBar from "../SideBar/SideBar";
import StudentHome from "../StudentHome/StudentHome";
import StudentSidebar from "../StudentSidebar/StudentSidebar";


const StudentDashboard = () => {
  return (
    <div className="lg:grid md:grid grid-cols-12 sm:flex align-center justify-center">
      <div className="bg-black lg:col-span-2 md:col-span-2 lg:h-[100vh] md:h-[100vh] sm:h-full">
        <StudentSidebar />
        {/* <SideBar /> */}
      </div>
      <div className="lg:col-span-10 md:col-span-10 lg:h-[100vh] md:h-[100vh] sm:h-[100vh]">
        <Outlet />
      </div>
    </div>
  );
};

export default StudentDashboard;
