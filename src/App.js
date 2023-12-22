import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';


import { Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import Cancellation from './Pages/Cancellation';
import Blogs from './Pages/Blogs';
import Navbar from './Pages/Navbar'
import { useState } from 'react';


function App() {
  const [slugs,setslugs] = useState({
                                                "About": {
                                                    "PageName": "about.html",
                                                    "PageTitle": "About",
                                                    "SeoData": 1,
                                                    "Slug": "About-Page-test",
                                                    "sectionVisible": "About"
                                              },
                                                "Blogs": {
                                                    "PageName": "blogs.html",
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

  const [Seodata,setSeodata] = useState([ {
                                            "Data": {
                                                "Description": "Book your perfect Mandrem retreat beach resort at SPARV Aulakhs Resort, your 4-star getaway in Goa with sea views and top amenities.",
                                                "Title": "SPARV Aulakhs Resort - 4-Star Beachfront stay in Mandrem",
                                                "keyword": "Keyword"
                                            },
                                            "PageName": "Home"
                                              },
                                          {
                                            "Data": {
                                                "Description": "The essence of luxury at Sparv Beach Resort Mandrem, Goa. Learn about our story, amenities, and unparalleled beachfront experience. Welcome to paradise!",
                                                "Title": "Sparv Beach Resort Mandrem, Goa | About Us - Luxury Stay",
                                                "keyword": "Keyword"
                                            },
                                            "PageName": "About"
                                              },
                                          {
                                            "Data": {
                                                "Description": "Get in touch with Sparv Aulakh Resort in Mandrem, Goa. Contact us for bookings, inquiries, and more. Your unforgettable Mandrem getaway starts here.",
                                                "Title": "Contact Us | Sparv Resort in Mandrem, Goa | Reach Out Today",
                                                "keyword": "Keyword"
                                            },
                                            "PageName": "Contact"
                                          }
                                      ])
          // Return slugs
          const slug = Object.values(slugs).map(page => page.Slug);

          // Key value
          const slugToPageName = Object.fromEntries(
            Object.entries(slugs).map(([key, value]) => [value.Slug, value.PageName])
          );
            
          // Add page Name here and you get component for same
          const PageToComponent = {
            "about.html": <About />,
            "blogs.html": <Blogs />,
            'cancellation.html': <Cancellation />
            // Add more mappings as needed
          };

          console.log(slug);
          console.log(slugToPageName)
        
  return (
    <div className="App">
      <Navbar slug={slug} />
      <Routes>
        <Route path="/" exact element={<Home />} />
        
        
        {slug.map(slug => (
        <Route
          key={slug}
          path={`/${slug}`}
          exact
          // You can replace the component with the appropriate component for each route
          element={PageToComponent[slugToPageName[slug]]}
        />
      ))}
      </Routes>
    </div>
  );
}

export default App;
