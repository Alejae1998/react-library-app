import BookList from './components/book/BookList';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import BookDetail from './components/book/BookDetail.js';

function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <h1>Library Catalog</h1>
      <Link to="/books">Check our Books!!</Link>
      <Switch>
        <Route exact path="/books/:id" component={BookDetail} />
        <Route exact path="/books" component={BookList} />
      </Switch>
    </main>
  );
}

export default App;
