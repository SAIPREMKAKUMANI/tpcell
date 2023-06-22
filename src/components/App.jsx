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

function App(){
    const [data,setData]=useState([]);
    function getData(props){
       const res=props;
       console.log(props);
       setData(res);
    }
    return <Router>
    <Header />
    <Routes>
        <Route exact path="/" element={<Home shareInfo={getData}/>}/>
        <Route exact path="/Training" element={<Training />}/>
        <Route exact path="/Placement" element={<Placement />}/>
        <Route exact path="/AboutUs" element={<AboutUs />}/>
        <Route exact path="/message/director" element={<Director />}/>
        <Route exact path="/message/tpo" element={<Tpo />}/>
        <Route exact path="/Info" element={<Info details={data} />}/>
    </Routes>
    <Footer />
</Router>
}

export default App;