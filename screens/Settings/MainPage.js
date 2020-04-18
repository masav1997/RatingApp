import * as React from 'react';
import { View, Dimensions, SafeAreaView, StatusBar, ScrollView, Text, TouchableOpacity, Image } from 'react-native';
import Header from '../../components/Header';
import Block from '../../components/Block';
import HeaderTitle from '../../components/HeaderTitle';
import NavIcon from '../../components/NavIcon';
import Modal from 'react-native-modal';
import Input from '../../components/Input';
import ModalTitle from '../../components/ModalTitle';
import Button from '../../components/Button';
import ViewIcon from '../../components/ViewIcon';

const { width, height } = Dimensions.get('window');

export default class MainPage extends React.Component {
	state = {
		press: false,
		press1: false,
		isModalVisible: false,
		isModalVisible1: false,
		isModalVisible2: false,
		isModalVisible3: false,
	};

	toggleModal = () => {
		this.setState({ isModalVisible: !this.state.isModalVisible });
	};
	toggleModal1 = () => {
		this.setState({ isModalVisible1: !this.state.isModalVisible1 });
	};
	toggleModal2 = () => {
		this.setState({ isModalVisible2: !this.state.isModalVisible2, isModalVisible1: !this.state.isModalVisible1 });
	};
	toggleModal3 = () => {
		this.setState({ isModalVisible2: !this.state.isModalVisible2, isModalVisible3: !this.state.isModalVisible3 });
	};
	toggleModal4 = () => {
		this.setState({ isModalVisible3: !this.state.isModalVisible3 });
	};

	render() {
		return (
			<View
				style={{
					backgroundColor: '#5227D0',
					height: '100%',
					width: width,
					paddingLeft: 20,
					paddingRight: 20,
					alignItems: 'center',
				}}
			>
				<StatusBar barStyle="light-content" />
				<Header center={<HeaderTitle title="Настройки" />} right={<NavIcon onPress={() => this.props.navigation.navigate('Check')}/>} />
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
							<Block title="Данные профиля" onPress={this.toggleModal} />
							<Block title="Смена пароля" onPress={this.toggleModal1} />
							<Block title="О приложении" onPress={() => this.props.navigation.navigate('Check')} />
						</ScrollView>
					</View>
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
						<ModalTitle title="Данные профиля" />
						<ScrollView style={{ padding: 20 }}>
							<Input label="Имя" placeholder="Введите имя" />
							<Input label="Фамилия" placeholder="Введите фамилию" />
							<Button buttonTitle="Сохранить" onPress={this.toggleModal} />
						</ScrollView>
					</Modal>
					<Modal
						isVisible={this.state.isModalVisible1}
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
						<ModalTitle title="Смена пароля" />
						<ScrollView style={{ padding: 20 }}>
							<Text style={{ fontSize: 13, textAlign: 'center', color: '#0D1F3C', marginBottom: 20 }}>
								На вашу почту будет выслан код для восстановление пароля
							</Text>
							<Input label="Эл.почта" placeholder="Введите адрес почты" />
							<Button buttonTitle="Далее" onPress={this.toggleModal2} />
						</ScrollView>
					</Modal>
					<Modal
						isVisible={this.state.isModalVisible3}
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
						<View style={{ flexDirection: 'row' }}>
							<View style={{ flex: 1 }}>
								<TouchableOpacity style={{ width: 20, height: 20, marginTop: 20, marginLeft: 15 }}>
									<Image
										source={require('../../assets/icons/backColor.png')}
										style={{ width: 20, height: 20 }}
									></Image>
								</TouchableOpacity>
							</View>
							<View style={{ flex: 30 }}>
								<ModalTitle title="Новый пароль" />
							</View>
						</View>
						<ScrollView style={{ padding: 20 }}>
							<Text style={{ fontSize: 13, textAlign: 'center', color: '#0D1F3C', marginBottom: 20 }}>
								Введите новый пароль. Он должен отличаться от того, что был ранее
							</Text>
							<Input
								placeholder="Пароль"
								icon={<ViewIcon onPress={() => this.setState({ press: !this.state.press })} />}
								secureTextEntry={this.state.press ? false : true}
							/>
							<Input
								placeholder="Повторите пароль"
								icon={<ViewIcon onPress={() => this.setState({ press1: !this.state.press1 })} />}
								secureTextEntry={this.state.press1 ? false : true}
							/>
							<Button buttonTitle="Сохранить" onPress={this.toggleModal4} />
						</ScrollView>
					</Modal>
					<Modal
						isVisible={this.state.isModalVisible2}
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
						<View style={{ flexDirection: 'row' }}>
							<View style={{ flex: 1 }}>
								<TouchableOpacity style={{ width: 20, height: 20, marginTop: 20, marginLeft: 15 }}>
									<Image
										source={require('../../assets/icons/backColor.png')}
										style={{ width: 20, height: 20 }}
									></Image>
								</TouchableOpacity>
							</View>
							<View style={{ flex: 30 }}>
								<ModalTitle title="Код подтверждения" />
							</View>
						</View>
						<ScrollView style={{ padding: 20 }}>
							<Text style={{ fontSize: 13, textAlign: 'center', color: '#0D1F3C', marginBottom: 20 }}>
								На вашу почту{' '}
								<Text
									style={{
										fontSize: 13,
										textAlign: 'center',
										color: '#0D1F3C',
										marginBottom: 20,
										fontWeight: '700',
									}}
								>
									newuser@gmail.com
								</Text>{' '}
								был выслан пятизначный код. Введите его ниже
							</Text>
							<View style={{ width: width / 4, alignSelf: 'center' }}>
								<Input />
							</View>
							<Button buttonTitle="Далее" onPress={this.toggleModal3} />
						</ScrollView>
					</Modal>
				</SafeAreaView>
			</View>
		);
	}
}
