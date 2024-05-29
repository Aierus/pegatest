import React, {useState, useEffect, useRef} from 'react';
import './sidebar.css';

const Sidebar = ({navigate}) => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const menuItems = useRef([]);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  const handleKeyDown = (e) => {
    switch (e.key) {
      case 's':
        toggleSidebar();
        break;
      case 'ArrowDown':
        setFocusedIndex((prevIndex) =>
          prevIndex === menuItems.current.length - 1 ? 0 : prevIndex + 1
        );
        break;
      case 'ArrowUp':
        setFocusedIndex((prevIndex) =>
          prevIndex === 0 ? menuItems.current.length - 1 : prevIndex - 1
        );
        break;
      case 'Enter':
        if (menuItems.current[focusedIndex]) {
          menuItems.current[focusedIndex].click();
        }
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [focusedIndex, isSidebarExpanded]);

  useEffect(() => {
    if (menuItems.current[focusedIndex]) {
      menuItems.current[focusedIndex].focus();
    }
  }, [focusedIndex, isSidebarExpanded]);

  return (
    <div className={`sidebar-container ${isSidebarExpanded ? 'expanded' : ''}`}>
      <div className={`sidebar ${isSidebarExpanded ? 'expanded' : ''}`}>
        <div className="sidebar-section top-section">
          <ul>
            <li><a href="demo" ref={(el) => (menuItems.current[0] = el)}><img src="icon.png" alt="icon" className="icon" /><span className="text">Demo</span></a></li>
          </ul>
          <div className="search-wrapper">
            <div className="search-icon-container">
              <img src="searchicon.png" alt="Search" className="search-icon" />
            </div>
            <input type="text" placeholder="Search" className="search-bar" ref={(el) => (menuItems.current[1] = el)} />
          </div>
        </div>
        <hr />
        <div className="sidebar-section middle-section">
          <ul>
            <li><div onClick={toggleSubMenu} ref={(el) => (menuItems.current[2] = el)}><img src="icon.png" alt="icon" className="icon" /><span className="text">Create</span></div></li>
            {isSubMenuOpen && (
              <>
                <hr />
                <ul className="submenu">
                  <li><a href="bugs" onClick={() => navigate('/bugs')}><span className="text">Bug</span></a></li>
                  <li><a href="epics" onClick={() => navigate('/epics')}><span className="text">Epic</span></a></li>
                  <li><a href="userstory"><span className="text">User Story</span></a></li>
                </ul>
              </>
            )}

            <li><a href="home" ref={(el) => (menuItems.current[3] = el)}><img src="icon.png" alt="icon" className="icon" /><span className="text">Home</span></a></li>
            <li><a href="dashboard" ref={(el) => (menuItems.current[4] = el)}><img src="icon.png" alt="icon" className="icon" /><span className="text">My Dashboard</span></a></li>
            <li><a href="spaces" ref={(el) => (menuItems.current[5] = el)}><img src="icon.png" alt="icon" className="icon" /><span className="text">Spaces</span></a></li>
            <li><a href="documents" ref={(el) => (menuItems.current[6] = el)}><img src="icon.png" alt="icon" className="icon" /><span className="text">Documents</span></a></li>
            <li><a href="bugs" onClick={() => navigate('/bugs')} ref={(el) => (menuItems.current[7] = el)}><img src="icon.png" alt="icon" className="icon" /><span className="text">Bugs</span></a></li>
            <li><a href="epics" onClick={() => navigate('/epics')} ref={(el) => (menuItems.current[8] = el)}><img src="icon.png" alt="icon" className="icon" /><span className="text">Epics</span></a></li>
            <li><a href="goals" ref={(el) => (menuItems.current[9] = el)}><img src="icon.png" alt="icon" className="icon" /><span className="text">Goals</span></a></li>
          </ul>
        </div>
        <hr />
        <div className="sidebar-section bottom-section">
          <ul>
            <li><a href="notifications" ref={(el) => (menuItems.current[10] = el)}><img src="icon.png" alt="icon" className="icon" /><span className="text">Notifications</span></a></li>
            <li><a href="recents" ref={(el) => (menuItems.current[11] = el)}><img src="icon.png" alt="icon" className="icon" /><span className="text">Recents</span></a></li>
            <li><a href="applications" ref={(el) => (menuItems.current[12] = el)}><img src="icon.png" alt="icon" className="icon" /><span className="text">My Applications</span></a></li>
            <li><a href="cosmos" ref={(el) => (menuItems.current[13] = el)}><img src="icon.png" alt="icon" className="icon" /><span className="text">Cosmos Operator</span></a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

