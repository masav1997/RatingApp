import * as React from 'react';
import { View, Dimensions, SafeAreaView, StatusBar, Text, TouchableOpacity, Image } from 'react-native';
import Header from '../components/Header';
import NavIcon from '../components/NavIcon';
import HeaderTitle from '../components/HeaderTitle';
import ListCheck from '../components/ListCheck';
import SearchBlock from '../components/SearchBlock';
import Modal from 'react-native-modal';
import { ScrollView } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');

export default class CheckList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isDrawerVisible: false,
		};
	}
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
					center={<HeaderTitle title="Чеки" />}
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
							justifyContent: 'flex-start',
							paddingTop: 25,
							padding: 15,
							marginBottom: 50,
						}}
					>
						<View style={{ marginLeft: 15, marginRight: 15 }}>
							<SearchBlock
								title="Поиск по телефону и имени"
								filters={require('../assets/icons/filters.png')}
								onPress={() => this.props.navigation.navigate('Filters')}
							/>
						</View>
						<View style={{ marginLeft: 15, marginRight: 15, marginBottom: -20 }}>
							<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
								<View style={{ flexDirection: 'row' }}>
									<View
										style={{
											width: 'auto',
											height: 'auto',
											backgroundColor: '#5227D0',
											paddingVertical: 5,
											paddingHorizontal: 15,
											borderRadius: 15,
											marginRight: 5,
										}}
									>
										<Text style={{ textAlign: 'center', fontSize: 15, color: '#fff' }}>Все</Text>
									</View>
									<View
										style={{
											width: 'auto',
											height: 'auto',
											backgroundColor: '#fff',
											borderColor: '#5227D0',
											borderWidth: 1,
											paddingVertical: 5,
											paddingHorizontal: 15,
											borderRadius: 15,
											marginRight: 5,
										}}
									>
										<Text style={{ textAlign: 'center', fontSize: 15, color: '#5227D0' }}>
											Техника
										</Text>
									</View>
									<View
										style={{
											width: 'auto',
											height: 'auto',
											backgroundColor: '#fff',
											borderColor: '#5227D0',
											borderWidth: 1,
											paddingVertical: 5,
											paddingHorizontal: 15,
											borderRadius: 15,
											marginRight: 5,
										}}
									>
										<Text style={{ textAlign: 'center', fontSize: 15, color: '#5227D0' }}>
											Транспорт
										</Text>
									</View>
									<View
										style={{
											width: 'auto',
											height: 'auto',
											backgroundColor: '#fff',
											borderColor: '#5227D0',
											borderWidth: 1,
											paddingVertical: 5,
											paddingHorizontal: 15,
											borderRadius: 15,
											marginRight: 5,
										}}
									>
										<Text style={{ textAlign: 'center', fontSize: 15, color: '#5227D0' }}>
											Магазины
										</Text>
									</View>
								</View>
							</ScrollView>
						</View>
						<ListCheck
							title1="Flamp"
							subtitle1="121351 03.08.2020"
							image={require('../assets/icons/logo2.png')}
							mark={
								<Text
									style={{
										top: 5,
										fontSize: 13,
										fontWeight: 'bold',
										alignSelf: 'flex-end',
										color: '#B5BBC9',
									}}
								>
									Обработка
								</Text>
							}
							onPress={() => {
								this.props.navigation.navigate('Check');
							}}
						/>
						<View style={{ marginBottom: -20 }} />
						<ListCheck
							title1="Flamp"
							subtitle1="121351 03.08.2020"
							image={require('../assets/icons/logo2.png')}
							mark={
								<Text
									style={{
										top: 5,
										fontSize: 13,
										fontWeight: 'bold',
										alignSelf: 'flex-end',
										color: '#5227D0',
									}}
								>
									Ожидание
								</Text>
							}
							onPress={() => {
								this.props.navigation.navigate('Check');
							}}
						/>
						<View style={{ marginBottom: -20 }} />
						<ListCheck
							title1="Flamp"
							subtitle1="121351 03.08.2020"
							image={require('../assets/icons/logo2.png')}
							mark={
								<Text
									style={{
										top: 5,
										fontSize: 13,
										fontWeight: 'bold',
										alignSelf: 'flex-end',
										color: '#FF4D5B',
										textAlign: 'center',
									}}
								>
									Отказ
								</Text>
							}
						/>
						<View style={{ marginBottom: -20 }} />
						<ListCheck
							title1="Flamp"
							subtitle1="121351 03.08.2020"
							image={require('../assets/icons/logo2.png')}
							mark={
								<View
									style={{
										backgroundColor: '#EDF1F9',
										borderRadius: 13,
										width: 'auto',
										height: 32,
										top: 10,
										paddingHorizontal: 10,
										alignSelf: 'flex-end',
									}}
								>
									<Text
										style={{
											top: 5,
											fontSize: 13,
											fontWeight: 'bold',
											color: '#1CB703',
											textAlign: 'center',
										}}
									>
										+10
									</Text>
								</View>
							}
						/>
						<View style={{ marginBottom: -20 }} />
						<ListCheck
							title1="Flamp"
							subtitle1="121351 03.08.2020"
							image={require('../assets/icons/logo2.png')}
							mark={
								<View
									style={{
										backgroundColor: '#EDF1F9',
										borderRadius: 13,
										width: 'auto',
										height: 32,
										top: 10,
										paddingHorizontal: 10,
										alignSelf: 'flex-end',
									}}
								>
									<Text
										style={{
											top: 5,
											fontSize: 13,
											fontWeight: 'bold',
											color: '#1CB703',
											textAlign: 'center',
										}}
									>
										+10
									</Text>
								</View>
							}
						/>
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
										style={{ width: 17, height: 19, tintColor: '#CBD0DB' }}
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
								onPress={() => {
									this.props.navigation.navigate('Search');
									this.hideDrawer();
								}}
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
								onPress={() => {
									this.props.navigation.navigate('MyCompany');
									this.hideDrawer();
								}}
							>
								<View style={{ flex: 1 }}>
									<Image
										source={require('../assets/icons/companies.png')}
										style={{ width: 22, height: 22, tintColor: '#5227D0' }}
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
								onPress={() => {
									this.props.navigation.navigate('MainPage');
									this.hideDrawer();
								}}
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
								onPress={() => {
									this.props.navigation.navigate('SignInShop');
									this.hideDrawer();
								}}
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
