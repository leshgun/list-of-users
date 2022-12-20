import React, { useEffect } from 'react'

import useStyles from './MyForm.module'

function MyForm ({ form, setForm, ...props }) {

	const classes = useStyles();

	const validateEmail = (email) => {
		return String(email)
			.toLowerCase()
			.match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			);
	};

	function validate_form (form) {
		const regex_username 	= RegExp("^[a-z0-9_-]+$");
		const regex_age			= RegExp(`^[0-9]{1,3}$`);

		if (!regex_username.test(form.username.toLowerCase())){
			console.log("Wrong username...");
			return false;
		}

		if (!validateEmail(form.email)){
			console.log("Wrong email...");
			return false;
		}

		if (!regex_age.test(form.age) || parseInt(form.age) > 150 || 
			parseInt(form.age) < 1) 
		{
			console.log("Wrong email...");
			return false;
		}

		return true
	}


	function onFormSubmit (e) {
		e.preventDefault();
		const form_data = new FormData(e.target);
		const form_props = Object.fromEntries(form_data);
		const new_from = form;
		Object.entries(form).forEach(([name, value]) => 
			new_from[name] = form_props[name] || value
		);
		if (validate_form(new_from)) {
			setForm(new_from);
			e.target.reset();
		}
	}

	const fields = Object.entries(form).map(([name, value]) => {
		if (name != "id")
			return <div 
				key = {`form_${name}`}
				className = { classes.form_field }
			>
				<input
					type = 			"text"
					name = 			{ name }
					required = 		''
					placeholder =	{ value }
				></input>
				<label>{ name.toLowerCase() }</label>
			</div>
	});

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