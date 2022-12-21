import React, { useState, useContext } from 'react'

import { MyContext } from '../App';
import MyModal from '../UI/modal/MyModal';
import useStyles from '../styles/Header'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import MyForm from '../UI/form/MyForm';
import LoginForm from "../UI/form/LoginForm";



const default_form_values = {
	username: 	'',
	email: 		'',
	age:		'',
	country:	''
}


function Header() {


	const classes = useStyles();

	const {
		usersList, setUsersList,
		setLogin
	} = useContext(MyContext);
	const [ visible, setVisible ] = useState(false);
	const [ loginModalVisible, setLoginModalVisible ] = useState(false);
	const [ newUserForm, setNewUserForm ] = useState(default_form_values);


	function add_new_user () {
		const new_id = Math.max.apply(
			null, usersList.map(x => parseInt(x.id))
		) + 1;

		setUsersList([...usersList, {
			id: new_id,
			...newUserForm
		}]);
		setVisible(false);
		setNewUserForm({...default_form_values});
	}

	function open_login_form () {
		setLoginModalVisible(true)
	}


	return (
		<div className={classes.header}>
			<button
				onClick = { () => setVisible(true) }
			> Add new user </button>
			<MyModal 
				key = "create_user"
				visible = { visible }
				setVisible = { setVisible }
				show_modal_content = { true }
			>
				<MyForm
					key = 			"new_user_form"
					form = 			{ newUserForm }
					setForm = 		{ setNewUserForm }
					form_callback = { add_new_user }
					form_name =		"Add new user"
				/>
			</MyModal>
			<div id = 'Login'>
				<FontAwesomeIcon 
					icon = 		{ faRightToBracket }
					size = 		"2x"
					onClick = 	{ open_login_form }
				/>
			</div>
			<LoginForm
				loginFormVisible = 		{ loginModalVisible }
				setLoginFormVisible = 	{ setLoginModalVisible }
				setLogin =				{ setLogin }
			></LoginForm>
		</div>
	)

}

export default Header
