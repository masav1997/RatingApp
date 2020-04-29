import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image, Dimensions } from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
const { width } = Dimensions.get('window');

export default class Multislider extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			values: [1, 4],
		};
	}
	multiSliderValuesChange = values => {
		this.setState({
			values,
		});
	};
	render() {
		const { title } = this.props;

		const titleStyle = {
			flexDirection: 'row',
		};

		const titleTextStyle = {
			fontStyle: 'normal',
			fontSize: 14,
			color: '#9EA5B1',
			flex:3
		};

		const price1Style = {
			fontStyle: 'normal',
			fontSize: 14,
			fontWeight: '500',
			color: '#0D1F3C',
			textAlign: 'right',
			flex:1
		};

		return (
			<View style={{ marginBottom: 20 }}>
				<View style={titleStyle}>
					<Text style={titleTextStyle}>{title}</Text>
					<Text style={price1Style}>от {this.state.values[0]} до {this.state.values[1]}</Text>
				</View>
				<MultiSlider
					values={[this.state.values[0], this.state.values[1]]}
					sliderLength={width - 40}
					onValuesChange={this.multiSliderValuesChange}
					min={0}
					max={5}
					step={1}
					selectedStyle={{
						backgroundColor: '#5227D0',
						height: 4,
					}}
					unselectedStyle={{
						backgroundColor: '#9597A1',
						height: 4,
						borderRadius: 6,
					}}
					markerStyle={{
						backgroundColor: '#FFFFFF',
						width: 13,
						height: 13,
						top: 1,
						borderWidth:1,
						borderColor: '#5227D0'
					}}
				/>
			</View>
		);
	}
}

