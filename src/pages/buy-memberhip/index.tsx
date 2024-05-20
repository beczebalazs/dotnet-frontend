import React from 'react';
import { Box, Grid, Paper, Typography, Button, Stack } from '@mui/material';
import Layout from '../../components/common/layout/layout';
import useGetMemberhipsQuery from '../../hooks/memberhips/useGetMemberhipsQuery';
import usePostMembershipMutation from '../../hooks/memberhips/usePostMembershipMutation';
import { useAppSelector } from '../../store/redux';
import { userIdSelector } from '../../store/auth/selector';

const BuyMembershipsPage = () => {
  const { data: memberships } = useGetMemberhipsQuery();
  const postMembershipMutation = usePostMembershipMutation();

  const userId = useAppSelector(userIdSelector);

  const handleBuyClick = (membershipId: string, gymId: string, price: number, entryLimit?: number) => {
    const payload = {
      clientId: userId,
      membershipId: membershipId,
      currentEntryCount: entryLimit || 0,
      salePrice: price,
      valid: true,
      gymId: gymId,
    };

    postMembershipMutation.mutate({ payload });
  };

  return (
    <Layout>
      <Box sx={{ padding: 4 }}>
        <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: 4 }}>
          Buy Memberships
        </Typography>
        <Grid container spacing={4}>
          {memberships?.map((membership: any) => (
            <Grid item xs={12} sm={6} md={4} key={membership.id.timestamp}>
              <Paper elevation={3} sx={{ padding: 3 }}>
                <Stack spacing={2}>
                  <Typography variant="h5">{membership.name}</Typography>
                  <Typography variant="body1">Price: {membership.price} HUF</Typography>
                  <Typography variant="body1">
                    Validity Days: {membership.validityDays ?? 'N/A'}
                  </Typography>
                  <Typography variant="body1">
                    Entry Limit: {membership.entryLimit ?? 'Unlimited'}
                  </Typography>
                  <Typography variant="body1">
                    Valid From: {membership.validFromHour}:00
                  </Typography>
                  <Typography variant="body1">
                    Valid To: {membership.validToHour}:00
                  </Typography>
                  <Typography variant="body1">
                    Daily Usage Limit: {membership.dailyUsageLimit ?? 'Unlimited'}
                  </Typography>
                  <Typography variant="body1">
                    Valid Days: {membership.validDaysOfWeek?.join(', ') ?? 'All days'}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleBuyClick(membership.id, membership.gymId, membership.price)}
                  >
                    Buy
                  </Button>
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Layout>
  );
};

export default BuyMembershipsPage;
