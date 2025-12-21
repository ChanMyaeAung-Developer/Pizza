import React from "react";
import SideBar from "../layout/Sidebar";
import { Outlet } from "react-router-dom";


export default function PortalLayout() {

	return (
		<div className="flex">
			<SideBar />
			<div className=" w-full bg-white h-screen overflow-hidden overflow-y-auto">
				<Outlet />
			</div>
		</div>
	);
}
