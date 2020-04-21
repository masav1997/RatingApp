import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

export default class ListCheck extends React.Component {
	render() {
		const { color, onPress, title, title1, subtitle1, image, mark, voice } = this.props;
		const TextStyle = {
			fontSize: 15,
			color: '#9EA5B1',
			textAlign: 'left',
			marginBottom: 20,
		};
		const TouchableStyle = {
			flexDirection: 'row',
			alignSelf: 'center',
		};
		return (
			<View style={{paddingHorizontal:10}}>
				<Text style={TextStyle}>{title}</Text>
				<TouchableOpacity style={TouchableStyle} onPress={onPress}>
					<View style={{ flex: 3 }}>
						<Image source={image} style={{ width: 40, height: 40 }} />
					</View>
					<View style={{ flex: 10 }}>
						<Text
							style={{
								fontSize: 16,
								color: '#0D1F3C',
								textAlign: 'left',
								fontWeight: '700',
							}}
						>
							{title1}
						</Text>
						<Text
							style={{
								fontSize: 15,
								color: '#A7ADBA',
								textAlign: 'left',
							}}
						>
							{subtitle1}
						</Text>
					</View>
					<View
						style={{
							flex: 5,
							alignSelf:'center'
						}}
					>
						{mark}
					</View>
				</TouchableOpacity>
			</View>
		);
	}
}
