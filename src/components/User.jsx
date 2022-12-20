import React, { useContext } from 'react'
import { MyContext } from '../App';

import useStyles from '../styles/User';


function User({ user, ...props }) {

	const classes = useStyles();
	
	const { usersList, setUsersList } = useContext(MyContext);

	// const children = user.map( field => <td>{ field }</td> )

	return (
		<tr 
			className = { classes.user }
			onClick = { () => props.onClick ? props.onClick() : void(0) }
		>
			<td className = { classes.user_id }>{ user.id }</td>
			<td>{ user.username }</td>
			<td>{ user.email }</td>
			<td>{ user.age }</td>
			<td>{ user.country }</td>
		</tr>
	)

}

export default User