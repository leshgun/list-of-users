import React, { useState } from 'react'
import MyModal from '../modal/MyModal';

// import useStyles from './LoginForm.module'
import MyForm from './MyForm';



const default_login = {
    username:   '',
    password:   ''
}


function LoginForm ({ loginFormVisible, setLoginFormVisible, setLogin  }) {

	// const classes = useStyles();
    const [ loginForm, setLoginForm ] = useState(default_login);


    function login_submit () {
        console.log(loginForm);
        setLogin(loginForm);
        setLoginForm({ ...default_login });
    }


	return (
		// <div className = { classes.login_form }>
            <MyModal
                visible =               { loginFormVisible }
                setVisible =            { setLoginFormVisible }
                show_modal_content =    { true }
            >
                <MyForm
                    key =           "login_form"
                    form =          { loginForm }
                    setForm =       { setLoginForm }
                    form_callback = { login_submit }
                    form_name =     "Login"
                />
            </MyModal>
        // </div>
	)
}

export default LoginForm
