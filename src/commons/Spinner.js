import React, { Component } from 'react';
import { Content, Spinner } from 'native-base';

class AppSpinner extends Component {
	render() {
		return (
			<Content>
				<Spinner color='blue' />
			</Content>
		);
	}
}

export { AppSpinner };