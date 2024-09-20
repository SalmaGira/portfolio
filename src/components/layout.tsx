import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="d-flex flex-column h-100">
      <div className="flex-grow-1">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
