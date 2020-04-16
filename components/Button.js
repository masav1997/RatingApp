import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default class Button extends React.Component {
	render() {
		const { buttonTitle, onPress } = this.props;
		const buttonStyle = {
			backgroundColor: '#5227D0',
			borderRadius: 12,
			marginLeft: 60,
			marginRight: 60,
			width: width - 120,
			height: 50,
			alignSelf: 'center',
			marginBottom: 20,
			marginTop: 60
		};
		const touchableStyle = {
			width: '100%',
			height: '100%',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
		};
		const textStyle = {
			color: '#FFFFFF',
			fontWeight: '600',
		};
		return (
			<View style={buttonStyle}>
				<TouchableOpacity style={touchableStyle} onPress={onPress}>
					<Text style={textStyle}>{buttonTitle}</Text>
				</TouchableOpacity>
			</View>
		);
	}
}
