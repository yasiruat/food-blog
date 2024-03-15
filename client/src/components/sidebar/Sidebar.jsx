import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://images.unsplash.com/photo-1512485800893-b08ec1ea59b1?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
          doloribus ut magnam facere fugit quibusdam nobis suscipit laboriosam
          blanditiis. Animi neque reprehenderit maxime qui eligendi earum
          tempora, rerum corrupti laboriosam.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Mains</li>
          <li className="sidebarListItem">Desserts</li>
          <li className="sidebarListItem">Beverages</li>
          <li className="sidebarListItem">Snacks</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-facebook"></i>
          <i className="sidebarIcon fa-brands fa-instagram"></i>
          <i className="sidebarIcon fa-brands fa-youtube"></i>
          <i className="sidebarIcon fa-brands fa-tiktok"></i>
        </div>
      </div>
    </div>
  );
}
