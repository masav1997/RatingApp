import * as React from 'react';
import {
	View,
	Dimensions,
	SafeAreaView,
	StatusBar,
	ScrollView,
	Text,
	TouchableOpacity,
	ImageBackground,
} from 'react-native';
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

export default class Map extends React.Component {
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
							<HeaderTitle title="Карта" />
						</View>
						<TouchableOpacity
							style={{ flex: 1, alignItems: 'flex-end' }}
						></TouchableOpacity>
					</View>
				</SafeAreaView>
				<SafeAreaView>
					<ImageBackground
						resizeMode={'cover'}
						style={{
							height: '100%',
							width: width,
							alignItems: 'center',
						}}
						source={require('../assets/icons/maps.png')}
						imageStyle={{
							flex: 1,
							width: width,
							height: height,
							borderTopLeftRadius: 20,
							borderTopRightRadius: 20,
							justifyContent: 'flex-end',
						}}
					></ImageBackground>
				</SafeAreaView>
			</View>
		);
	}
}
