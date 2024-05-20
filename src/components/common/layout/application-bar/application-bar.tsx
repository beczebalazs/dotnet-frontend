import { FC } from 'react';

import { Box, Stack, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import { AppBarHeight, companyName } from '../../../../constants/common.constants';
import useGetCurrentUserQuery from '../../../../hooks/user/useGetCurrentUserQuery';


const ApplicationBar: FC = () => {

  const user = useGetCurrentUserQuery();

  const userInitials = user.data?.name
  ?  user.data?.name
      .split(' ')
      .map((name: string) => name[0])
      .join('')
      .toUpperCase()
  : '';

  return (
    <AppBar
      position="fixed"
      color="default"
      elevation={0}
      sx={{
        height: `${AppBarHeight}px`,
        bgcolor: 'grey.100',
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ p: 2, mx: 2 }}
      >
        <Stack direction="row" alignItems="center" gap={1}>
          <Box component="img" src="/images/logo.png" alt="Logo" sx={{ height: 40 }} />
          <Typography variant="h6">{companyName}</Typography>
        </Stack>
        {user.data && (<Stack direction="row" alignItems="center" gap={2}>
          <Stack
            direction="row"
            alignItems="center"
            gap={2}
            sx={{
              py: 1,
              px: 2,
              borderRadius: 2,
            }}
          >
            <Typography variant="body1" sx={{ display: { xs: 'none', sm: 'block' } }}>
              {user.data?.name}
            </Typography>
            <Avatar sx={{ height: 32, width: 32, fontSize: 14 }}>{userInitials}</Avatar>
          </Stack>
        </Stack>)}
      </Stack>
    </AppBar>
  );
};

export default ApplicationBar;
