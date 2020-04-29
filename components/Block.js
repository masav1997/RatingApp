import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

export default class Block extends React.Component {
	render() {
		const { title, onPress } = this.props;
		const ViewStyle = {
					flexDirection: 'row',
					backgroundColor: '#FFF',
					borderBottomColor: '#CFD2D8',
					borderBottomWidth: 1,
					paddingBottom: 20,
					marginBottom:20
			  };
		const textStyle = {
			fontSize: 16,
			fontWeight: '600',
		};
		const imgStyle = {
			width: 20,
			height: 20,
		};
		return (
			<TouchableOpacity style={ViewStyle} onPress={onPress}>
				<View style={{ flex: 11 }}>
					<Text style={textStyle}>{title}</Text>
				</View>
				<View style={{ flex: 1 }}>
					<Image source={require('../assets/icons/forward.png')} style={imgStyle}></Image>
				</View>
			</TouchableOpacity>
		);
	}
}
