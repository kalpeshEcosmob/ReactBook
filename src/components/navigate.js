import { Link } from "react-router-dom";

import "./navigate.css";
export const Nav = () => {
  return (
    <>
      <div className="topnav">
        <td>
          <th>
            <Link to="/" className="lin">
              Add Book
            </Link>
          </th>
          <th>
            {" "}
            <Link to="/view" className="lin">
              List Book
            </Link>
          </th>
        </td>
      </div>
    </>
  );
};
