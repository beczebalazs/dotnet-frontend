
import { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Paper,
  Typography,
  Button,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import { useForm, Controller, FieldValues } from "react-hook-form";
import Layout from "../../components/common/layout/layout";
import useGetCurrentUserQuery from "../../hooks/user/useGetCurrentUserQuery";
import useDeleteUserMutation from "../../hooks/user/useDeleteUserMutation";
import usePatchCurrentUserMutation from "../../hooks/user/usePatchCurrentUserMutation";
import { useQueryClient } from "@tanstack/react-query";

const ClientsPage = () => {
  const [search, setSearch] = useState('');
  const { data: users } = useGetCurrentUserQuery(undefined, search);
  const deleteUserMutation = useDeleteUserMutation();
  const patchUserMutation = usePatchCurrentUserMutation();
  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);

  const queryClient = useQueryClient();

  useEffect(() => {
    console.log("Users data:", users);
  }, [users]);

  const { control, handleSubmit, reset } = useForm<FieldValues>({
    mode: "onChange",
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      personalId: "",
      address: "",
      role: "",
    },
  });

  const handleOpenDialog = (user: any) => {
    setSelectedUser(user);
    reset({
      name: user.name,
      phone: user.phone,
      email: user.email,
      personalId: user.personalId,
      address: user.address,
      role: user.role,
    });
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
    setSelectedUser(null);
  };

  const onSubmit = (data: any) => {
    if (selectedUser) {
      patchUserMutation.mutate(
        {
          id: selectedUser.id,
          payload: data,
        },
        {
          onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["currentUser"] });
            handleCloseDialog();
          },
        }
      );
    }
  };

  const handleDeleteUser = (id: string) => {
    deleteUserMutation.mutate(
      { id },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["currentUser"] });
        },
      }
    );
  };

  const handleSearch = (input: string) => {
    setSearch(input);
  };

  return (
    <Layout>
      <Box sx={{ padding: 4 }}>
        <Typography variant="h4" sx={{ textAlign: "center", marginBottom: 4 }}>
          Clients
        </Typography>
        <TextField 
          placeholder="Search by email" 
          value={search} 
          onChange={(e) => handleSearch(e.target.value)} 
          sx={{ mb: 2 }} 
        />
        <Grid container spacing={4}>
          {users && users.length > 0 && users.map((user: any) => (
            <Grid item xs={12} sm={6} md={4} key={user.id}>
              <Paper elevation={3} sx={{ padding: 3 }}>
                <Stack spacing={2}>
                  <Typography variant="h5">{user.name}</Typography>
                  <Typography variant="body1">Email: {user.email}</Typography>
                  <Typography variant="body1">Phone: {user.phone}</Typography>
                  <Typography variant="body1">Address: {user.address}</Typography>
                  <Typography variant="body1">Personal ID: {user.personalId}</Typography>
                  <Typography variant="body1">Role: {user.role}</Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleOpenDialog(user)}
                  >
                    Modify
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleDeleteUser(user.id)}
                  >
                    Delete
                  </Button>
                </Stack>
              </Paper>
            </Grid>
          ))}
          {/* {users && !users.length > 0 && users.map((user: any) => (
            <Grid item xs={12} sm={6} md={4} key={user.id}>
              <Paper elevation={3} sx={{ padding: 3 }}>
                <Stack spacing={2}>
                  <Typography variant="h5">{user.name}</Typography>
                  <Typography variant="body1">Email: {user.email}</Typography>
                  <Typography variant="body1">Phone: {user.phone}</Typography>
                  <Typography variant="body1">Address: {user.address}</Typography>
                  <Typography variant="body1">Personal ID: {user.personalId}</Typography>
                  <Typography variant="body1">Role: {user.role}</Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleOpenDialog(user)}
                  >
                    Modify
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleDeleteUser(user.id)}
                  >
                    Delete
                  </Button>
                </Stack>
              </Paper>
            </Grid>
          ))} */}
        </Grid>
      </Box>

      <Dialog open={open} onClose={handleCloseDialog} fullWidth maxWidth="sm">
        <DialogTitle>Modify Client</DialogTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogContent>
            <Stack spacing={2}>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <TextField label="Name" fullWidth required {...field} />
                )}
              />
              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <TextField label="Phone" fullWidth required {...field} />
                )}
              />
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <TextField label="Email" fullWidth required {...field} />
                )}
              />
              <Controller
                name="personalId"
                control={control}
                render={({ field }) => (
                  <TextField label="Personal ID" fullWidth required {...field} />
                )}
              />
              <Controller
                name="address"
                control={control}
                render={({ field }) => (
                  <TextField label="Address" fullWidth required {...field} />
                )}
              />
              <Controller
                name="role"
                control={control}
                render={({ field }) => (
                  <TextField label="Role" fullWidth required {...field} />
                )}
              />
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Cancel</Button>
            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </Layout>
  );
};

export default ClientsPage;
