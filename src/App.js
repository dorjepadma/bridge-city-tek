
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import Header from './components/Header/Header.component.jsx';
import HomePage from './pages/Home/home.component.jsx';
import Blog from './pages/Blog/blog.component.jsx';
import Contact from './pages/Contact/contact.component.jsx';
import About from './pages/About/about.component.jsx';
import theme from './components/ui/Theme.js';




function App() {
  return (
    <ThemeProvider theme={theme}> 
    <BrowserRouter>
      <Header />
        <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/services' component={() => <div>services</div>} />
        <Route exact path='/customSoftware' component={() => <div>Custom Software</div>} />
        <Route exact path='/mobileapps' component={() => <div>Mobile Apps</div>} />
        <Route exact path='/websites' component={() => <div>Websites</div>} />
        <Route exact path='/seo' component={() => <div>Search Engine Enhancment</div>} />
        <Route exact path='/blog' component={Blog} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/estimates' component={() => <div>Estimates</div>} />
        </Switch>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
