import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

export default class BackIcon extends React.Component {
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
				<Image source={require('../assets/icons/back.png')} style={imgStyle}></Image>
			</TouchableOpacity>
		);
	}
}
