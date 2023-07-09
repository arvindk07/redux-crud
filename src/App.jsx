import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import UserListing from "./components/UserListing";
import AddUser from "./components/AddUser";
import UpdateUser from "./components/UpdateUser";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./Redux/Store";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<UserListing />} />
          <Route path="/user/add" element={<AddUser />} />
          <Route path="/user/edit/:code" element={<UpdateUser />} />
        </Routes>
      </Router>
      <ToastContainer
        className="toast-postion"
        position="bottom-right"
      ></ToastContainer>
    </Provider>
  );
};

export default App;
