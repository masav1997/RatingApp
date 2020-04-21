import * as React from 'react';
import { View, Dimensions, SafeAreaView, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Input from '../../components/Input';
import SubTitle from '../../components/SubTitle';
import HeaderTitle from '../../components/HeaderTitle';
import BackIcon from '../../components/BackIcon';

const { width, height } = Dimensions.get('window');

export default class ForgotPassword extends React.Component {
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
					center={<HeaderTitle title="Забыли пароль?" />}
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
							<SubTitle subtitle="На вашу почту будет выслан код для восстановление пароля" />
							<Input label="Эл.почта" placeholder="Почта" />
							<Button buttonTitle="Далее" onPress={() => this.props.navigation.navigate('Code')} />
						</ScrollView>
					</View>
				</SafeAreaView>
			</View>
		);
	}
}
