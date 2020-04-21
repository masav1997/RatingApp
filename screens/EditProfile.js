import * as React from 'react';
import { View, Dimensions, SafeAreaView, StatusBar, ScrollView, TouchableOpacity, Text, Image } from 'react-native';
import Header from '../components/Header';
import Button from '../components/Button';
import Input from '../components/Input';
import Choose from '../components/Choose';
import HeaderTitle from '../components/HeaderTitle';
import BackIcon from '../components/BackIcon';
import Modal from 'react-native-modal';
import ModalTitle from '../components/ModalTitle';

const { width, height } = Dimensions.get('window');

export default class EditProfile extends React.Component {
	state = {
		isModalVisible: false,
		bool: false,
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
				<Header
					center={<HeaderTitle title="Основные данные" />}
					left={
						<TouchableOpacity style={{ width: 100, height: 50, bottom: 10, paddingLeft: 20, }} onPress={() => this.props.navigation.goBack()}>
								<BackIcon onPress={() => this.props.navigation.goBack()}/>
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
						<ScrollView style={{ padding: 20 }}>
							<Text
								style={{
									fontSize: 13,
									color: '#A7ADBA',
									textAlign: 'left',
									fontWeight: '600',
									marginBottom: 5,
								}}
							>
								Логотип
							</Text>
							<View style={{ flexDirection: 'row', marginBottom: 20 }}>
								<View style={{ flex: 1 }}>
									<Image
										source={require('../assets/icons/avatar1.png')}
										style={{ width: 48, height: 48 }}
									/>
								</View>
								<View style={{ flex: 3, alignSelf: 'center' }}>
									<Text
										style={{
											fontSize: 16,
											color: '#0D1F3C',
											textAlign: 'left',
											marginLeft: 10,
										}}
									>
										Filename.jpg
									</Text>
								</View>
								<View style={{ flex: 3, alignSelf: 'center' }}>
									<Text
										style={{
											fontSize: 15,
											color: '#FF4D5B',
											textAlign: 'right',
										}}
									>
										удалить аватар
									</Text>
								</View>
							</View>
							<Input label="Номер телефона" placeholder="Номера телефона" />
							<Input placeholder="Название магазина" />
							<Input placeholder="Сайт" />
							<Input
								placeholder="Категория"
								icon={
									<TouchableOpacity onPress={this.toggleModal}>
										<Image
											source={require('../assets/icons/down.png')}
											style={{ width: 20, height: 20 }}
										/>
									</TouchableOpacity>
								}
							/>
							<Input
								placeholder="Точки продаж"
								icon={
									<TouchableOpacity>
										<Image
											source={require('../assets/icons/map.png')}
											style={{ width: 16.5, height: 16 }}
										/>
									</TouchableOpacity>
								}
							/>
							<Button buttonTitle="Далее" onPress={() => this.props.navigation.navigate('Code')} />
						</ScrollView>
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
					<ModalTitle title="Категория" />
					<ScrollView style={{ padding: 20 }}>
						<Choose title="Мобильное приложение" />
						<Choose title="Автомобили" />
						<Choose title="Фаст-фуд" />
						<Choose title="Кафе" />
						<Choose title="Кинотеатр" />
						<Choose title="Банк" />
						<Choose title="Мобильное приложение" />
						<Choose title="Автомобили" />
						<Choose title="Фаст-фуд" />
						<Choose title="Кафе" />
						<Choose title="Кинотеатр" />
						<Choose title="Банк" />
					</ScrollView>
					<View style={{marginBottom:-30}}></View>
					<Button buttonTitle="Сохранить" onPress={this.toggleModal}/>
				</Modal>
			</View>
		);
	}
}
