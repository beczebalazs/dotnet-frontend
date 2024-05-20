import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthSlice {
	name: string;
	email: string;
	userId: string | undefined;
}

const initialState: AuthSlice = {
	name: '',
	email: '',
	userId: undefined,
};

const authSlice = createSlice({
	name: 'auth',
	initialState: initialState,
	reducers: {
		setUserId: (state, action: PayloadAction<string | undefined>) => {
			state.userId = action.payload;
		},
	},
});

export const { setUserId } = authSlice.actions;
export default authSlice;
