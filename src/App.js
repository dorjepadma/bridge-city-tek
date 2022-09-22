import React from 'react';
import './App.css';
import { Routes, Route} from 'react-router-dom';

import Header from './components/Header/Header.component.jsx';
import HomePage from './pages/Home/home.component.jsx';
import Blog from './pages/Blog/blog.component.jsx';
import Contact from './pages/Contact/contact.component.jsx';
import About from './pages/About/about.component.jsx';
import Websites from './pages/Websites/websites.component';






function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Header />} >
          <Route index element={<HomePage />} />
            {/* <Route exact path='/services' component={Services} /> */}
            {/* <Route exact path='/customSoftware' component={() => <div>Custom Software</div>} /> */}
            {/* <Route exact path='/mobileapps' component={() => <div>Mobile Apps</div>} /> */}
          <Route exact path='/websites' component={Websites} />
            {/* <Route exact path='/seo' component={() => <div>Search Engine Enhancement</div>} /> */}
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
        </Route>
      </Routes>
    </div>

  );
}

export default App;
