import * as React from 'react';
import { View, Dimensions, SafeAreaView, StatusBar, ScrollView, Text, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import Multislider from '../components/Multislider';
import BackIcon from '../components/BackIcon';
import SearchBlock from '../components/SearchBlock';
import HeaderTitle from '../components/HeaderTitle';
import RadioList from '../components/RadioList';
import Button from '../components/Button';


const { width, height } = Dimensions.get('window');

const PROP = [
	{
		key: 'app',
		text: 'Мобильное приложение',
	},
	{
		key: 'category1',
		text: 'Категория1',
	},
	{
		key: 'category2',
		text: 'Категория2',
	},
	{
		key: 'category3',
		text: 'Категория3',
	},
	{
		key: 'category4',
		text: 'Категория4',
	},
	{
		key: 'category5',
		text: 'Категория5',
	},
	{
		key: 'category6',
		text: 'Категория6',
	},
	{
		key: 'category7',
		text: 'Категория7',
	},
];

export default class Filters extends React.Component {
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
				<Header
					right={<Text style={{paddingRight:20, fontSize:11, color: '#FFF'}}>Очистить</Text>}
					center={<HeaderTitle title="Мои компании" />}
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
							<Multislider title="Средняя оценка в каталогах"/>
							<Multislider title="Средняя оценка на сервисе"/>
							<RadioList PROP={PROP} title="Категория" />
							<View style={{marginBottom:-40}}/>
							<Button buttonTitle="Показать: 35"/>
							<View style={{marginBottom:80}}/>
						</ScrollView>
					</View>
				</SafeAreaView>
			</View>
		);
	}
}
