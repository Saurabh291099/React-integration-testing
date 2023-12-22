import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';


import { Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import Cancellation from './Pages/Cancellation';
import Blogs from './Pages/Blogs';
import { useState } from 'react';


function App() {
  const [slugs,setslugs] = useState({
                                                "About": {
                                                    "PageName": "about.html",
                                                    "PageTitle": "About",
                                                    "SeoData": 1,
                                                    "Slug": "About",
                                                    "sectionVisible": "About"
                                              },
                                                "Blogs": {
                                                    "PageName": "404.html",
                                                    "PageTitle": "Blogs",
                                                    "SeoData": 13,
                                                    "Slug": "Blogs",
                                                    "sectionVisible": "Blogs"
                                              },
                                                "Cancellation": {
                                                    "PageName": "cancellation.html",
                                                    "PageTitle": "Cancellation",
                                                    "SeoData": 15,
                                                    "Slug": "Cancellation-Policy",
                                                    "sectionVisible": "TermsConditions"
                                              }
          })
  return (
    <div className="App">

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about-page" exact element={<About />} />
        <Route path="/blogs" exact element={<Blogs />} />
        <Route path="/cancellation" exact element={<Cancellation />} />
      </Routes>
    </div>
  );
}

export default App;
