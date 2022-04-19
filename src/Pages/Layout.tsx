import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import LoginButton from "../Components/LoginButton";
import LogoutButton from "../Components/LogoutButton";

function Layout() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <div>
      <div className="px-8">
        <ul className="flex flex-row p-4 items-center space-x-8">
          <li>
            <img
              src="https://hightechcampus.com/storage/1755/CGI.png"
              className="h-10 mr-8"
            />
          </li>
          <li className="text-lg">
            <Link to="/workspaces">Workspaces</Link>
          </li>
          <li className="text-lg">
            <Link to="/buildings">Building</Link>
          </li>
          <li className="text-lg">
            <Link to="/peripherals/categories">Peripheral Categories</Link>
          </li>
          <li className="text-lg">
            <Link to="/peripherals">Peripherals</Link>
          </li>
          <li className="text-lg">
            <Link to="/reservations">Reservations</Link>
          </li>
          <li className="text-lg">Problems</li>
          <li className="text-lg">
            <Link to="/users">Users</Link>
          </li>
          <li className="flex-1"></li>
          <li className="text-gray-500">
            {isAuthenticated ? <LogoutButton /> : <LoginButton />}
          </li>
        </ul>
        <hr />
      </div>
      <Outlet />
    </div>
  );
}

export default Layout;
