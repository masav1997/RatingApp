import React from 'react';
import { View, TextInput, Image } from 'react-native';

export default class SearchBlock extends React.Component {
	render() {
		const { title } = this.props;

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
			</View>
		);
	}
}
