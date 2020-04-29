import React from 'react';
import { View, Text } from 'react-native';

export default class Title extends React.Component {
	render() {
		const { subtitle, linkTitle, boldTitle, onPress } = this.props;
		const descriptionStyle = {
			marginBottom: 30,
			alignSelf:'center',
			textAlign: 'center'
		};
		const descriptionTextStyle = {
			fontStyle: 'normal',
			fontSize: 16,
			lineHeight: 20,
			marginTop: 5,
			fontWeight: '500',
			color: '#B5BBC9',
			textAlign: 'center'
		};
		const descriptionTextLinkStyle = {
			fontStyle: 'normal',
			fontSize: 16,
			lineHeight: 20,
			textAlign: 'center',
			fontWeight: '500',
			color: '#5227D0',
			marginTop: 5,
		};
		const descriptionTextBoldStyle = {
			fontStyle: 'normal',
			fontSize: 18,
			lineHeight: 20,
			textAlign: 'center',
			fontWeight: '500',
			color: '#FFF',
			marginTop: 5,
		};
		return (
			<View style={descriptionStyle}>
				<Text style={descriptionTextStyle}>
					{subtitle}
					<Text style={descriptionTextLinkStyle} onPress={onPress}>
						{linkTitle}
					</Text>
					<Text style={descriptionTextBoldStyle}> {boldTitle}</Text>
				</Text>
			</View>
		);
	}
}
