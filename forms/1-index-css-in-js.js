
import react from 'react';
import styled from 'styled-components';

import Form from './forms';
import Header from './header';

const Container = styled.main`
	disply:flex;
	flex-direction:column;
	min-height:100%;
	ackground-color: #f6f9fc;
	`;

const Stripe = styled.div`
	height: 10vh;
	overflow: hidden;
	transform:skewY(-8deg);
	transform-origin:0;
	background: linear-gradient(-150deg, rgb(255, 255,255, 0) 40%, #ddecf7 70%);
`;

export default function login(){
	return (
		<Container>
			<Header />
			<Stripe />
			<Form  fields = {['email', 'phoneNumner']}/>
		</Container)
	;
}
