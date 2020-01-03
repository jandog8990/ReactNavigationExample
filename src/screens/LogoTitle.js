import React from 'react';
import { Image } from 'react-native';

// Logo title class for changing the logo of the header
class LogoTitle extends React.Component {
	render() {
		return (
			<Image
				source={require('@expo/snack-static/react-native-logo.png')}
				style={{ width: 30, height: 30 }}
			/>
		);	
	}
}

export default LogoTitle;
