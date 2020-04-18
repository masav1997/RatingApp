import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

export default class NavIcon extends React.Component {
	render() {
		const { onPress } = this.props;
		const viewStyle = {
			width: 20,
			height: 20,
		};
		const imgStyle = {
			width: 20,
			height: 20,
		};

		return (
			<TouchableOpacity style={viewStyle} onPress={onPress}>
				<Image source={require('../assets/icons/nav.png')} style={imgStyle}></Image>
			</TouchableOpacity>
		);
	}
}
