import React, { Component } from 'react';
import TemperatureInput from './TemperatureInput';
import BoilingVerdict from './BoilingVerdict';

function toCelsius(value, scale) {
	if (scale == 'f'){
		return ((value - 32) * 5 / 9);
	}else if (scale == 'k'){
		return (value - 273.15);
	}
}

function toFahrenheit(value, scale) {
	if (scale == 'c'){
		return (value * 9 / 5) + 32;
	}else if (scale == 'k'){
		return ((value * 9 / 5) - 459.67);
	}
}

function toKelvin(value, scale) {
	if (scale == 'c') {
		return (value + 273.15)
	}else if (scale == 'f'){
		return ((value + 459.67) * (5 / 9))
	}
}

function tryConvert(temperature, from, to) {
	const input = parseFloat(temperature);
	if (Number.isNaN(input)) {
		return 'Not a number';
	}else{
		if(from == 'c'){
			if (to == 'f'){
				return toFahrenheit(input, from);
			}else if (to == 'k'){
				return toKelvin(input, from);
			}
		}else if (from == 'f'){
			if (to == 'c'){
				return toCelsius(input, from);
			}else if (to == 'k'){
				return toKelvin(input, from);
			}
		}else if (from == 'k'){
			if (to == 'f'){
				return toFahrenheit(input, from);
			}else if (to == 'c'){
				return toCelsius(input, from);
			}
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
		this.handleFChange = this.handleFChange.bind(this);
		this.handleKChange = this.handleKChange.bind(this)
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

	handleKChange(value){
		this.setState({
			value: value,
			scale: 'k'
		})
	}


	render(){
		var scale = this.state.scale;
		var value = this.state.value;

		if(scale == "c"){
			var cTemp = value;
			var fTemp = tryConvert(value, scale, 'f')
			var kTemp = tryConvert(value, scale, 'k')
		}else if(scale == "f"){
			var fTemp = value;
			var cTemp = tryConvert(value, scale, 'c')
			var kTemp = tryConvert(value, scale, 'k')
		}else{
			var kTemp = value;
			var cTemp = tryConvert(value, scale, 'c')
			var fTemp = tryConvert(value, scale, 'f')
		}





		return(
			<div>
				<TemperatureInput scale='c' value={cTemp} onChange={this.handleCChange} />
				<BoilingVerdict scale='c' value={cTemp} />
				<TemperatureInput scale='f' value={fTemp} onChange={this.handleFChange} />
				<BoilingVerdict scale='f' value={fTemp}/>
				<TemperatureInput scale='k' value={kTemp} onChange={this.handleKChange} />
				<BoilingVerdict scale='k' value={kTemp}/>
			</div>
		)
	}
}

export default Calculator