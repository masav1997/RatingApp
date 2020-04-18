import React from 'react';
import { TouchableOpacity, Image, View } from 'react-native';

export default class BackIcon extends React.Component {
	render() {
		const imgStyle = {
			width: 20,
			height: 20,
			top: 20,
		};

		return <Image source={require('../assets/icons/back.png')} style={imgStyle} />;
	}
}
