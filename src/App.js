import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ChartPage from "./chart/page";
import HomePage from "./home/page";

function App() {

    return (
        <Router>
            <div style={{width: '100%', height: '100vh'}}>
                <header style={headerStyle}>
                    <Link to="/chart" style={linkStyle}>차트</Link>
                </header>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/chart" element={<ChartPage/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;

const headerStyle = {
    backgroundColor: '#282c34',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
};