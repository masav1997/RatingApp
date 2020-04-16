import * as React from 'react';
import { View, Dimensions, SafeAreaView, StatusBar, ScrollView, Text, TouchableOpacity, Image } from 'react-native';
import Header from '../../../components/Header';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Title from '../../../components/Title';
import HeaderTitle from '../../../components/HeaderTitle';
import ViewIcon from '../../../components/ViewIcon';
const { width, height } = Dimensions.get('window');

export default class SignUpShop extends React.Component {
	state = {
		press: false,
		press1: false,
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
				<Header center={<HeaderTitle title="Регистрация" />} />
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
							<Input
								placeholder="Повторите пароль"
								icon={<ViewIcon onPress={() => this.setState({ press1: !this.state.press1 })} />}
								secureTextEntry={this.state.press1 ? false : true}
							/>
							<Button buttonTitle="Зарегистрироваться"/>
							<Title
									title="Регистрация"
									subtitle="Уже есть аккаунт?"
									linkTitle=" Авторизироваться."
									onPress={() => this.props.navigation.navigate('SignInShop')}
								/>
						</ScrollView>
					</View>
				</SafeAreaView>
			</View>
		);
	}
}