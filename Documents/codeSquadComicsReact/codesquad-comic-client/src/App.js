import Home from "./components/Home";
import Header from "./shared/Header";
import Footer from "./shared/Footer";
import About from "./components/About";
import Admin from "./components/Admin";
import Create from "./components/Create";
import Login from "./components/Login";
import Update from "./components/Update";



function App() {
  return (
    <div className="App">
      <Home/>
      <Header />
      <Footer />
      <About />
      <Admin/>
      <Create/>
      <Login/>
      {/* <Update/> */}
    </div>
  );
}

export default App;
