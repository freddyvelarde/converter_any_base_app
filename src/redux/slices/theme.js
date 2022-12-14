const { createSlice } = require('@reduxjs/toolkit');

const themeSlice = createSlice({
	name: 'theme',
	initialState: {
		value: true,
	},
	reducers: {
		setTheme: (state, actions) => {
			state.value = actions.payload;
		},
	},
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
