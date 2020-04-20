import * as React from 'react';
import { View, Dimensions, SafeAreaView, StatusBar, ScrollView, Text, TouchableOpacity, Image } from 'react-native';
import Header from '../../../components/Header';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Title from '../../../components/Title';
import HeaderTitle from '../../../components/HeaderTitle';
import ViewIcon from '../../../components/ViewIcon';
const { width, height } = Dimensions.get('window');

export default class SignInShop extends React.Component {
	state = {
		press: false,
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
				<Header
					center={
						<View style={{ marginBottom: 10 }}>
							<HeaderTitle title="Авторизация" />
						</View>
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
							<Input label="Эл.почта" placeholder="Почта" />
							<Input
								placeholder="Пароль"
								icon={<ViewIcon onPress={() => this.setState({ press: !this.state.press })} />}
								secureTextEntry={this.state.press ? false : true}
							/>
							<TouchableOpacity onPress={() => this.props.navigation.navigate('ForgotPassword')}>
								<Text
									style={{
										fontStyle: 'normal',
										fontSize: 13,
										lineHeight: 20,
										textAlign: 'right',
										fontWeight: '500',
										color: '#5227D0',
										marginTop: -10,
									}}
								>
									Забыли пароль?
								</Text>
							</TouchableOpacity>
							<Button buttonTitle="Войти" onPress={() => this.props.navigation.navigate('Contacts')} />
							<Title
								subtitle="Ещё нет аккаунта?"
								linkTitle=" Зарегистрироваться."
								onPress={() => this.props.navigation.navigate('SignUpShop')}
							/>
						</ScrollView>
					</View>
				</SafeAreaView>
			</View>
		);
	}
}
