import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export default class Choose extends React.Component {
	state = {
		bool: false
	};
	render() {
		const { title } = this.props;
		return (
			<TouchableOpacity
				style={{
					height: 40,
					width: '100%',
					borderBottomWidth: 0.5,
					borderBottomColor: '#CFD2D8',
					marginTop: 20,
				}}
				onPress={() => this.setState({ bool: !this.state.bool })}
			>
				<Text
					style={{
						fontSize: 16,
						color: '#3D4C63',
						textAlign: 'center',
						fontWeight: this.state.bool ? 'bold' : 'normal',
					}}
				>
					{title}
				</Text>
			</TouchableOpacity>
		);
	}
}
