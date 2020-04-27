import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

export default class NavIcon extends React.Component {
	render() {
		const { onPress } = this.props;
		const imgStyle = {
			width: 20,
			height: 20,
			marginTop: 20,
		};

		return (
			<TouchableOpacity onPress={onPress}>
				<Image source={require('../assets/icons/nav.png')} style={imgStyle}></Image>
			</TouchableOpacity>
		);
	}
}
