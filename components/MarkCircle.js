import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default class MarkCircle extends React.Component {
	state = {
		bool: false,
	};
	render() {
		const { mark } = this.props;
		return (
			<TouchableOpacity
				style={{
					width: 46,
					height: 46,
					borderWidth: 1,
					borderColor: this.state.bool ? '#5227D0' : '#CFD2D8',
					borderRadius: 46,
					alignContent: 'center',
					marginRight:5,
					
				}}
				onPress={() => this.setState({ bool: !this.state.bool })}
			>
				<Text
					style={{
						color: this.state.bool ? '#5227D0' : '#CFD2D8',
						fontSize: 16,
						textAlign: 'center',
						fontWeight: 'bold',
						top: 10,
					}}
				>
					{mark}
				</Text>
			</TouchableOpacity>
		);
	}
}
