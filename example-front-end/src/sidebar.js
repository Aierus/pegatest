import React, {useState} from 'react';
import './sidebar.css';

const Sidebar = () => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <div className="sidebar-section top-section">
          <ul>
            <li><a href="create"><img src="icon.png" alt="icon" className="icon" /><span className="text">Demo</span></a></li>
          </ul>
          <div className="search-wrapper">
            <img src="icon.png" alt="Search" className="search-icon" />
            <input type="text" placeholder="Search" className="search-bar" />
          </div>
        </div>
        <hr />
        <div className="sidebar-section middle-section">
          <ul>
            <li><div onClick={toggleSubMenu}><img src="icon.png" alt="icon" className="icon" /><span className="text">Create</span></div></li>
            {isSubMenuOpen && (
              <ul className="submenu">
                <li><a href="bug"><span className="text">Bug</span></a></li>
                <li><a href="epic"><span className="text">Epic</span></a></li>
                <li><a href="userstory"><span className="text">User Story</span></a></li>
              </ul>
            )}

            <li><a href="home"><img src="icon.png" alt="icon" className="icon" /><span className="text">Home</span></a></li>
            <li><a href="dashboard"><img src="icon.png" alt="icon" className="icon" /><span className="text">My Dashboard</span></a></li>
            <li><a href="spaces"><img src="icon.png" alt="icon" className="icon" /><span className="text">Spaces</span></a></li>
            <li><a href="documents"><img src="icon.png" alt="icon" className="icon" /><span className="text">Documents</span></a></li>
            <li><a href="bugs"><img src="icon.png" alt="icon" className="icon" /><span className="text">Bugs</span></a></li>
            <li><a href="epics"><img src="icon.png" alt="icon" className="icon" /><span className="text">Epics</span></a></li>
            <li><a href="goals"><img src="icon.png" alt="icon" className="icon" /><span className="text">Goals</span></a></li>
          </ul>
        </div>
        <hr />
        <div className="sidebar-section bottom-section">
          <ul>
            <li><a href="notifications"><img src="icon.png" alt="icon" className="icon" /><span className="text">Notifications</span></a></li>
            <li><a href="recents"><img src="icon.png" alt="icon" className="icon" /><span className="text">Recents</span></a></li>
            <li><a href="applications"><img src="icon.png" alt="icon" className="icon" /><span className="text">My Applications</span></a></li>
            <li><a href="cosmos"><img src="icon.png" alt="icon" className="icon" /><span className="text">Cosmos Operator</span></a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

