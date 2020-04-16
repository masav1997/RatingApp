import React from 'react';
import { View, Text, TextInput } from 'react-native';
import ViewIcon from './ViewIcon';

export default class InputPassword extends React.Component {
	state = {
		bool: false,
	};
	render() {
		const { label, keyboardType, placeholder, icon, ...props } = this.props;
		const ViewStyle = this.state.bool
			? {
					paddingTop: 20,
					height: 50,
					marginBottom: 20,
					borderBottomColor: '#5227D0',
					borderBottomWidth: 2,
			  }
			: {
					paddingTop: 20,
					height: 50,
					marginBottom: 20,
					borderBottomColor: '#CFD2D8',
					borderBottomWidth: 1,
			  };
		const textInputStyle = {
			height: 26,
			fontSize: 16,
			color: '#0D1F3C',
		};
		const labelStyle = {
			position: 'absolute',
			fontSize: 13,
			color: '#B5BBC9',
			fontWeight: '600',
		};
		return (
			<View style={ViewStyle}>
				<Text style={labelStyle}>{label}</Text>
				<View style={{ flexDirection: 'row' }}>
					<View style={{ flex: 11 }}>
						<TextInput
							{...props}
							style={textInputStyle}
							keyboardType={keyboardType}
							placeholder={placeholder}
							placeholderTextColor={'#3D4C63'}
							onChangeText={() => {
								this.setState({ bool: true });
							}}
						/>
					</View>
					<View style={{ flex: 1, marginLeft:5}}>
						{icon}
					</View>
				</View>
			</View>
		);
	}
}
