import Topbar from "./components/Topbar";
import SideBar from "./components/SideBar";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import UsersList from "./pages/UsersList";
import ProductList from "./pages/ProductList";
import User from "./pages/User";
function App() {
  return (
   <Router>
    <div className="px-2">
       <Topbar/>
       <div className="grid md:grid-cols-5">
         <div className="hidden md:block p-3">
           <SideBar/>
         </div>
         <div className="pt-3 col-span-4">
           <Switch>
              <Route path="/" exact>
                 <HomePage/>
              </Route>
              <Route path="/users">
                  <UsersList/>
              </Route>
              <Route path="/user/:id">
                  <User/>
              </Route>
              <Route path="/products">
                  <ProductList/>
              </Route>
           
            </Switch>
         </div>
       </div>
    </div>
  </Router>
  );
}

export default App;
