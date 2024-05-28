
 import AddProducts from '../add/AddProducts';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from '../home/Home';
import Logout from '../logout/Logout';
import Navbar from '../navbar/Navbar';
import ProductList from '../product-list/ProductList';
import Update from '../update/Update';
import './App.css';
import Login from '../home/Login';


function App() {
  return (
    
    <Router>
      <div>
        <Navbar />
        
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/product" component={ProductList} />
          <Route path="/add-product" component={AddProducts} />
          <Route path="/update/:pid" component={Update} />
          <Route path="/log" component={Logout}/>
          <Route path="/login" component={Login}/> 
          
        </Switch>
      </div>
    </Router>
  );



}

export default App;
