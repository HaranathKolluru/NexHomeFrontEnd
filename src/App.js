import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Buy from "./routes/Buy";
import Sell from "./routes/Sell";

// import Book from "./routes/Book";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Login from "./routes/Login";
import Signup from "./routes/Signup";
import Logout from "./routes/Logout";
import Profile from "./routes/Profile";
import './App2.css';
import PrivateRoute from "./components/PrivateRoute";
import Sld from "./routes/Sld";
import Edit from "./routes/Edit";
import Wishlist from "./routes/Wishlist";
import HousingPredictor from './HousingPredictor';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buy" element={<Buy />} />
          {/* <Route path="/book" element={<Book />} /> */}
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />

          <Route element={<PrivateRoute />}>
            <Route path="/sell" element={<Sell />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/sold" element={<Sld />} />
            <Route path="/edit" element={<Edit />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/predict" element={< HousingPredictor/>} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

// export default App;

// import React from 'react';
// // import './ui.css';
// // import './housing-predictor.css';

// const App = () => {
//   return (
//     <div className="App">
//       <HousingPredictor />
//     </div>
//   );
// };

export default App;