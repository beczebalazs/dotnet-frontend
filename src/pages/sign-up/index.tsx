import React from 'react';
import { useForm, Controller, FieldValues } from 'react-hook-form';
import { Box, Paper, Stack, TextField, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router';
import usePostSignUpMutation from '../../hooks/auth/usePostSingUpMutation';

const SignUpPage = () => {
  const { control, handleSubmit } = useForm<FieldValues>({
    mode: 'onChange',
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      personalId: '',
      address: '',
      password: '',
    },
  });

  const navigate = useNavigate();
  const postSignUpMutation = usePostSignUpMutation(); 

  const handleNavigateToLogin = () => {
    navigate('/login');
  };

  const onSubmit = (data: any) => {
    postSignUpMutation.mutate({ payload: data });
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
      <Stack sx={{ width: '400px' }}>
        <Paper sx={{ padding: 4 }}>
          <Typography variant="h4" sx={{ marginBottom: 2, textAlign: 'center' }}>
            Sign Up
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2}>
              <Controller
                name="name"
                control={control}
                render={({ field }) => <TextField label="Name" fullWidth required {...field} />}
              />
              <Controller
                name="phone"
                control={control}
                render={({ field }) => <TextField label="Phone" type="number" fullWidth required {...field} />}
              />
              <Controller
                name="email"
                control={control}
                render={({ field }) => <TextField label="Email" type="email" fullWidth required {...field} />}
              />
              <Controller
                name="personalId"
                control={control}
                render={({ field }) => <TextField label="Personal ID" fullWidth required {...field} />}
              />
              <Controller
                name="address"
                control={control}
                render={({ field }) => <TextField label="Address" fullWidth required {...field} />}
              />
              <Controller
                name="password"
                control={control}
                render={({ field }) => <TextField label="Password" type="password" fullWidth required {...field} />}
              />
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Sign Up
              </Button>
              <Button variant="text" fullWidth onClick={handleNavigateToLogin}>
                Login
              </Button>
            </Stack>
          </form>
        </Paper>
      </Stack>
    </Box>
  );
};

export default SignUpPage;
