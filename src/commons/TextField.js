import React, { Component } from 'react';
import { Item, Label, Input } from 'native-base';

class AppTextField extends Component {
	render() {
		/*
			@props {label} - label for input
			@props {value} - value of textInput
			@props {secureTextEntry} - true/false - obfuscate text for textInput
			@props {onChangeText} - triggers textInput change event
		*/
		const { label, value, secureTextEntry, onChangeText } = this.props;

		return (
			<Item floatingLabel>
	            <Label>{label}</Label>
	            <Input 
	             value={value}
	             secureTextEntry={secureTextEntry || false} // if secureTextEntry is defined, USE it. Else, normal textInout without password type will be rendered.
	             onChangeText={onChangeText}
	            />
	        </Item>
		);
	}
}

export { AppTextField };