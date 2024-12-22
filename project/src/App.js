
/*
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import routing components
import Home from 'pages/Home';
import Maps from 'pages/Maps';
import Charts from 'pages/Charts';
import About from 'pages/About';

const App = () => {
    return (
        <Router> {// Wrap the application in a Router //}
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link> {/* Link to the Home page //}
                        </li>
                        <li>
                            <Link to="/maps">Maps</Link> {// Link to the Maps page //}
                        </li>
                        <li>
                            <Link to="/charts">Charts</Link> {// Link to the Charts page //}
                        </li>
                        <li>
                            <Link to="/about">About</Link> {//Link to the About page //}
                        </li>
                    </ul>
                </nav>

                <Routes> {// Define the routes //}
                    <Route path="/" element={<Home />} /> {// Route for the Home page //}
                    <Route path="/maps" element={<Maps />} /> {// Route for the Maps page //}
                    <Route path="/charts" element={<Charts />} /> {// Route for the Charts page //}
                    <Route path="/about" element={<About />} /> {// Route for the About page //}
                </Routes>
            </div>
        </Router>
    );
};

export default App;
*/
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Maps from './Maps';
import Charts from './Charts';
import About from './About';

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/maps" component={Maps} />
                    <Route path="/charts" component={Charts} />
                    <Route path="/about" component={About} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
