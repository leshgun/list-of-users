import React, { useState } from 'react'

import useStyles from './MyForm.module'

function MyForm ({ form, setForm, form_callback, form_name, ...props }) {

	const classes = useStyles();
	const [ isChanged, setIsChanged ] = useState(false);

	const fields = Object.entries(form).map(([name, value]) => {
		if (name !== "id")
			return <div 
				key = {`form_${name}`}
				className = { classes.form_field }
			>
				<input
					type = 			"text"
					autoComplete =	"off"
					name = 			{ name }
					required = 		''
					value =			{ value }
					onChange = 		{ (e) => {
						setIsChanged(true);
						form[name] = e.target.value;
						setForm({...form});
					}}
				></input>
				<label>{ name.toLowerCase() }</label>
			</div>
	});

	function validate_form (form) {
		const regex_username 	= RegExp ("^[a-z0-9_-]+$", 'i');
		const regex_age			= RegExp ("^[0-9]{1,3}$", 'i');
		const regex_email		= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


		if ((form.age && !regex_age.test(form.age)) || parseInt(form.age) > 150 || 
			parseInt(form.age) < 1) 
		{
			console.log("Wrong age...");
			return false;
		}

		if (form.email && !regex_email.test(form.email)){
			console.log("Wrong email...");
			return false;
		}

		if (form.login && !regex_username.test(form.login)){
			console.log("Wrong login...");
			return false
		}

		if (form.username && !regex_username.test(form.username)){
			console.log("Wrong username...");
			return false;
		}

		return true
	}


	function onFormSubmit (e) {
		e.preventDefault();
		if (validate_form(form)) {
			e.target.reset();
			form_callback(isChanged);
			setIsChanged(false);
		}
	}

	return (
		<form 
			className = { classes.form }
			onSubmit = { e => onFormSubmit(e) }
		>
			<h2>{ form_name }</h2>
			{ fields }
			<button>Submit</button>
		</form>
	)
}

export default MyForm
