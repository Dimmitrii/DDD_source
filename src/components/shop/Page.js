import React from 'react'
import Header from "./Header";
import List from "./List";
import Special from "./Special";
import Footer from "./Footer";

export default function Page() {
    return (
        <div>
            <Header/>
            <List/>
            <Special/>
            <Footer/>           
        </div>
    )
}
