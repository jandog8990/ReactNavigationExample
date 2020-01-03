import React from 'react';
import { View, Text, Button } from 'react-native';
import LogoTitle from './src/screens/LogoTitle';

// Home screen in the stack navigator in App.js
class Home extends React.Component {
	/*
	 * Adjust header styles
	 * headerStyle - applied to View that wraps header (backgroundColor)
	 * headerTintColor - back button/title use this as color
	 * headerTitleStyle - custom fontFamily, fontWeight, and other Text 
	 */
	static navigationOptions = {
		// headerTitle instead of title	
		headerTitle: () => <LogoTitle/>, 
	};
	render() {
		return (
			<View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>Home Screen</Text>
				<Button
					title="Go to Details"
					onPress={() => {
						this.props.navigation.navigate('Details', {
							itemId: 86,
							otherParam: 'anything you want',
						});
					}}
				/>
			</View>
		);
	}
}

export default Home;
