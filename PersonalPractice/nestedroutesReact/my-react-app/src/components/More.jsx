import React from "react";
import { Link, Outlet } from "react-router-dom";
function More() {
  return (
    <div>
      <h1>More</h1>
      <li>
        <Link to="/more/more1">More 1</Link>
      </li>
      <li>
        <Link to="/more/more2">More 2</Link>
      </li>
      <li>
        <Link to="/more/more3">More 3</Link>
      </li>
      <Outlet/>
      <></>
    </div>
  );
}

export default More;
