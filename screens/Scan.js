import * as React from 'react';
import {
	View,
	Dimensions,
	SafeAreaView,
	StatusBar,
	ScrollView,
	Text,
	TouchableOpacity,
	Image,
	ImageBackground,
	Platform,
} from 'react-native';
import Header from '../components/Header';
import HeaderTitle from '../components/HeaderTitle';
import BackIcon from '../components/BackIcon';
import Button from '../components/Button';

const { width, height } = Dimensions.get('window');

export default class Scan extends React.Component {
	state = {
		isDrawerVisible: false,
		isPlaying: false,
		playbackInstance: null,
		currentIndex: 0,
		volume: 1.0,
		isBuffering: false,
	};
	hideDrawer = () => {
		this.setState({ isDrawerVisible: !this.state.isDrawerVisible });
	};
	render() {
		return (
			<ImageBackground
				resizeMode={'cover'}
				style={{
					height: '100%',
					width: width,
					alignItems: 'center',
				}}
				source={require('../assets/icons/bg.png')}
			>
				<StatusBar barStyle="light-content" />
				<Header
					center={<HeaderTitle title="Сканирование" />}
					left={
						<TouchableOpacity onPress={() => this.props.navigation.goBack()}>
							<View style={{ width: 60, height: 40, bottom: 10, paddingLeft: 20 }}>
								<BackIcon />
							</View>
						</TouchableOpacity>
					}
				/>

				<SafeAreaView>
					<ScrollView style={{ padding: 20, paddingTop: 0 }}>
						<View
							style={{
								width: width / 1.4,
								height: width / 1.4,
								backgroundColor: '#fff',
								marginTop: Platform.OS === 'android' ? height / 4 : height / 5.3,
								borderRadius: 20,
								alignSelf:'center'
							}}
						></View>
						<Text
							style={{
								textAlign: 'center',
								color: '#fff',
								fontSize: 15,
								marginTop: 15,
							}}
						>
							Расположите QR код в центре экрана
						</Text>
						<Button buttonTitle="Сканировать"/>
					</ScrollView>
				</SafeAreaView>
			</ImageBackground>
		);
	}
}
