import React, { Component } from 'react';

class TemperatureInput extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event){
		this.props.onChange(event.target.value);
	}

	render(){
		const value = this.props.value;
		const scale = this.props.scale;
		return(
			<fieldset>
				<legend>Enter temperature in {scale}:</legend>
				<input value={value}
					onChange={this.handleChange} />
			</fieldset>
		)
	}
}

export default TemperatureInput;