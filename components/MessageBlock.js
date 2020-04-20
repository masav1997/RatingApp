import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

export default class MessageBlock extends React.Component {
	render() {
		const { message, time, status } = this.props;

		return (
			<View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
				<View
					style={{
						width: 'auto',
						height: 'auto',
						padding: 10,
						backgroundColor: '#F3F6F7',
						borderWidth: 0.5,
						borderColor: '#CBD0DB',
						borderRadius: 10,
						marginBottom: 20,
						marginLeft: 60,
					}}
				>
					<View style={{ flexDirection: 'row', width: 'auto' }}>
						<Text
							style={{
								fontSize: 15,
								color: '#0F1D2B',
								textAlign: 'left',
								marginRight: 5,
								width: '80%',
							}}
						>
							{message}
						</Text>
						<Image
							source={status}
							style={{
								width: 13,
								height: 9,
								alignSelf: 'flex-end',
								bottom: 2,
								marginRight: 2,
							}}
						/>
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
