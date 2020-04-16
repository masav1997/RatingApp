import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

export default class NavIcon extends React.Component {
	render() {
		const viewStyle = {
			width: 20,
			height: 20,
		};
		const imgStyle = {
			width: 20,
			height: 20,
		};

		return (
			<TouchableOpacity style={viewStyle}>
				<Image source={require('../assets/icons/nav.png')} style={imgStyle}></Image>
			</TouchableOpacity>
		);
	}
}
