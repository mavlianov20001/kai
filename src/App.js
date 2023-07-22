import {BrowserRouter} from "react-router-dom";
import AppRouter from "./links/AppRouter";
import Header from "./components/UI/header/Header";
import Footer from "./components/UI/footer/Footer";
import React from "react";

function App() {
    return (
        <div className="wrapper">
            <BrowserRouter>
                <Header/>
                <AppRouter/>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
