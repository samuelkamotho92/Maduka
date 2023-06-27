import React from 'react'
import './Sidebar.css'
import { NavLink } from 'react-router-dom';
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";
const Sidebar = () => {
  return (
    <div className="sidebar">
    <div className="sidebarWrapper">
      <div className="sidebarMenu">
        <h3 className="sidebarTitle">Dashboard</h3>
        <ul className="sidebarList">
          <NavLink to="/admin/home" className="link">
          <li className="sidebarListItem active">
            <LineStyle className="sidebarIcon" />
            Home
          </li>
          </NavLink>
          <li className="sidebarListItem">
            <Timeline className="sidebarIcon" />
            Analytics
          </li>
          <li className="sidebarListItem">
            <TrendingUp className="sidebarIcon" />
            Sales
          </li>
        </ul>
      </div>
      <div className="sidebarMenu">
        <h3 className="sidebarTitle">Quick Menu</h3>
        <ul className="sidebarList">
          <NavLink to="/admin/auctions" className="link">
            <li className="sidebarListItem">
              <Storefront className="sidebarIcon" />
              Auctions
            </li>
          </NavLink>
          <li className="sidebarListItem">
            <BarChart className="sidebarIcon" />
            Reports
          </li>
        </ul>
      </div>
      <div className="sidebarMenu">
        <h3 className="sidebarTitle">Notifications</h3>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <MailOutline className="sidebarIcon" />
            Mail
          </li>
          <li className="sidebarListItem">
            <DynamicFeed className="sidebarIcon" />
            Feedback
          </li>
          <li className="sidebarListItem">
            <ChatBubbleOutline className="sidebarIcon" />
            Messages
          </li>
        </ul>
      </div>
      <div className="sidebarMenu">
        <h3 className="sidebarTitle">Staff</h3>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" />
            Manage
          </li>
          <li className="sidebarListItem">
            <Timeline className="sidebarIcon" />
            Analytics
          </li>
          <li className="sidebarListItem">
            <Report className="sidebarIcon" />
            Reports
          </li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Sidebar