import * as React from 'react';
import { View, Dimensions, SafeAreaView, Image, Text, ScrollView } from 'react-native';

const { width} = Dimensions.get('window');

export default class SignInShop extends React.Component {
	render() {
		return (
			<View style={{ flex: 1, alignItems: 'center' }}>
				<View
					style={{
						backgroundColor: '#5227D0',
						height: '100%',
						width: width,
						paddingLeft: 20,
						paddingRight: 20,
					}}
				>
					
				</View>
			</View>
		);
	}
}
