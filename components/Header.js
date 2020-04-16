import React from 'react';
import { View } from 'react-native';

export default class Header extends React.Component {
	render() {
		const { left, center, right } = this.props;
		const headerStyle = {
			top: 50,
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'center',
			marginBottom: 10
		};
		const leftStyle = {
			flex: 1,
		};
		const centerStyle = {
			flex: 3,
			alignItems: 'center',
		};
		const rightStyle = {
			flex: 1,
			alignItems: 'flex-end',
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
