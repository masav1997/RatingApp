import React from 'react';
import { View, Text, Image } from 'react-native';

export default class MessageSeparator extends React.Component {
	render() {
		const { data } = this.props;

		return (
			<View style={{ flexDirection: 'row', marginBottom: 40 }}>
				<View
					style={{
						flex: 1,
						alignSelf: 'flex-end',
						width: '100%',
						backgroundColor: '#ABBDD4',
						height: 0.5,
					}}
				/>
				<View
					style={{
						width: 'auto',
						height: 'auto',
						backgroundColor: '#FFF',
						borderWidth: 0.5,
						borderColor: '#ABBDD4',
						borderRadius: 5,
						flex: 1,
						marginRight: 5,
						marginLeft: 5,
						alignSelf: 'flex-end',
						padding: 5,
						top: 10,
					}}
				>
					<Text
						style={{
							fontSize: 9,
							color: '#AFBED2',
							textAlign: 'center',
						}}
					>
						{data}
					</Text>
				</View>
				<View
					style={{
						flex: 1,
						alignSelf: 'flex-end',
						width: '100%',
						backgroundColor: '#ABBDD4',
						height: 0.5,
					}}
				/>
			</View>
		);
	}
}
