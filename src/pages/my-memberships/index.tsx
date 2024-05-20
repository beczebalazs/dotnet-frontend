import React from 'react';
import { Box, Grid, Paper, Typography, Stack, Chip } from '@mui/material';
import Layout from '../../components/common/layout/layout';
import useGetClientMembershipsQuery from '../../hooks/memberhips/useGetClientMembershipsQuery';
import { useAppSelector } from '../../store/redux';
import { userIdSelector } from '../../store/auth/selector';

const MyMembershipsPage = () => {
  const userId = useAppSelector(userIdSelector);
  const memberships = useGetClientMembershipsQuery(userId!);

  if (!memberships.data) {
    return <Layout>Please buy a membership</Layout>;
  }

  // Sort memberships to ensure valid memberships come first
  const sortedMemberships = memberships.data.sort((a: any, b: any) => b.valid - a.valid);

  return (
    <Layout>
      <Box sx={{ padding: 4 }}>
        <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: 4 }}>
          My Memberships
        </Typography>
        <Grid container spacing={4}>
          {sortedMemberships.map((membership: any) => (
            <Grid item xs={12} sm={6} md={4} key={membership.id}>
              <Paper elevation={3} sx={{ padding: 3 }}>
                <Stack spacing={2}>
                  <Typography variant="body1">
                    Purchase Date: {new Date(membership.purchaseDate).toLocaleDateString()}
                  </Typography>
                  <Typography variant="body1">
                    First Usage Date: {new Date(membership.firstUsageDate).toLocaleDateString()}
                  </Typography>
                  <Typography variant="body1">
                    Current Entry Count: {membership.currentEntryCount}
                  </Typography>
                  <Typography variant="body1">
                    Sale Price: {membership.salePrice} HUF
                  </Typography>
                  <Chip
                    label={membership.valid ? 'Valid' : 'Invalid'}
                    color={membership.valid ? 'success' : 'error'}
                  />
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Layout>
  );
};

export default MyMembershipsPage;
