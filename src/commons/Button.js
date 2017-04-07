import React, { Component } from 'react';
import { Content, Button, Text } from 'native-base';

class AppButton extends Component {
	render() {
		/*
			@props {buttonLabel} - hlods text for button
			@props {onnPress} - holds event trigger
		*/
		const { buttonLabel, onPress } = this.props;

		return (
			<Content>
				<Button 
					block
					style={styles.buttonStyle}
					onPress={onPress}
					>
					<Text>{buttonLabel}</Text>
				</Button>
			</Content>
		);
	}
}

const styles = {
	buttonStyle: {
		marginTop: 15,
		marginLeft: 15
	}

}

export { AppButton };