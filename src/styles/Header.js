import { createUseStyles } from "react-jss";



const header_style = {
	width: 			"100%",
	padding:		"1rem 3rem",
	borderBottom: 	"1px solid rgb(77, 77, 77)",
	display: 		"flex",
	flexDirection: 	"row",
	justifyContent: "space-between",
	alignItems:		"center",
	gap:			"1rem",
}


const useStyles = createUseStyles ({
	header: {
		...header_style,
		
		"& >button": {
			padding:	"10px 25px",
			fontWeight:	500,
			background:	"transparent",
			// border:		"2px solid #FFF",
			outline:	"none",
			cursor:		"pointer",
			transition:	"all .3s ease",
			position:	"relative",
			zIndex:		1,
		},

		"& >button:after": {
			position:	"absolute",
			content:	"''",
			width:		"100%",
			height:		0,
			top:		0,
			left:		0,
			zIndex:		-1,
			background:	"#000",
			transition:	"all .3s ease"
		},

		"& >button:hover": {
			color:	"white",
		},

		"& >button:hover:after": {
			top: 	"auto",
			bottom:	0,
			height:	"100%",
		}
	},
})

export default useStyles;