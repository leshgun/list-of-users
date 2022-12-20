import { createUseStyles } from "react-jss";



const user_styles = {
	cursor:					"pointer",

	"&:hover": {
		background:	"rgba(0,0,0,.3) !important"
	}
}


const useStyles = createUseStyles ({
	user: {
		...user_styles,
	},
})

export default useStyles;