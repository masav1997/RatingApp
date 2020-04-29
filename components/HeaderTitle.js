import React from 'react';
import { Text } from 'react-native';

export default class HeaderTitle extends React.Component {
	render() {
		const { title } = this.props;
		const textStyle = {
			fontWeight: '600',
			fontSize: 16,
			color: '#fff'
		};
		
		return <Text style={textStyle}>{title}</Text>;
	}
}
