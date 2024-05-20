import { FC } from 'react';

import { Stack } from '@mui/material';
import Typography from '@mui/material/Typography';

const PageLoading: FC = () => {
	return (
		<Stack justifyContent="center" alignItems="center" sx={{ height: '80vh' }}>
			<Typography variant="body1" color="initial" sx={{ mt: 2 }}>
				Loading....
			</Typography>
		</Stack>
	);
};

export default PageLoading;

