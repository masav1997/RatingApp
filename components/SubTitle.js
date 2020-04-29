import React from 'react';
import { View, Text } from 'react-native';

export default class SubTitle extends React.Component {
	render() {
		const { subtitle, linkTitle, boldTitle, onPress } = this.props;
		const descriptionStyle = {
			marginBottom: 30,
			alignSelf:'center',
			textAlign: 'center'
		};
		const descriptionTextStyle = {
			fontStyle: 'normal',
			fontSize: 14,
			lineHeight: 20,
			color: '#0D1F3C',
			textAlign: 'center',
		}
		return (
			<View style={descriptionStyle}>
				<Text style={descriptionTextStyle}>
					{subtitle}
				</Text>
			</View>
		);
	}
}
