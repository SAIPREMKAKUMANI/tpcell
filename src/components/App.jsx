import React ,{useState} from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./Home";
import Training from "./Training";
import Header from "./Header";
import Footer from "./Footer";
import Placement from "./Placement";
import AboutUs from "./AboutUs";
import Director from "./Director";
import Tpo from "./Tpo";
import Info from "./Info";
import Login from "./Login";
import Register from "./Register";
import NoMatch from "./NoMatch";

function App(){
      const [currentForm,setCurrentForm]=useState('login');
      function toggleForm(formName){
        setCurrentForm(formName);
      }
      const [data,setData]=useState([{name:"Saiprem Kakumani" ,mail: "saipremkakumani@gmail.com",pass: "6281237154",fac: true}]);
      function obtainData(props){
        setData(prevData => {
          return [...prevData,props];
        })
      }
    return <Router>
    {/* <Header/> */}
    <Routes>
        <Route exact path="/" element={currentForm ==='login' ? <Login onFormSwitch={toggleForm} userData={data} /> : <Register onFormSwitch={toggleForm} onSubmission={obtainData}/>}/>
        <Route exact path="/Home" element={<Home/>}/>
        <Route exact path="/Training" element={<Training />}/>
        <Route exact path="/Placement" element={<Placement />}/>
        <Route exact path="/AboutUs" element={<AboutUs />}/>
        <Route exact path="/message/director" element={<Director />}/>
        <Route exact path="/message/tpo" element={<Tpo />}/>
        <Route exact path="/Info" element={<Info />}/>
        <Route exact path="/Header" element={<Header />}/>
        <Route path="*" element={<NoMatch/>}/>
    </Routes>
    <Footer />
</Router>
}

export default App;
