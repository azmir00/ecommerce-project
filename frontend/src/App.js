import SigninScreen from "./screens/SigninScreen";
import Homepage from './screens/HomepageScreen';
import Cart from "./screens/Cart";
import ProductDetailScreen from "./screens/ProductDetailScreen";
import Ahomepage from "./admin/Ahomepage";
import Asignin from "./admin/Asignin";
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomepageScreen from "./screens/HomepageScreen";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Cart /> */}
        {/* <ProductDetailScreen /> */}
        {/* <Homepage /> */}
        {/* <Ahomepage />    Admin Homepage */}
         <Asignin />     {/* Admin Signin*/}
      </Router>
    </div>
  );
}

export default App;
