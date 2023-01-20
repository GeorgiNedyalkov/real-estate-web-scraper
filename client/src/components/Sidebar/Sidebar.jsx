import React from "react";
import "./Sidebar.css";
import { HiHome } from "react-icons/hi";
import { HiCog } from "react-icons/hi";
import { HiUserCircle } from "react-icons/hi";
import { TbActivityHeartbeat } from "react-icons/tb";
import georgi from "../../assets/g.jpg";

const Sidebar = () => {
  return (
    <>
      <nav className="sidebar">
        <div className="profile">
          <img className="avatar" src={georgi} alt="profile picture" />
        </div>
        <h3 className="text-white">Welcome, Georgi Nedyalkov</h3>
        <ul className="nav-items">
          <li className="nav-item">
            <HiHome /> Home
          </li>
          <li className="nav-item">
            <TbActivityHeartbeat /> Market
          </li>

          <li className="nav-item">
            <HiCog className="icon" /> Settings
          </li>
          <li className="nav-item">
            <HiUserCircle /> User
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Sidebar;
