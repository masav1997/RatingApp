import React from 'react';
import { View, TextInput, Image, TouchableOpacity } from 'react-native';

export default class SearchBlock extends React.Component {
	render() {
		const { title, filters, onPress } = this.props;

		return (
			<View
				style={{
					flexDirection: 'row',
					borderBottomColor: '#CFD2D8',
					borderBottomWidth: 1,
					paddingBottom: 5,
					marginBottom: 20,
					marginTop: 10,
				}}
			>
				<View style={{ flex: 1 }}>
					<Image
						source={require('../assets/icons/search.png')}
						style={{ width: 19, height: 19, tintColor: '#CBD0DB', top: 5 }}
					/>
				</View>
				<View style={{ flex: 11 }}>
					<TextInput placeholder={title} placeholderTextColor={'#B5BBC9'} />
				</View>
				<TouchableOpacity style={{ flex: 1 }} onPress={onPress}>
					<Image
						source={filters}
						style={{ width: 19, height: 19, tintColor: '#CBD0DB', top: 5 }}
					/>
				</TouchableOpacity>
			</View>
		);
	}
}
