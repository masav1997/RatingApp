import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

export default class RowBlock extends React.Component {
	render() {
		const { row1, row2, row3, row4, row5, row6, color } = this.props;

		return (
			<View
				style={{
					flexDirection: 'row',
					borderBottomColor: '#CFD2D8',
					borderBottomWidth: 1,
					paddingBottom: 20,
					marginLeft: 10,
					marginRight: 10,
					marginBottom: 20,
					marginTop: 10,
				}}
			>
				<View style={{ flex: 1 }}>
					<Text
						style={{
							fontSize: 15,
							color: '#B5BBC9',
							fontWeight: '700',
							textAlign: 'center',
						}}
					>
						{row1}
					</Text>
					<Text
						style={{
							fontSize: 15,
							color: '#0D1F3C',
							fontWeight: '700',
							textAlign: 'center',
						}}
					>
						{row2}
					</Text>
				</View>
				<View style={{ flex: 1 }}>
					<Text
						style={{
							fontSize: 15,
							color: '#B5BBC9',
							fontWeight: '700',
							textAlign: 'center',
						}}
					>
						{row3}
					</Text>
					<Text
						style={{
							fontSize: 15,
							color: color,
							fontWeight: '700',
							textAlign: 'center',
						}}
					>
						{row4}
					</Text>
				</View>
				<View style={{ flex: 1 }}>
					<Text
						style={{
							fontSize: 15,
							color: '#B5BBC9',
							fontWeight: '700',
							textAlign: 'center',
						}}
					>
						{row5}
					</Text>
					<Text
						style={{
							fontSize: 15,
							color: '#0D1F3C',
							fontWeight: '700',
							textAlign: 'center',
						}}
					>
						{row6}
					</Text>
				</View>
			</View>
		);
	}
}
