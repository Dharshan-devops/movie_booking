import React from "react";
import Body from "./components/landing_page/body";
import { BrowserRouter } from "react-router-dom";
export default function Controller(){
    return(
        <BrowserRouter>
        <div>
            <Body />
        </div>
        </BrowserRouter>
    )
}