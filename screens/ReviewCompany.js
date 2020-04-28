import * as React from 'react';
import { View, Dimensions, SafeAreaView, StatusBar, ScrollView, Text, TouchableOpacity, Image } from 'react-native';
import Header from '../components/Header';
import NavIcon from '../components/NavIcon';
import BackIcon from '../components/BackIcon';
import Button from '../components/Button';
import ListBlock from '../components/ListBlock';
import RowBlock from '../components/RowBlock';
import Modal from 'react-native-modal';
import ModalTitle from '../components/ModalTitle';
import MarkCircle from '../components/MarkCircle';
import Input from '../components/Input';

const { width, height } = Dimensions.get('window');

export default class ReviewCompany extends React.Component {
	state = {
		isDrawerVisible: false,
		isModalVisible: false,
		bool: false,
	};
	hideDrawer = () => {
		this.setState({ isDrawerVisible: !this.state.isDrawerVisible });
	};
	toggleModal = () => {
		this.setState({ isModalVisible: !this.state.isModalVisible });
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
						<TouchableOpacity
							style={{ flex: 1, alignItems: 'flex-start' }}
							onPress={() => this.props.navigation.goBack()}
						>
							<BackIcon />
						</TouchableOpacity>
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
						<Image
							source={require('../assets/icons/avatar.png')}
							style={{ width: 57, height: 57, alignSelf: 'center', bottom: 25 }}
						></Image>
						<Text style={{ textAlign: 'center', fontSize: 16, fontWeight: '700', bottom: 10 }}>UKnow</Text>
						<Text style={{ textAlign: 'center', fontSize: 16, bottom: 10, color: '#B5BBC9' }}>
							Мобильное приложение
						</Text>
						<ScrollView style={{ padding: 20, paddingTop: 0 }}>
							<RowBlock
								row1="Рейтинг"
								row2="4.7 из 5.0"
								row3="Сайт"
								row4="pizzahut.com"
								row5="Отзывов"
								row6="256"
								color="#5227D0"
							/>
							<View
								style={{
									height: 'auto',
									borderBottomColor: '#CFD2D8',
									borderBottomWidth: 1,
									paddingBottom: 20,
									marginLeft: 10,
									marginRight: 10,
									marginTop: -20,
								}}
							>
								<View style={{ marginBottom: -20 }} />
								<ListBlock
									title1="Ada Perry"
									subtitle1="445-120-4592"
									mark="4.0"
									image={require('../assets/icons/avatar2.png')}
									color="#1CB703"
									onPress={() => this.props.navigation.navigate('Profile1')}
								/>
							</View>
							<View style={{ paddingLeft: 10, paddingRight: 10 }}>
								<View style={{ marginBottom: -20 }} />
								<ListBlock
									title1="Flamp"
									subtitle1="184 отзыва"
									mark="4.7"
									image={require('../assets/icons/logo2.png')}
									color="#1CB703"
									voice={require('../assets/icons/voice.png')}
								/>
								<View style={{ marginBottom: -20 }} />
								<ListBlock
									title1="Flamp"
									subtitle1="184 отзыва"
									mark="4.7"
									image={require('../assets/icons/logo2.png')}
									color="#1CB703"
								/>
								<View style={{ marginBottom: -20 }} />
								<ListBlock
									title1="Ada Perry"
									subtitle1="445-120-4592"
									mark="4.0"
									image={require('../assets/icons/avatar2.png')}
									color="#1CB703"
								/>
								<View style={{ marginBottom: -20 }} />
								<ListBlock
									title1="Flamp"
									subtitle1="184 отзыва"
									mark="4.7"
									image={require('../assets/icons/logo2.png')}
									color="#1CB703"
									voice={require('../assets/icons/voice.png')}
								/>
								<View style={{ marginBottom: -20 }} />
								<ListBlock
									title1="Flamp"
									subtitle1="184 отзыва"
									mark="4.7"
									image={require('../assets/icons/logo2.png')}
									color="#1CB703"
								/>
								<View style={{ marginBottom: -20 }} />
								<ListBlock
									title1="Ada Perry"
									subtitle1="445-120-4592"
									mark="4.0"
									image={require('../assets/icons/avatar2.png')}
									color="#1CB703"
								/>
								<View style={{ marginBottom: -20 }} />
								<ListBlock
									title1="Flamp"
									subtitle1="184 отзыва"
									mark="4.7"
									image={require('../assets/icons/logo2.png')}
									color="#1CB703"
									voice={require('../assets/icons/voice.png')}
								/>
								<View style={{ marginBottom: -20 }} />
								<ListBlock
									title1="Flamp"
									subtitle1="184 отзыва"
									mark="4.7"
									image={require('../assets/icons/logo2.png')}
									color="#1CB703"
								/>
								<View style={{ marginBottom: -20 }} />
								<ListBlock
									title1="Ada Perry"
									subtitle1="445-120-4592"
									mark="4.0"
									image={require('../assets/icons/avatar2.png')}
									color="#1CB703"
								/>
							</View>
						</ScrollView>
						<View style={{ flexDirection: 'row', position: 'absolute', paddingHorizontal: 15 }}>
							<View style={{ flex: 5, marginRight: 5 }}></View>
							<View style={{ flex: 1 }}>
								<View
									style={{
										backgroundColor: '#5227D0',
										borderRadius: 12,
										width: '100%',
										height: 50,
										alignSelf: 'center',
										marginBottom: 20,
										marginTop: -120,
									}}
								>
									<TouchableOpacity
										style={{
											width: '100%',
											height: '100%',
											display: 'flex',
											justifyContent: 'center',
											alignItems: 'center',
										}}
									>
										<Image
											source={require('../assets/icons/qr.png')}
											style={{ width: 18, height: 18, alignSelf: 'center' }}
										></Image>
									</TouchableOpacity>
								</View>
							</View>
						</View>
					</View>
				</SafeAreaView>
				<Modal
					isVisible={this.state.isModalVisible}
					style={{
						width: width,
						height: 'auto',
						backgroundColor: '#FFF',
						borderTopLeftRadius: 20,
						borderTopRightRadius: 20,
						marginLeft: 0,
						marginRight: 0,
						marginBottom: 0,
						marginTop: width / 2.5,
						textAlign: 'left',
					}}
				>
					<ModalTitle title="Оставьте отзыв" />
					<ScrollView style={{ padding: 20 }}>
						<View style={{ flexDirection: 'row', marginBottom: 20 }}>
							<MarkCircle mark="1.0" />
							<MarkCircle mark="2.0" />
							<MarkCircle mark="3.0" />
							<MarkCircle mark="4.0" />
							<MarkCircle mark="5.0" />
						</View>
						<Input
							placeholder="Текст вашего отзыва"
							icon={
								<TouchableOpacity onPress={this.toggleModal}>
									<Image
										source={require('../assets/icons/mic.png')}
										style={{ width: 15, height: 20 }}
									/>
								</TouchableOpacity>
							}
						/>
					</ScrollView>
					<View style={{ marginBottom: -30 }}></View>
					<Button buttonTitle="Оставить" onPress={this.toggleModal} />
				</Modal>
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
								<Image source={require('../assets/icons/exit.png')} style={{ width: 20, height: 23 }} />
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
			</View>
		);
	}
}
