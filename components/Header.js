import React from 'react';
import { View, TouchableOpacity} from 'react-native';

export default class Header extends React.Component {
	render() {
		const { left, center, right, onPress } = this.props;
		const headerStyle = {
			top: 50,
			flexDirection: 'row',
			width:'100%',
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor: 'black',
			paddingHorizontal: 40,
			paddingBottom: 10
		};
		const leftStyle = {
			flex: 1,
			alignItems: 'flex-start',
		};
		const centerStyle = {
			flex: 6,
			alignItems: 'center',
		};
		const rightStyle = {
			flex: 1,
			alignItems: 'center',
			alignSelf: 'center'
		};
		return (
			<View style={headerStyle}>
				<TouchableOpacity style={leftStyle} onPress={onPress}>
					{left}
				</TouchableOpacity>
				<TouchableOpacity style={centerStyle}>{center}</TouchableOpacity>
				<TouchableOpacity style={rightStyle}>{right}</TouchableOpacity>
			</View>
		);
	}
}
