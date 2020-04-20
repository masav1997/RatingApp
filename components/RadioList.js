import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';

export default class RadioList extends React.Component {
	state = {
		value: null,
	};
	render() {
		const { PROP, title } = this.props;
		const { value } = this.state;

		const container = {
			marginBottom: 24,
			alignItems: 'center',
			flexDirection: 'row',
		};

		const radioText = {
			fontSize: 16,
			color: '#0D1F3C',
			fontWeight: '500',
			marginLeft: 10,
		};

		const radioCircle = {
			height: 20,
			width: 20,
			borderRadius: 5,
			borderWidth: 1,
			borderColor: '#CBD0DB',
			alignItems: 'center',
			justifyContent: 'center',
		};

		const selectedRb = {
			width: 20,
			height: 20,
			borderRadius: 5,
			backgroundColor: '#5227D0',
		};

		const titleStyle = {
			fontSize: 14,
			color: '#9EA5B1',
			marginBottom: 20,
		};

		return (
			<View>
				<Text style={titleStyle}>{title}</Text>
				{PROP.map(res => {
					return (
						<View key={res.key} style={container}>
							<TouchableOpacity
								style={radioCircle}
								onPress={() => {
									this.setState({
										value: res.key,
									});
								}}
							>
								{value === res.key && (
									<Image source={require('../assets/icons/done.png')} style={selectedRb} />
								)}
							</TouchableOpacity>
							<Text style={radioText}>{res.text}</Text>
						</View>
					);
				})}
			</View>
		);
	}
}