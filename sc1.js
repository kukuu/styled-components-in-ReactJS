
import React from 'react';
import ReactDom from 'react-dom';
import styled, { ThemeProvider } from 'styled-components';
import Image from './500.jpg';
import Heart from './images/heart-solid.svg';
import User from './images/user.jpg';
import Share from './images/share-solid.svg';
import Retweet from './images/retweet-solid.svg';

const theme = {
	font: sans-swerif,
	primary: "#333",
	secondary: "#999",
};

//const border = "5px solid red"

const Card = styled.div`
	max-width:350px;
	/*border:${border};*/
	border: 5px solid ${props => props.theme.primary}
	border-radius:5px;
	overflow:hidden;
	box-shadow:5px 5px 10px rgb(0, 0, 0, 0.3);
	margin:30px auto;
	@media (max-width:1000px) {
		background-color:red;
	}

	img {
		max-width:100%;
	}
`;

const SocialCard = () => (
	<CARD>
		<img src={ Image }  alt="Sample image" />

		{/* Content code goes here  */}
	</CARD>
);

const App = () => (
	<ThemeProvider theme = {theme}>
		<SocialCard />
	</ThemeProvider>
);

ReactDom.render(<App />, document.getElementById("app"));