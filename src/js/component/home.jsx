import React, { useState } from "react";


//include images into your bundle

import NavBar from "./navBar"
import JumboTron from "./jumbotron"
import Card from "./card"
import Footer from "./footer"

//create your first component





const Home = () => {

	
	
	return (
		<div className="text-center">
			<NavBar />

			<JumboTron />

			<div className="container ">
				<div className="row">
				
				
				<Card randomImage= {1}/>
				<Card randomImage= {2}/>
				<Card randomImage= {3}/>
				<Card randomImage= {4}/>
				<Card randomImage= {5}/>
				<Card randomImage= {6}/>
				<Card randomImage= {7}/>
				<Card randomImage= {8}/>
				<Card randomImage= {9}/>
				<Card randomImage= {10}/>
				<Card randomImage= {11}/>
				<Card randomImage= {12}/>
				
				
				</div>
			
			
			</div>

			<Footer />

		</div>
	);
};

export default Home;
