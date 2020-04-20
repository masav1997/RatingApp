import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

export default class MessageBlock1 extends React.Component {
	render() {
		const { message, time, avatar } = this.props;

		return (
			<View style={{ flexDirection: 'row', alignSelf: 'flex-start' }}>
				<Image
					source={avatar}
					style={{ width: 30, height: 30, alignSelf: 'flex-end', bottom: 20, marginRight: 5 }}
				/>
				<View
					style={{
						width: 'auto',
						height: 'auto',
						padding: 10,
						backgroundColor: '#FFF',
						borderWidth: 0.5,
						borderColor: '#CBD0DB',
						borderRadius: 10,
						marginBottom: 20,
						marginRight: 60,
					}}
				>
					<View style={{ flexDirection: 'row', width: 'auto' }}>
						<Text
							style={{
								fontSize: 15,
								color: '#0F1D2B',
								textAlign: 'left',
								marginRight: 15,
								width: '80%',
							}}
						>
							{message}
						</Text>
						<Text
							style={{
								fontSize: 9,
								color: '#0F1D2B',
								textAlign: 'left',
								alignSelf: 'flex-end',
							}}
						>
							{time}
						</Text>
					</View>
				</View>
			</View>
		);
	}
}
