import { useState } from 'react';
import Inputs from './Inputs';
// theme
import { darkTheme, lightTheme } from '../../styles/tools';
// logic
import convertToAnyBase from '../../logic/convertToAnyBase';
import converterToBaseten from '../../logic/converterToBaseTen';
// styled components
import { CalculatorStyled } from '../../styles/calc';
import { useSelector } from 'react-redux';

function Calculator() {
	const theme = useSelector((state) => state.theme.value);
	// states
	const [number, setNumber] = useState(null);
	const [base, setBase] = useState(null);
	const [goalBase, setGoalBase] = useState(null);
	const [result, setResult] = useState('');

	const handlerSubmit = (e) => {
		e.preventDefault();

		const preResult = converterToBaseten(number, base);
		setResult(convertToAnyBase(preResult, goalBase));
	};
	// test

	return (
		<CalculatorStyled color={theme ? lightTheme : darkTheme}>
			<h2>Converter:</h2>
			<form action="" onSubmit={handlerSubmit}>
				<Inputs
					type="text"
					setState={setNumber}
					placeh="number"
					state={number}
					baseIndex={base}
					iden="enter"
				/>
				<Inputs
					type="number"
					setState={setBase}
					placeh="from e.g(base 10)"
					state={base}
					iden="base"
				/>
				<Inputs
					type="number"
					setState={setGoalBase}
					placeh="to e.g(base 16)"
					state={goalBase}
					iden="goalBase"
				/>

				<button>Convert</button>
			</form>
			<h1>Result: {result}</h1>
		</CalculatorStyled>
	);
}

export default Calculator;
