import React from 'react';
import { View, Text, Button } from 'react-native';

// Details page example
class Details extends React.Component {
	/*
	 * navigation - navigation prop for screen, screen route at navigation.state
	 * screenProps - props passing from above navigator component
	 * navigationOptions - default or previous options that would be used if new values not provided
	 */
	
	// This gets called on every render of Details (gets 'otherParam' from previous screen)	
	static navigationOptions = ({ navigation, navigationOptions }) => {	
		
		console.log("Navigation Options:");
		console.log(navigationOptions);
		console.log('\n');

		return {
			title: navigation.getParam('otherParam', 'Nested Details Screen'),
			headerStyle: {
				backgroundColor: navigationOptions.headerTintColor,
			},
			headerTintColor: navigationOptions.headerStyle.backgroundColor,
		};
	};
	render() {
		const { navigation } = this.props;	
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>Details Screen</Text>
				<Text>
					itemId: {JSON.stringify(navigation.getParam('itemId', 'NO-ID'))}
				</Text>
				<Text>
					otherParam: {JSON.stringify(navigation.getParam('otherParam', 'default value'))}
				</Text>
				<Button
					title="Go to Details... again"
				  	onPress={() => this.props.navigation.push('Details', {
							itemId: Math.floor(Math.random() * 100),
						})
					}
				/>	
				<Button
					title="Go to Home"
					onPress={() => this.props.navigation.navigate('Home')}
				/>
				<Button
					title="Go back"
					onPress={() => this.props.navigation.goBack()}
				/>
			</View>
		);
	}
}

export default Details;
