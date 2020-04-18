import React from 'react';
import { Text } from 'react-native';

export default class ModalTitle extends React.Component {
	render() {
		const { title } = this.props;
		const textStyle = {
			fontWeight: '600',
			fontSize: 16,
			color: '#0D1F3C',
			textAlign:'center',
			marginTop:20
		};
		
		return <Text style={textStyle}>{title}</Text>;
	}
}
