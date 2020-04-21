import React from 'react';
import { Image, TouchableOpacity} from 'react-native';

export default class BackIcon extends React.Component {
	render() {
		const { onPress } = this.props;
		const imgStyle = {
			width: 20,
			height: 20,
			top: 20,
		};

		return <TouchableOpacity onPress={onPress}><Image source={require('../assets/icons/back.png')} style={imgStyle} /></TouchableOpacity>;
	}
}
