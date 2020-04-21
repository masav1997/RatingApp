import * as React from 'react';
import { View, Dimensions, SafeAreaView, StatusBar, ScrollView, TouchableOpacity, Image } from 'react-native';
import Header from '../../components/Header';
import Button from '../../components/Button';
import ViewIcon from '../../components/ViewIcon';
import Input from '../../components/Input';
import SubTitle from '../../components/SubTitle';
import HeaderTitle from '../../components/HeaderTitle';
import BackIcon from '../../components/BackIcon';

const { width, height } = Dimensions.get('window');

export default class CreatePassword extends React.Component {
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
					alignItems: 'center',
				}}
			>
				<StatusBar barStyle="light-content" />
				<Header
					center={<HeaderTitle title="Новый пароль" />}
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
							<SubTitle subtitle="Введите новый пароль. Он должен отличаться от того, что был ранее" />
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
							<Button
								buttonTitle="Сохранить"
								onPress={() => this.props.navigation.navigate('MainPage')}
							/>
						</ScrollView>
					</View>
				</SafeAreaView>
			</View>
		);
	}
}
