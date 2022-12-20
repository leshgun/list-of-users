import { createUseStyles } from "react-jss";



const form_style = {

	// fallback for old browsers
	background: "#005C97",
	background: `-webkit-linear-gradient(to right, #363795, #005C97)`,
	// W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+	
	background: `linear-gradient(to right, #363795, #005C97)`,


	// background: 	"white",
	color:			"#fff",
	boxShadow:		"0 15px 25px rgba(0,0,0,.6)",
	borderRadius:	"10px",
	width:			400,
	padding:		40
}

const form_field_style = {
	position:	"relative"
}


const useStyles = createUseStyles ({
	form: {
		...form_style,

		"& h2": {
			margin: 	"0 0 50px",
			padding:	0,
			textAlign:	"center"
		},

		"& button": {
			position:		"relative",
			padding:		"10px 20px",
			background:		"transparent",
			border:			"none",
			cursor:			"pointer",
			color:			"#03e9f4",
			fontSize:		16,
			textTransform:	"uppercase",
			overflow:		"hidden",
			transition:		".5s",
			marginTop:		40,
			letterSpacing:	4,
		},

		"& button:hover": {
			background:		"#03b9c4",
			color:			"#fff",
			borderRadius:	5,
			boxShadow:		`0 0 5px #03e9f4, 0 0 5px #03e9f4, 
							0 0 5px #03e9f4, 0 0 5px #03e9f4`,
		}
	},

	form_field: {
		...form_field_style,

		"& label": {
			position:		"absolute",
			top:			0,
			left:			0,
			padding:		"10px 0",
			fontSize:		16,
			pointerEvents:	"none",
			transition:		".5s"
		},

		"& input": {
			width:			"100%",
			padding:		"10px 0",
			fontSize:		16,
			marginBottom:	30,
			border:			"none",
			borderBottom:	"1px solid #FFF",
			outline:		"none",
			background:		"transparent",
			color:			"#fff"
		},

		"& input:focus ~ label,& input:valid ~ label": {
			top:		-20,
			left:		0,
			color:		"#03e9f4",
			fontSize:	"12px",
		}
	}
})

export default useStyles;