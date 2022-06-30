import React from "react";
import {Navbar} from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Cards from "./Cards.jsx";
import Foot from "./foot.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		
		<><Navbar />
		<div className="container">
			<Jumbotron />
		</div>

		<div className="container mb-4 d-flex justify-content-between flex-wrap">
		<Cards />
		<Cards />
		<Cards />
		<Cards />
		</div>
		<Foot/>	
		</>

		
		
		
	);
};

export default Home;
