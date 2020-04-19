import * as React from 'react';
import { View, Dimensions, SafeAreaView, StatusBar, ScrollView, Text, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import Multislider from '../components/Multislider';
import BackIcon from '../components/BackIcon';
import ListBlock from '../components/ListBlock';
import AllCompanies from '../components/AllCompanies';
import SearchBlock from '../components/SearchBlock';
import HeaderTitle from '../components/HeaderTitle';

const { width, height } = Dimensions.get('window');

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
						<TouchableOpacity onPress={() => this.props.navigation.goBack()}>
							<View style={{ width: 60, height: 40, bottom: 10, paddingLeft: 20 }}>
								<BackIcon />
							</View>
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
							<SearchBlock
								title="Поиск по телефону и названию"
								filters={require('../assets/icons/filters.png')}
							/>
							<Multislider title="Средняя оценка в каталогах"/>
							<Multislider title="Средняя оценка на сервисе"/>
						</ScrollView>
					</View>
				</SafeAreaView>
			</View>
		);
	}
}
