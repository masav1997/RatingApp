import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

export default class BackIcon extends React.Component {
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
				<Image source={require('../assets/icons/back.png')} style={imgStyle}></Image>
			</TouchableOpacity>
		);
	}
}
