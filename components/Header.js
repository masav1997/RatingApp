import React from 'react';
import { View, TouchableOpacity } from 'react-native';

export default class Header extends React.Component {
	render() {
		const { left, center, right } = this.props;
		const headerStyle = {
			top: 50,
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'center',
		};
		const leftStyle = {
			flex: 1,
			alignItems: 'center',
			alignContent: 'center',
			justifyContent:'center',
			height:60
		};
		const centerStyle = {
			flex: 6,
			alignItems: 'center',
			alignContent: 'center',
			justifyContent:'center',
			height:60
		};
		const rightStyle = {
			flex: 1,
			alignItems: 'center',
			alignContent: 'center',
			justifyContent:'center',
			height:60
		};
		return (
			<View style={headerStyle}>
				<View style={leftStyle}>
					{left}
				</View>
				<View style={centerStyle}>{center}</View>
				<View style={rightStyle}>{right}</View>
			</View>
		);
	}
}
