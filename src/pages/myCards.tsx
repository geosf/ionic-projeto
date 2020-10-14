import React, { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

const MyCards = () => {
	const [data, setData] = useState({
		cvc: "",
		expiry: "",
		name: "",
		number: ""
	});
	const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
		setData({
			...data,
			[e.target.name]: e.target.value
		});
	};

	return (
		<div id="PaymentForm">
			<Cards
				cvc={data.cvc}
				expiry={data.expiry}
				name={data.name}
				number={data.number}
			/>
			<form action="">
				<input
					type="number"
					name="cvc"
					placeholder="CVC"
					onChange={handleInputChange}
				/>
				<input
					type="date"
					name="expiry"
					placeholder="Data de Expiração"
					onChange={handleInputChange}
				/>
				<input
					type="text"
					name="name"
					placeholder="Nome no Cartão"
					onChange={handleInputChange}
				/>
				<input
					type="number"
					name="number"
					placeholder="Numero do Cartão"
					onChange={handleInputChange}
				/>
			</form>
		</div>
  )}

  export default MyCards;