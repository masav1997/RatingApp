import * as React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInShop from './screens/Authorization/SignIn/SignInShop'
import SignUpShop from './screens/Authorization/SignUp/SignUpShop'

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
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
