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
						<View style={{ flex: 6, alignItems: 'center', justifyContent: 'flex-end' }}>
							<HeaderTitle title="Забыли пароль?" />
						</View>
						<TouchableOpacity style={{ flex: 1, alignItems: 'flex-end' }}></TouchableOpacity>
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
