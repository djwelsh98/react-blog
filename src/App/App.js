import './App.css';
import content from './content';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header';
import MainSlide from './components/carousel';
import MenuNav from './components/nav'
import BlogCard from './components/Card';
import BlogList from './components/blogList';
import Footer from './components/footer';
import Contact from './components/contact';
import AuthorCard from './components/authorCard';
import ScrollUp from './components/scrollUpButton';
import HomeDisplay from './components/homeContainer';
import SubmitForm from './components/form';
import authorContent from './authorContent';
import AuthorList from './components/authorList';

function App() {
  // console.log(content)
  return (
    <div className="App page-container">
      <div className ="content-wrap">
      <Switch>
        <Route exact path='/'>
          <Header />
          <MenuNav />
          <HomeDisplay/>
          {/* rows and columns to fix carousel positioning */}
        </Route>
        <Route path='/card/:index'>
          <Header />
          <MenuNav />
          <BlogCard content = {content}/>
        </Route>
        <Route path='/authors'>
          <Header />
          <MenuNav />
          <AuthorCard authorContent = {authorContent}/>
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
      </Switch>
      <ScrollUp/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
