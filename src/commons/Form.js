import React, { Component } from 'react';
import { Content, Form } from 'native-base';

class AppForm extends Component {
	render() {
		return (
			<Content style={styles.containerStyle}>
				<Form>
					{this.props.children}
				</Form>
			</Content>
		);
	}
}

const styles = {
	containerStyle: {
		marginRight: 15
	}
}

export { AppForm };