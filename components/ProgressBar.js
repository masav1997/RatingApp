import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

export default class ProgressBar extends React.Component {
	render() {
		const { mark, progress, color, count } = this.props;

		return (
			<View style={{ flexDirection: 'row', marginBottom: 10 }}>
				<View style={{ flex: 2 }}>
					<Text style={{ fontSize: 13, color: '#B5BBC9', fontWeight: '700' }}>{mark}</Text>
				</View>
				<View style={{ width: '100%', height: 5, backgroundColor: '#fff', flex: 25, top: 8 }}>
					<View
						style={{
							width: progress,
							height: 5,
							backgroundColor: color,
							borderRadius: 12,
						}}
					/>
				</View>
				<View style={{ flex: 4 }}>
					<Text
						style={{
							fontSize: 13,
							color: '#0D1F3C',
							fontWeight: '700',
							textAlign: 'right',
						}}
					>
						{count}
					</Text>
				</View>
			</View>
		);
	}
}
