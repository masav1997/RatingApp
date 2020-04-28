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
				<SafeAreaView>
					<View
						style={{
							flexDirection: 'row',
							width: width,
							paddingHorizontal: 15,
							justifyContent: 'center',
							marginBottom: 20,
							marginTop: 20,
						}}
					>
						<TouchableOpacity
							style={{ flex: 1, alignItems: 'flex-start' }}
							onPress={() => this.props.navigation.goBack()}
						>
							<BackIcon />
						</TouchableOpacity>
						<View style={{flex: 6, alignItems: 'center', justifyContent: 'flex-end'}}><HeaderTitle title="Сканирование" /></View>
						<TouchableOpacity
							style={{ flex: 1, alignItems: 'flex-end' }}
						></TouchableOpacity>
					</View>
				</SafeAreaView>

				<SafeAreaView>
					<ScrollView style={{ padding: 20, paddingTop: 0, marginBottom: 140}}>
						<View
							style={{
								width: width / 1.4,
								height: width / 1.4,
								backgroundColor: '#fff',
								marginTop: Platform.OS === 'android' ? height / 4.6 : height / 6.6,
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
						<Button buttonTitle="Сканировать" onPress={() => this.props.navigation.navigate('Contacts')}/>
					</ScrollView>
				</SafeAreaView>
			</ImageBackground>
		);
	}
}
