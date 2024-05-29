import React, {useState, useEffect} from 'react';
import Sidebar from './sidebar'
import BugsPage from './pages/BugsPage'
import EpicsPage from './pages/EpicsPage'
import HomePage from './pages/HomePage'
import './App.css';


function App() {
  const [currentPage, setCurrentPage] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path) => {
    window.history.pushState({}, '', path);
    setCurrentPage(path);
  };

  const renderPage = () => {
    switch (currentPage) {
      case '/bugs':
        return <BugsPage />;
      case '/epics':
        return <EpicsPage />;
      default:
        window.history.pushState({}, '', '/');
        return <HomePage />;
    }
  }

  return (
    <div style={{display: 'flex'}}>
      <Sidebar navigate={navigate} />
      <div style={{marginLeft: '60px', padding: '20px', flexGrow: 1}}>
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
