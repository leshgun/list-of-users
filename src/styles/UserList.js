import { createUseStyles } from "react-jss";



const user_list_styles = {
	
};

const user_table_styles = {
	width: "100%"
};


const useStyles = createUseStyles ({

	user_list: {
		...user_list_styles,

		"& table": {
			borderRadius: 		"5px",
			// fontSize:		"12px",
			fontWeight:			"normal",
			border:				"none",
			borderCollapse:		"collapse",
			width:				"100%",
			maxWidth:			"100%",
			whiteSpace:			"nowrap",
			backgroundColor:	"white",
	
			"& tr": {
				"& td, & th": {
					textAlign:	"center",
					padding:	8,
				},

				"& th": {
					color: 		"#fff",
					background:	"#4FC3A1",
					cursor:		"pointer",
				},
				
				"& th:nth-child(odd)": {
					color: 		"#fff",
					background:	"#324960",
				},
				
				"& td": {
					borderRight: "1px solid #f8f8f8",
				}
			},
	
			"& tr:nth-child(even)": {
				background: "#F8F8F8"
			}
		}
	},

	user_table: {
		...user_table_styles,

		"& thead, & tbody": {
			width: "100%"
		},
	}

})

export default useStyles;