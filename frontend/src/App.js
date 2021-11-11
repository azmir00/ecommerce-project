//import SigninScreen from "./screens/SigninScreen";
import ProductDetailScreen from "./screens/ProductDetailScreen";
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <ProductDetailScreen />
      </Router>
    </div>
  );
}

export default App;
