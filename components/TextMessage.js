import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

export default class TextMessage extends React.Component {
	render() {
		const { message, time, avatar } = this.props;

		return (
			<View style={{ flexDirection: 'row', alignSelf: 'flex-start' }}>
				<Image
					source={avatar}
					style={{ width: 30, height: 30, alignSelf: 'flex-end', bottom: 20, marginRight: 5 }}
				/>

					<View style={{ flexDirection: 'row', width: 'auto', marginBottom:20, marginTop:10, alignSelf: 'flex-start', }}>
						<Text
							style={{
								fontSize: 13,
								color: '#96A8AE',
								textAlign: 'left',
								alignSelf: 'center',
								bottom:5
							}}
						>
							печатает сообщение...
						</Text>
					</View>
				</View>
		);
	}
}
