import { RootState } from '..';

const userIdSelector = (state: RootState) => state.auth.userId;

export { userIdSelector };
