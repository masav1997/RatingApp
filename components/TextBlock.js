import React from 'react';
import { View, Text } from 'react-native';

export default class TextBlock extends React.Component {
	render() {
		const { title, text } = this.props;
		const descriptionStyle = {
			marginBottom: 15,
		};
		const TitleStyle = {
			fontSize: 13,
			color: '#B5BBC9',
			fontWeight: '600',
		};
		const TextStyle = {
			fontSize: 16,
			color: '#0D1F3C',
		};
		return (
			<View style={descriptionStyle}>
				<Text style={TitleStyle}>{title}</Text>
				<Text style={TextStyle}>{text}</Text>
			</View>
		);
	}
}
