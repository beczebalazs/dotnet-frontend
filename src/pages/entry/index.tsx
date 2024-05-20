import React from 'react';
import { Box, Button, TextField, Stack, Typography, Paper } from '@mui/material';
import { useForm, Controller, FieldValues } from 'react-hook-form';
import Layout from '../../components/common/layout/layout';
import usePostEntryMutation from '../../hooks/entry/usePostEntryMutation';

const EntryPage = () => {
  const { control, handleSubmit, reset } = useForm<FieldValues>({
    mode: 'onChange',
    defaultValues: {
      email: '',
    },
  });

  const postEntryMutation = usePostEntryMutation();

  const onSubmit = (data: any) => {
    postEntryMutation.mutate(
      { payload: data },
      {
        onSuccess: () => {
          reset();
        },
      }
    );
  };

  return (
    <Layout>
      <Box sx={{ padding: 4 }}>
        <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: 4 }}>
          Client Entry
        </Typography>
        <Paper elevation={3} sx={{ padding: 3, maxWidth: 400, margin: 'auto' }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2}>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <TextField label="Client Email" fullWidth required {...field} />
                )}
              />
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Stack>
          </form>
        </Paper>
      </Box>
    </Layout>
  );
};

export default EntryPage;
