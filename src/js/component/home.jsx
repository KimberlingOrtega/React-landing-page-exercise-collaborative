import React from "react";
import {Navbar} from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<>
		<Navbar/>
		<div className="container">
		<Jumbotron/>
			
			
		</div>
		</>
	);
};

export default Home;
