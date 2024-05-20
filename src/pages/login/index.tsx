import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, Controller, FieldValues } from 'react-hook-form';
import { Box, Paper, Stack, TextField, Typography, Button } from '@mui/material';
import usePostLoginMutation from '../../hooks/auth/usePostLoginMutation';

const LoginPage = () => {
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm<FieldValues>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const postLoginMutation = usePostLoginMutation();

  const onSubmit = (data: any) => {
    postLoginMutation.mutate({ payload: data });
  };

  const handleNavigateToRegister = () => {
    navigate('/sign-up');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        height: '100vh',
        backgroundColor: '#f0f0f0',
      }}
    >
      <Paper sx={{ padding: 4, width: '400px' }}>
        <Typography variant="h4" sx={{ marginBottom: 2, textAlign: 'center' }}>
          Login
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={2}>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  label="Email"
                  type="email"
                  fullWidth
                  required
                  {...field}
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <TextField
                  label="Password"
                  type="password"
                  fullWidth
                  required
                  {...field}
                />
              )}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Login
            </Button>
            <Button variant="text" fullWidth onClick={handleNavigateToRegister}>
              Register
            </Button>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
};

export default LoginPage;
