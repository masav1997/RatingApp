import * as React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInShop from './screens/Authorization/SignIn/SignInShop';
import SignUpShop from './screens/Authorization/SignUp/SignUpShop';
import ForgotPassword from './screens/Authorization/ForgotPassword';
import CreatePassword from './screens/Authorization/CreatePassword';
import MainPage from './screens/Settings/MainPage';
import About from './screens/Settings/About';
import Code from './screens/Authorization/Code';
import Check from './screens/Check';

const Stack = createStackNavigator();

function App() {
	return (
		<NavigationContainer style={{backgroundColor: '#5227D0'}}>
			<StatusBar barStyle="light-content" />
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen name="SignInShop" component={SignInShop} />
				<Stack.Screen name="SignUpShop" component={SignUpShop} />
				<Stack.Screen name="ForgotPassword" component={ForgotPassword} />
				<Stack.Screen name="CreatePassword" component={CreatePassword} />
				<Stack.Screen name="MainPage" component={MainPage} />
				<Stack.Screen name="About" component={About} />
				<Stack.Screen name="Code" component={Code} />
				<Stack.Screen name="Check" component={Check} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
