import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

export default class InfoBlock extends React.Component {
	render() {
		const { color, onPress, title1, subtitle1, image, mark } = this.props;
		const TouchableStyle = {
			flexDirection: 'row',
			alignSelf: 'center',
		};
		return (
			<View style={{ borderBottomColor: '#CFD2D8', borderBottomWidth: 1, paddingBottom: 20, marginBottom: 20 }}>
				<TouchableOpacity style={TouchableStyle} onPress={onPress}>
					<View style={{ flex: 3 }}>
						<Image source={image} style={{ width: 40, height: 40 }} />
					</View>
					<View style={{ flex: 12 }}>
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
							flex: 1,
						}}
					>
						<Image
							source={require('../assets/icons/forward.png')}
							style={{ width: 24, height: 24, top: 10 }}
						/>
					</View>
				</TouchableOpacity>
			</View>
		);
	}
}
