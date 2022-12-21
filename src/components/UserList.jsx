import React, { useContext, useState } from 'react'
import { MyContext } from '../App';

import useStyles from '../styles/UserList';
import MyForm from '../UI/form/MyForm';
import MyModal from '../UI/modal/MyModal';
import User from './User';



const default_form_values = [{
	username: 	'',
	email: 		'',
	age:		'',
	country:	''
}]


function UserList () {

	const { usersList, setUsersList } = useContext(MyContext); 

	const [ visible, setVisible ] = useState(false);
	const [ updatedUser, setUpdatedUser ] = useState(default_form_values);

	const classes = useStyles();
	const children = usersList.map( user => 
		<User 
			key		= { user.id } 
			user 	= { user }
			onClick	= { () => open_update_user_modal(user) }
		/> 
	);


	function update_user_info (is_changed = true) {
		setVisible(false);
		if (is_changed)
			setUsersList([
				...usersList.filter(x => x.id != updatedUser.id), 
				updatedUser
			]);
	}


	function open_update_user_modal (user) {
		setUpdatedUser({...user});
		setVisible(true);
	}


	function sort_users_list (column, is_int = false) {
		let sorted_user_list = usersList;
		sorted_user_list.sort((x, y) => {
			if (is_int)
				return parseInt(x[column]) - parseInt(y[column]);
			return (''+x[column]).localeCompare(''+y[column])
		});
		setUsersList([...sorted_user_list]);
	} 


	return (
		<div className = { classes.user_list }>
			<table className = { classes.user_table }>
				<thead>
					<tr>
						<th onClick = { () => sort_users_list("id", true) }>id</th>
						<th onClick = { () => sort_users_list("username") }>Username</th>
						<th onClick = { () => sort_users_list("email") }>Email</th>
						<th onClick = { () => sort_users_list("age", true) }>Age</th>
						<th onClick = { () => sort_users_list("country") }>Country</th>
					</tr>
				</thead>
				<tbody>
					{ children }
				</tbody>
			</table>
			<MyModal 
				key = "update_user"
				visible = { visible }
				setVisible = { setVisible }
				show_modal_content = { true }
			>
				<MyForm
					key = 			"new_user_form"
					form = 			{ updatedUser }
					setForm = 		{ setUpdatedUser }
					form_callback = { update_user_info }
				/>
			</MyModal>
		</div>
	)

}

export default UserList
