import logo from "./logo.svg";
import "./App.css";
import "tailwindcss/tailwind.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Xerciz_user from "./components/xerciz_user";
import Edit_xerciz from "./components/edit_xerciz";
import Create_xerciz from "./components/create-xerciz";
import Xerciz_list from "./components/xerciz_list";

function App() {
  return (
    <Router>
      <Navbar />

      <Route path="/" exact component={Xerciz_list} />
      <Route path="/edit/:id" exact component={Edit_xerciz} />
      <Route path="/create" exact component={Create_xerciz} />
      <Route path="/user" exact component={Xerciz_user} />
    </Router>
  );
}

export default App;
