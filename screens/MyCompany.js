import * as React from 'react';
import { View, Dimensions, SafeAreaView, StatusBar, ScrollView, Text, TouchableOpacity, Image } from 'react-native';
import Header from '../components/Header';
import NavIcon from '../components/NavIcon';
import ListBlock from '../components/ListBlock';
import AllCompanies from '../components/AllCompanies';
import SearchBlock from '../components/SearchBlock';
import HeaderTitle from '../components/HeaderTitle';
import Modal from 'react-native-modal';

const { width, height } = Dimensions.get('window');

export default class MyCompany extends React.Component {
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
				<SafeAreaView>
					<View
						style={{
							flexDirection: 'row',
							width: width,
							paddingHorizontal: 15,
							justifyContent: 'center',
							marginBottom: 20,
							marginTop: 50,
						}}
					>
						<TouchableOpacity style={{ flex: 1, alignItems: 'flex-start' }}></TouchableOpacity>
						<View style={{ flex: 6, alignItems: 'center', justifyContent: 'flex-end' }}>
							<HeaderTitle title="Мои компании" />
						</View>
						<TouchableOpacity style={{ flex: 1, alignItems: 'flex-end' }} onPress={this.hideDrawer}>
							<NavIcon />
						</TouchableOpacity>
					</View>
				</SafeAreaView>
				<SafeAreaView>
					<View
						style={{
							backgroundColor: '#FFFFFF',
							flex: 1,
							width: width,
							height: height,
							borderTopLeftRadius: 20,
							borderTopRightRadius: 20,
							justifyContent: 'flex-end',
						}}
					>
						<ScrollView style={{ padding: 20 }}>
							<SearchBlock
								title="Поиск по телефону и названию"
								filters={require('../assets/icons/filters.png')}
								onPress={() => this.props.navigation.navigate('Filters')}
							/>
							<AllCompanies
								title1="Все компании"
								subtitle1="У нас в приложении вы можете найти более 5000 компаний"
								image={require('../assets/icons/companies1.png')}
								onPress={() => this.props.navigation.navigate('ProfileCompany1')}
							/>
							<ListBlock
								title="Собственные контакты"
								title1="UKnow"
								subtitle1="Мобильное приложение"
								mark="3.0"
								image={require('../assets/icons/avatar.png')}
								color="#F2C525"
								onPress={() => this.props.navigation.navigate('ReviewVoice')}
							/>
							<View style={{ marginBottom: -20 }} />
							<ListBlock
								title1="Flamp"
								subtitle1="Мобильное приложение"
								mark="4.7"
								image={require('../assets/icons/logo2.png')}
								color="#1CB703"
								onPress={() => this.props.navigation.navigate('ReviewCompany')}
							/>
							<View style={{ marginBottom: -20 }} />
							<ListBlock
								title1="Pizza Hut"
								subtitle1="Мобильное приложение"
								mark="2.0"
								image={require('../assets/icons/logo1.png')}
								color="#F64A57"
								onPress={() => this.props.navigation.navigate('ReviewCompany')}
							/>
							<View style={{ marginBottom: 20 }} />
							<ListBlock
								title="Констакты друзей"
								title1="UKnow"
								subtitle1="Мобильное приложение"
								mark="3.0"
								image={require('../assets/icons/avatar.png')}
								color="#F2C525"
							/>
							<View style={{ marginBottom: -20 }} />
							<ListBlock
								title1="Flamp"
								subtitle1="Мобильное приложение"
								mark="4.7"
								image={require('../assets/icons/logo2.png')}
								color="#1CB703"
							/>
							<View style={{ marginBottom: -20 }} />
							<ListBlock
								title1="Pizza Hut"
								subtitle1="Мобильное приложение"
								mark="2.0"
								image={require('../assets/icons/logo1.png')}
								color="#F64A57"
							/>
							<View style={{ marginBottom: 100 }} />
						</ScrollView>
					</View>
					<Modal
						isVisible={this.state.isDrawerVisible}
						onBackdropPress={this.hideDrawer}
						style={{
							height: height,
							width: width / 1.5,
							marginTop: 0,
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
