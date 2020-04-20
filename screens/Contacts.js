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
import HeaderTitle from '../components/HeaderTitle';
import SectionListModule from '../components/ContactList/SectionListContacts';
import SearchBlock from '../components/SearchBlock';
import Modal from 'react-native-modal';

const { width, height } = Dimensions.get('window');

export default class Contacts extends React.Component {
	constructor(props) {
		super(props);
		let nameData = [
			{ name: 'Ada Perry', avatar: require('../assets/icons/avatar2.png'), count: '184 отзыва' },
			{ name: 'Lenita Dapolito', avatar: require('../assets/icons/avatar1.png'), count: '184 отзыва' },
			{ name: 'Nathanial Hyslop', avatar: require('../assets/icons/avatar3.png'), count: '184 отзыва' },
			{ name: 'Genoveva Dople', avatar: require('../assets/icons/avatar2.png'), count: '184 отзыва' },
			{ name: 'Margarett Luc', avatar: require('../assets/icons/avatar3.png'), count: '184 отзыва' },
			{ name: 'Shelly Cavalieri', avatar: require('../assets/icons/avatar2.png'), count: '184 отзыва' },
			{ name: 'Eduardo Eliason', avatar: require('../assets/icons/avatar2.png'), count: '184 отзыва' },
			{ name: 'Eddie Basil', avatar: require('../assets/icons/avatar1.png'), count: '184 отзыва' },
			{ name: 'Carry Farkas', avatar: require('../assets/icons/avatar.png'), count: '184 отзыва' },
			{ name: 'Karine Mestayer', avatar: require('../assets/icons/avatar2.png'), count: '184 отзыва' },
			{ name: 'Rene Points', avatar: require('../assets/icons/avatar2.png'), count: '184 отзыва' },
			{ name: 'Sierra Christain', avatar: require('../assets/icons/avatar2.png'), count: '184 отзыва' },
			{ name: 'Sonya Deloach', avatar: require('../assets/icons/avatar3.png'), count: '184 отзыва' },
			{ name: 'Alysia Vasques', avatar: require('../assets/icons/avatar2.png'), count: '184 отзыва' },
			{ name: 'Angie Meyerson', avatar: require('../assets/icons/avatar1.png'), count: '184 отзыва' },
			{ name: 'Lucien Besaw', avatar: require('../assets/icons/avatar2.png'), count: '184 отзыва' },
			{ name: 'Emmitt Damewood', avatar: require('../assets/icons/avatar2.png'), count: '184 отзыва' },
			{ name: 'Marget Bennette', avatar: require('../assets/icons/avatar.png'), count: '184 отзыва' },
			{ name: 'Ossie Oakley', avatar: require('../assets/icons/avatar2.png'), count: '184 отзыва' },
			{ name: 'Barry Radford', avatar: require('../assets/icons/avatar2.png'), count: '184 отзыва' },
		];

		this.state = {
			dataArray: nameData,
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
					center={<HeaderTitle title="Контакты" />}
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
							paddingTop: 25,
							padding: 15,
							marginBottom: 50,
						}}
					>
						<View style={{marginLeft:15, marginRight:15}}>
						<SearchBlock
							title="Поиск по телефону и имени"
							filters={require('../assets/icons/filters.png')}
							
						/>
						</View>
						<SectionListModule
							ref={(s) => (this.sectionList = s)}
							sectionListData={this.state.dataArray}
							sectionHeight={50}
							initialNumToRender={this.state.dataArray.length}
							showsVerticalScrollIndicator={false}
							SectionListClickCallback={(item, index) => {
								console.log('---SectionListClickCallback--:', item, index);
							}}
							sectionHeaderTextStyle={{ color: '#9EA5B1', fontWeight: 'normal' }}
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
								onPress={() => {
									this.props.navigation.navigate('Filters');
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
								onPress={() => {
									this.props.navigation.navigate('Settings');
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
