import * as React from 'react';
import { StatusBar, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignInShop from './screens/Authorization/SignIn/SignInShop';
import SignUpShop from './screens/Authorization/SignUp/SignUpShop';
import SignUpUser from './screens/Authorization/SignUp/SignUpUser';
import ForgotPassword from './screens/Authorization/ForgotPassword';
import CreatePassword from './screens/Authorization/CreatePassword';
import MainPage from './screens/Settings/MainPage';
import About from './screens/Settings/About';
import Code from './screens/Authorization/Code';
import Check from './screens/Check';
import Profile from './screens/Profile';
import Profile1 from './screens/Profile1';
import ProfileCompany from './screens/ProfileCompany';
import ProfileCompany1 from './screens/ProfileCompany1';
import MyCompany from './screens/MyCompany';
import Filters from './screens/Filters';
import Messages from './screens/Messages';
import Contacts from './screens/Contacts';
import ReviewVoice from './screens/ReviewVoice';
import Scan from './screens/Scan';
import EditProfile from './screens/EditProfile';
import Search from './screens/Search';
import ReviewCompany from './screens/ReviewCompany';
import CheckList from './screens/CheckList';
import Map from './screens/Map';
import SectionListModule from './components/ContactList/SectionListContacts/';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';

const images = [
	require('./assets/icons/avatar.png'),
	require('./assets/icons/avatar1.png'),
	require('./assets/icons/avatar3.png'),
	require('./assets/icons/avatar2.png'),
	require('./assets/icons/back.png'),
	require('./assets/icons/backColor.png'),
	require('./assets/icons/bg.png'),
	require('./assets/icons/call.png'),
	require('./assets/icons/chat.png'),
	require('./assets/icons/check1.png'),
	require('./assets/icons/check2.png'),
	require('./assets/icons/checks.png'),
	require('./assets/icons/companies.png'),
	require('./assets/icons/companies1.png'),
	require('./assets/icons/contacts.png'),
	require('./assets/icons/done.png'),
	require('./assets/icons/dots.png'),
	require('./assets/icons/down.png'),
	require('./assets/icons/edit.png'),
	require('./assets/icons/exit.png'),
	require('./assets/icons/eye.png'),
	require('./assets/icons/filters.png'),
	require('./assets/icons/find.png'),
	require('./assets/icons/forward.png'),
	require('./assets/icons/forward1.png'),
	require('./assets/icons/logo1.png'),
	require('./assets/icons/logo2.png'),
	require('./assets/icons/map.png'),
	require('./assets/icons/maps.png'),
	require('./assets/icons/mic.png'),
	require('./assets/icons/mic1.png'),
	require('./assets/icons/nav.png'),
	require('./assets/icons/note.png'),
	require('./assets/icons/play.png'),
	require('./assets/icons/plus.png'),
	require('./assets/icons/profile1.png'),
	require('./assets/icons/qr.png'),
	require('./assets/icons/search.png'),
	require('./assets/icons/send.png'),
	require('./assets/icons/settings.png'),
	require('./assets/icons/voice.png'),
];

export default class App extends React.Component {
	state = {
		isLoadingComplete: false,
	};

	handleResourcesAsync = async () => {
		const cacheImages = images.map((image) => {
			return Asset.fromModule(image).downloadAsync();
		});

		return Promise.all(cacheImages);
	};

	render() {
		if (!this.state.isLoadingComplete) {
			return (
				<AppLoading
					startAsync={this.handleResourcesAsync}
					onError={(error) => console.warn(error)}
					onFinish={() => this.setState({ isLoadingComplete: true })}
				/>
			);
		}
		return (
			<SafeAreaProvider>
				<NavigationContainer style={{ backgroundColor: '#5227D0' }}>
					<StatusBar barStyle="light-content" />
					<Stack.Navigator
						screenOptions={{
							headerShown: false,
						}}
					>
						<Stack.Screen name="SignInShop" component={SignInShop} />
						<Stack.Screen name="SignUpShop" component={SignUpShop} />
						<Stack.Screen name="SignUpUser" component={SignUpUser} />
						<Stack.Screen name="ForgotPassword" component={ForgotPassword} />
						<Stack.Screen name="CreatePassword" component={CreatePassword} />
						<Stack.Screen name="MainPage" component={MainPage} />
						<Stack.Screen name="About" component={About} />
						<Stack.Screen name="Code" component={Code} />
						<Stack.Screen name="Check" component={Check} />
						<Stack.Screen name="Profile1" component={Profile1} />
						<Stack.Screen name="ProfileCompany" component={ProfileCompany} />
						<Stack.Screen name="ProfileCompany1" component={ProfileCompany1} />
						<Stack.Screen name="MyCompany" component={MyCompany} />
						<Stack.Screen name="Filters" component={Filters} />
						<Stack.Screen name="Messages" component={Messages} />
						<Stack.Screen name="Contacts" component={Contacts} />
						<Stack.Screen name="ReviewVoice" component={ReviewVoice} />
						<Stack.Screen name="Search" component={Search} />
						<Stack.Screen name="ReviewCompany" component={ReviewCompany} />
						<Stack.Screen name="Map" component={Map} />
						<Stack.Screen name="SectionItem" component={SectionListModule} />
						<Stack.Screen name="CheckList">
							{() => (
								<Tab.Navigator
									screenOptions={({ route }) => ({
										tabBarIcon: ({ focused }) => {
											let iconName;
											let style;

											if (route.name === 'Scan') {
												iconName = focused
													? require('./assets/icons/qr.png')
													: require('./assets/icons/qr.png');
												style = focused
													? { width: 20, height: 20, bottom: 10, tintColor: '#5227D0' }
													: { width: 20, height: 20, bottom: 10, tintColor: '#B5BBC9' };
											} else if (route.name === 'CheckList') {
												iconName = focused
													? require('./assets/icons/checks.png')
													: require('./assets/icons/checks.png');
												style = focused
													? { width: 23, height: 20, bottom: 10, tintColor: '#5227D0' }
													: { width: 23, height: 20, bottom: 10, tintColor: '#B5BBC9' };
											} else if (route.name === 'EditProfile') {
												iconName = focused
													? require('./assets/icons/note.png')
													: require('./assets/icons/note.png');
												style = focused
													? { width: 15, height: 24, bottom: 10, tintColor: '#5227D0' }
													: { width: 15, height: 24, bottom: 10, tintColor: '#B5BBC9' };
											} else if (route.name === 'Profile') {
												iconName = focused
													? require('./assets/icons/profile1.png')
													: require('./assets/icons/profile1.png');
												style = focused
													? { width: 19, height: 20, bottom: 10, tintColor: '#5227D0' }
													: { width: 19, height: 20, bottom: 10, tintColor: '#B5BBC9' };
											}

											return <Image source={iconName} style={style} />;
										},
									})}
									tabBarOptions={{
										style: {
											borderTopLeftRadius: 20,
											borderTopRightRadius: 20,
											backgroundColor: '#FFFFFF',
											position: 'absolute',
											bottom: -1,
											padding: 15,
											height: 54,
											zIndex: 8,
											borderTopColor: '#FFFFFF',
											borderTopWidth: 0.3,
										},
										showLabel: false,
									}}
								>
									<Tab.Screen name="Scan" component={Scan} />
									<Tab.Screen name="CheckList" component={CheckList} />
									<Tab.Screen name="EditProfile" component={EditProfile} />
									<Tab.Screen name="Profile" component={Profile} />
								</Tab.Navigator>
							)}
						</Stack.Screen>
					</Stack.Navigator>
				</NavigationContainer>
			</SafeAreaProvider>
		);
	}
}
