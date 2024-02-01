import Home from './components/Home';
import Navbar from './components/Navbar';
import Create from './components/Create';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom';
import BlogDetails from './components/BlogDetails';
import NotFound from './components/NotFound';
import Login from './components/Login';
import useToken from './customHooks/useToken';

function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />
  }
 
  return (
    <Router>
      <div className="App">
      <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            
            {/* va messo per ultimo altrimenti facendo una ricerca qualsiasi si finirebbe nella pagina Not Found perchè il router cerca le rotte sequenzialmente, una dopo l'altra */}
            <Route path="*">      
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
