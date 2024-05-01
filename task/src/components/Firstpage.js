import { Route, Router, Routes } from "react-router-dom";
import Info from "./Info";
import CollapsibleExample from "./Navbar";
import Superleadz from "./Superleadz";



function Firstpage() {
    return(
        <>
        <CollapsibleExample />
        <Info />
       
        </>
    )
}

export default Firstpage;