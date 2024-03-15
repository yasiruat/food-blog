import "./topbar.css";
import { Link } from "react-router-dom";

export default function TopBar() {
  const user = false;
  return (
    <>
      <div className="top">
        <div className="topLeft">
          <i className="topIcon fa-brands fa-facebook"></i>
          <i className="topIcon fa-brands fa-instagram"></i>
          <i className="topIcon fa-brands fa-youtube"></i>
          <i className="topIcon fa-brands fa-tiktok"></i>
        </div>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/">
                HOME
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/about">
                ABOUT
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/write">
                WRITE
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/contact">
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
        <div className="topRight">
          <i className="topIcon topRightIcon fa-solid fa-magnifying-glass"></i>
          <ul className="topList">
            {user ? (
              <>
                <li className="topList topListItem">LOGOUT</li>
                <li className="topList topListItem">
                  <i className="topIcon topRightIcon fa-solid fa-user"></i>
                </li>
              </>
            ) : (
              <>
                <Link className="link topListItem" to="/login">
                  LOGIN
                </Link>
                <Link className="link topListItem" to="/register">
                  REGISTER
                </Link>
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}
