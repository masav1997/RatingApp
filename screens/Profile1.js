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
	TextInput,
} from 'react-native';
import Header from '../components/Header';
import NavIcon from '../components/NavIcon';
import BackIcon from '../components/BackIcon';
import TextBlock from '../components/TextBlock';
import InfoBlock from '../components/InfoBlock';
import SearchBlock from '../components/SearchBlock';
import Modal from 'react-native-modal';

const { width, height } = Dimensions.get('window');

export default class Profile1 extends React.Component {
	state = {
		isDrawerVisible: false,
	};
	hideDrawer = () => {
		this.setState({ isDrawerVisible: !this.state.isDrawerVisible });
	};
	render() {
		return (
			<View
				style={{
					backgroundColor: '#5227D0',
					height: '100%',
					width: width,
					alignItems: 'center',
				}}
			>
				<StatusBar barStyle="light-content" />
				<Header
					right={
						<TouchableOpacity
							onPress={this.hideDrawer}
							style={{ width: 100, height: 50, bottom: 10, paddingRight: 20 }}
						>
							<NavIcon onPress={this.hideDrawer} />
						</TouchableOpacity>
					}
					left={
						<TouchableOpacity onPress={() => this.props.navigation.goBack()}>
							<View style={{ width: 60, height: 40, bottom: 10, paddingLeft: 20 }}>
								<BackIcon />
							</View>
						</TouchableOpacity>
					}
				/>

				<SafeAreaView>
					<View
						style={{
							backgroundColor: '#FFFFFF',
							flex: 1,
							marginTop: 60,
							width: width,
							height: height,
							borderTopLeftRadius: 20,
							borderTopRightRadius: 20,
							justifyContent: 'flex-end',
						}}
					>
						<View
							style={{
								width: 65,
								height: 65,
								alignSelf: 'center',
								bottom: 25,
								backgroundColor: '#FFF',
								borderRadius: 60,
							}}
						>
							<Image
								source={require('../assets/icons/avatar2.png')}
								style={{ width: 57, height: 57, alignSelf: 'center', top: 3 }}
							/>
						</View>
						<Text style={{ textAlign: 'center', fontSize: 16, fontWeight: '700', bottom: 10 }}>
							Ada Perry
						</Text>
						<Text
							style={{
								textAlign: 'center',
								fontSize: 16,
								bottom: 10,
								color: '#B5BBC9',
								marginBottom: 10,
							}}
						>
							786-222-8410
						</Text>
						<ScrollView style={{ padding: 20, paddingTop: 0 }}>
							<InfoBlock
								title1="UKnow"
								subtitle1="Мобильное приложение"
								image={require('../assets/icons/avatar.png')}
							/>
							<TextBlock title="Оценка" text="4.7 из 5.0" />
							<TextBlock title="Дата" text="03 апреля 2020  19:45" />
							<TextBlock
								title="Текст отзыва"
								text="Поначалу пицца в этом заведении показалась очень вкусной, но спустя несколько посещений стало ясно, что пицца-то очень тяжелая, на нижней части тесто все в масле, коробка вся пропитана маслом. Кроме того пицца на толстом тесте как правило имеет мало начинки. Сначала как-то этого не замечаешь, но потом видишь, что пицца сытная только за счет тяжелого толстого теста! Начинки мало, а цена высокая. Больше не ходим в пиццу хат."
							/>
						</ScrollView>
					</View>
					<Modal
						isVisible={this.state.isDrawerVisible}
						onBackdropPress={this.hideDrawer}
						style={{
							height: height,
							width: width / 1.5,
							marginTop: Platform.OS === 'android' ? 0 : 20,
							marginBottom: 0,
							marginLeft: width / 3,
							backgroundColor: '#EDF1F9',
							paddingRight: 30,
							paddingLeft: 30,
						}}
					>
						<View>
							<View
								style={{
									flexDirection: 'row',
									marginBottom: 10,
									marginTop: 10,
									alignSelf: 'center',
								}}
							>
								<View style={{ flex: 1 }}>
									<Image
										source={require('../assets/icons/avatar1.png')}
										style={{ width: 60, height: 60 }}
									/>
								</View>
								<View style={{ flex: 1 }}></View>
							</View>
							<View
								style={{
									flexDirection: 'row',
									marginBottom: 20,
									alignSelf: 'center',
								}}
							>
								<View style={{ flex: 1 }}>
									<Text
										style={{
											fontSize: 16,
											fontWeight: '700',
											color: '#0D1F3C',
											textAlign: 'left',
										}}
									>
										Константин Константинович
									</Text>
								</View>
							</View>
							<TouchableOpacity
								style={{
									flexDirection: 'row',
									marginBottom: 20,
									marginTop: 10,
									alignSelf: 'center',
								}}
								onPress={() => {
									this.props.navigation.navigate('Profile');
									this.hideDrawer();
								}}
							>
								<View style={{ flex: 1 }}>
									<Image
										source={require('../assets/icons/contacts.png')}
										style={{ width: 17, height: 19, tintColor: '#5227D0' }}
									/>
								</View>
								<View style={{ flex: 4 }}>
									<Text
										style={{
											fontSize: 16,
											color: '#5227D0',
											textAlign: 'left',
										}}
									>
										Контакты
									</Text>
								</View>
							</TouchableOpacity>
							<TouchableOpacity
								style={{
									flexDirection: 'row',
									marginBottom: 20,
									marginTop: 10,
									alignSelf: 'center',
								}}
								onPress={() => {this.props.navigation.navigate('Filters'); this.hideDrawer()}}
							>
								<View style={{ flex: 1 }}>
									<Image
										source={require('../assets/icons/find.png')}
										style={{ width: 22, height: 22, tintColor: '#CBD0DB' }}
									/>
								</View>
								<View style={{ flex: 4 }}>
									<Text
										style={{
											fontSize: 16,
											color: '#0D1F3C',
											textAlign: 'left',
										}}
									>
										Поиск
									</Text>
								</View>
							</TouchableOpacity>
							<TouchableOpacity
								style={{
									flexDirection: 'row',
									marginBottom: 20,
									marginTop: 10,
									alignSelf: 'center',
								}}
								onPress={() => {this.props.navigation.navigate('MyCompany'); this.hideDrawer()}}
							>
								<View style={{ flex: 1 }}>
									<Image
										source={require('../assets/icons/companies.png')}
										style={{ width: 22, height: 22, tintColor: '#CBD0DB' }}
									/>
								</View>
								<View style={{ flex: 4 }}>
									<Text
										style={{
											fontSize: 16,
											color: '#0D1F3C',
											textAlign: 'left',
										}}
									>
										Мои компании
									</Text>
								</View>
							</TouchableOpacity>
							<TouchableOpacity
								style={{
									flexDirection: 'row',
									marginBottom: 20,
									marginTop: 10,
									alignSelf: 'center',
								}}
								onPress={() => {this.props.navigation.navigate('Settings'); this.hideDrawer()}}
							>
								<View style={{ flex: 1 }}>
									<Image
										source={require('../assets/icons/settings.png')}
										style={{ width: 22, height: 22, tintColor: '#CBD0DB' }}
									/>
								</View>
								<View style={{ flex: 4 }}>
									<Text
										style={{
											fontSize: 16,
											color: '#0D1F3C',
											textAlign: 'left',
										}}
									>
										Настройки
									</Text>
								</View>
							</TouchableOpacity>
							<TouchableOpacity
								style={{
									flexDirection: 'row',
									marginBottom: 20,
									marginTop: width / 2,
									alignSelf: 'center',
								}}
								onPress={() => {this.props.navigation.navigate('SignInShop'); this.hideDrawer()}}
							>
								<View style={{ flex: 1 }}>
									<Image
										source={require('../assets/icons/exit.png')}
										style={{ width: 20, height: 23 }}
									/>
								</View>
								<View style={{ flex: 4 }}>
									<Text
										style={{
											fontSize: 16,
											color: '#FF4D5B',
											textAlign: 'left',
										}}
									>
										Выйти
									</Text>
								</View>
							</TouchableOpacity>
						</View>
					</Modal>
				</SafeAreaView>
			</View>
		);
	}
}
