import {Routes, Route} from 'react-router-dom';
import About from './components/pages/About';
import AddPost from './components/pages/AddPost/AddPost';
import EditPost from './components/pages/EditPost/EditPost';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import Post from './components/pages/Post';
import {Container} from 'react-bootstrap';
import Header from './components/views/Header';
import Footer from './components/views/Footer';


function App() {
  return ( <
    Container >
    <
    Header / >
    <
    Routes >
    <
    Route path = "/"
    element = {
      <
      Home / >
    }
    /> <
    Route path = "/about"
    element = {
      <
      About / >
    }
    /> <
    Route path = "/post/:id"
    element = {
      <
      Post / >
    }
    /> <
    Route path = "/post/add"
    element = {
      <
      AddPost / >
    }
    /> <
    Route path = "/post/edit/:id"
    element = {
      <
      EditPost / >
    }
    /> <
    Route path = "*"
    element = {
      <
      NotFound / >
    }
    /> < /
    Routes > <
    Footer / >
    <
    /Container>
  );
}
export default App;