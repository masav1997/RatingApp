import React from 'react';
import { Image } from 'react-native';

export default class BackIcon extends React.Component {
	render() {
		const imgStyle = {
			width: 20,
			height: 20,
			marginTop:20,
		};

		return <Image source={require('../assets/icons/back.png')} style={imgStyle} />;
	}
}
