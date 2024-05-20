import { Box, Grid, Paper, Typography, Stack } from '@mui/material';
import Layout from '../../components/common/layout/layout';
import useGetEntriesQuery from '../../hooks/entry/useGetEntriesQuery';

const EntriesPage = () => {
  const { data: entries} = useGetEntriesQuery();
  
  return (
    <Layout>
      <Box sx={{ padding: 4 }}>
        <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: 4 }}>
          Entries
        </Typography>
        <Grid container spacing={4}>
          {entries?.map((entry: any) => {

            return (
              <Grid item xs={12} sm={6} md={4} key={entry.id}>
                <Paper elevation={3} sx={{ padding: 3 }}>
                  <Stack spacing={2}>
                    <Typography variant="body1">Date: {new Date(entry.date).toLocaleString()}</Typography>
                    <Typography variant="body1">Email: {entry?.clientEmail ?? 'N/A'}</Typography>
                    <Typography variant="body1">Membership: {entry?.membershipName ?? 'N/A'}</Typography>
                  </Stack>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Layout>
  );
};

export default EntriesPage;
