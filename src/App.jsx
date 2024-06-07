import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import JobListings from "./components/JobListings";
import ViewAll from "./components/ViewAll.jsx";
const App = () => {
    return (
        <>
            <Navbar />
            <Hero title="Test title" /*subtitle="This is the subtitle..."*/ />
            <HomeCards />
            <JobListings />
            <ViewAll />
        </>
    );
};

export default App;
