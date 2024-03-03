import "./topbar.css";

export default function TopBar() {
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
            <li className="topListItem">HOME</li>
            <li className="topListItem">ABOUT</li>
            <li className="topListItem">WRITE</li>
            <li className="topListItem">CONTACT</li>
          </ul>
        </div>
        <div className="topRight">
          <i className="topIcon topRightIcon fa-solid fa-magnifying-glass"></i>
          <li className="topList topListItem">LOGIN</li>
          <i className="topIcon topRightIcon fa-solid fa-user"></i>
        </div>
      </div>
    </>
  );
}
