import { createContext, useState } from 'react';
import Header from './components/Header';
import UserList from './components/UserList';

import './styles/App.css';


const default_parameters = {
	users_example: [
		{
			id:			"1",
			username: 	"Jamil",
			email:		"jamil@example.ug",
			age:		"26",
			country:	"Uganda"
		},
		{
			id:			"2",
			username: 	"Alex",
			email:		"alex@mail.ru",
			age:		"20",
			country:	"Russia"
		},
		{
			id:			"3",
			username: 	"Tom",
			email:		"Tom@gmail.com",
			age:		"32",
			country:	"United Kingdom"
		},
	]
}


function App() {

	const [usersList, setUsersList] = useState(default_parameters.users_example);

	return (
		<div id = "App">
			<MyContext.Provider value = {{
				usersList: usersList,
				setUsersList: setUsersList,
				...default_parameters
			}}>
				<Header />
				<div id = "wrapper">
					<UserList />
				</div>
			</MyContext.Provider>
		</div>
	);
}

export default App;
export const MyContext = createContext ({
	context: 'There is no any context data...'
})
