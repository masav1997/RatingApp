import React from 'react';
import { Image } from 'react-native';

export default class NavIcon extends React.Component {
	render() {
		const imgStyle = {
			width: 20,
			height: 20,
			top: 20,
			alignSelf:'flex-end'
		};

		return <Image source={require('../assets/icons/nav.png')} style={imgStyle}></Image>;
	}
}
