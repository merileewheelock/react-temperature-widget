import React, { Component } from 'react';
import TemperatureInput from './TemperatureInput';
import BoilingVerdict from './BoilingVerdict';

function toCelsius(fahrenheit) {
	return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
	return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
	const input = parseFloat(temperature);
	if (Number.isNaN(input)) {
		return 'Not a number';
	}else{
		if(convert == 'c'){
			return toFahrenheit(input);
		}else{
			return toCelsius(input);
		}
	}
	// const output = convert(input);
	// const rounded = Math.round(output * 1000) / 1000;
	// return rounded.toString();
}

class Calculator extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 20,
			scale: 'c'
		}
		this.handleCChange = this.handleCChange.bind(this);
		this.handleFChange = this.handleFChange.bind(this)
	}

	handleCChange(value){
		this.setState({
			value: value,
			scale: 'c'
		})
	}

	handleFChange(value){
		this.setState({
			value: value,
			scale: 'f'
		})
	}



	render(){
		var scale = this.state.scale;
		var value = this.state.value;

		if(scale == "c"){
			var cTemp = value;
			var fTemp = tryConvert(value, scale)
		}else{
			var fTemp = value;
			var cTemp = tryConvert(value, scale)
		}





		return(
			<div>
				<TemperatureInput scale='c' value={cTemp} onChange={this.handleCChange} />
				<BoilingVerdict scale='c' value={cTemp} />
				<TemperatureInput scale='f' value={fTemp} onChange={this.handleFChange} />
				<BoilingVerdict scale='f' value={fTemp}/>
			</div>
		)
	}
}

export default Calculator