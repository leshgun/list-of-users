import React, { useState, useContext, useEffect } from 'react'

import { MyContext } from '../App';
import MyModal from '../UI/modal/MyModal';
import useStyles from '../styles/Header'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import MyForm from '../UI/form/MyForm';

const default_form_values = {
	username: 	'',
	email: 		'',
	age:		'',
	country:	''
}

function Header() {


	const classes = useStyles();

	const [visible, setVisible] = useState(false);
	const [newUserForm, setNewUserForm] = useState(default_form_values);
	const { usersList, setUsersList } = useContext(MyContext); 


	function add_new_user (user) {
		setNewUserForm(default_form_values);
		setVisible(false);
		

		let new_id = user.id;
		if (!new_id) {
			new_id = Math.max.apply(
				null, usersList.map(x => parseInt(x.id))
			) + 1;
		}
		setUsersList([...usersList, {
			id: new_id,
			...user
		}]);
	}

	


	return (
		<div className={classes.header}>
			<button
				onClick = { () => setVisible(true) }
			> Add new user </button>
			<div id='home'>
				<FontAwesomeIcon 
					icon = { faRightToBracket }
					size = "2x"
				/>
			</div>
			<MyModal 
				key = "create_user"
				visible = { visible }
				setVisible = { setVisible }
				show_modal_content = { true }
			>
				<MyForm
					key = 		"new_user_form"
					form = 		{ newUserForm }
					setForm = 	{ add_new_user }
				/>
			</MyModal>
		</div>
	)

}

export default Header