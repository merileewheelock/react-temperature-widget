import React from 'react';

function BoilingVerdict(props) {
	if (((props.scale == 'c') && (props.value >= 100)) || ((props.scale == 'f') && (props.value >= 212))){
		return <p>The water is boiling.</p>
	}else{
		return <p>The water is NOT boiling.</p>
	}
}

export default BoilingVerdict;