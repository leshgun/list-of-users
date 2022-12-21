import React, { useEffect, useState } from 'react'

import useStyles from './MyForm.module'

function MyForm ({ form, setForm, form_callback, ...props }) {

	const classes = useStyles();
	const [ isChanged, setIsChanged ] = useState(false);

	const fields = Object.entries(form).map(([name, value]) => {
		if (name != "id")
			return <div 
				key = {`form_${name}`}
				className = { classes.form_field }
			>
				<input
					type = 			"text"
					autocomplete =	"off"
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
		const regex_username 	= RegExp ("^[a-z0-9_-]+$");
		const regex_age			= RegExp (`^[0-9]{1,3}$`);
		const regex_email		= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if (!regex_username.test(form.username.toLowerCase())){
			console.log("Wrong username...");
			return false;
		}

		if (!regex_email.test(form.email)){
			console.log("Wrong email...");
			return false;
		}

		if (!regex_age.test(form.age) || parseInt(form.age) > 150 || 
			parseInt(form.age) < 1) 
		{
			console.log("Wrong age...");
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
			<h2>Add new user</h2>
			{ fields }
			<button>Submit</button>
		</form>
	)
}

export default MyForm
