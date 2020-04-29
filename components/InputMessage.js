import React from 'react';
import { View, TextInput, Image, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default class InputMessage extends React.Component {
	constructor(props) {
		super(props);
		this.state = { press: true };
	}
	onPress = () => {
		this.setState({ press: false });
	};
	render() {
		return (
			<View
				style={{
					width: width,
					height: 65,
					backgroundColor: '#fff',
					marginBottom: 50,
					padding: 15,
				}}
			>
				<View style={{ flexDirection: 'row' }}>
					<View
						style={{
							backgroundColor: '#EDF1F9',
							height: 35,
							width: '88%',
							borderRadius: 20,
							padding: 5,
							paddingLeft: 15,
							marginRight: 10,
						}}
					>
						<TextInput
							style={{ width: '100%', height: '100%' }}
							placeholder="Введите ваше сообщение..."
							placeholderTextColor="#96A8AE"
							onChangeText={this.onPress}
						/>
					</View>
					{this.state.press ? (
						<Image
							source={require('../assets/icons/plus.png')}
							style={{ width: 26.5, height: 26.5, alignSelf: 'center' }}
						/>
					) : (
						<Image
							source={require('../assets/icons/send.png')}
							style={{ width: 35, height: 35, alignSelf: 'center' }}
						/>
					)}
				</View>
			</View>
		);
	}
}
