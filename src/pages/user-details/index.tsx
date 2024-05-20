import { useEffect } from "react";
import { useForm, Controller, FieldValues } from "react-hook-form";
import { Paper, Stack, TextField, Typography, Button } from "@mui/material";
import useGetCurrentUserQuery from "../../hooks/user/useGetCurrentUserQuery";
import usePatchCurrentUserMutation from "../../hooks/user/usePatchCurrentUserMutation";
import Layout from "../../components/common/layout/layout";
import { useAppSelector } from "../../store/redux";
import { userIdSelector } from "../../store/auth/selector";

const UserDetailsPage = () => {
  const userId = useAppSelector(userIdSelector);

  const { data: user } = useGetCurrentUserQuery(userId);

  const { control, handleSubmit, reset } = useForm<FieldValues>({
    mode: "onChange",
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      personalId: "",
      address: "",
      role: "", // Ez nem módosítható, de megjelenítjük
    },
  });

  const patchCurrentUserMutation = usePatchCurrentUserMutation();

  useEffect(() => {
    if (user) {
      reset({
        name: user.name,
        phone: user.phone,
        email: user.email,
        personalId: user.personalId,
        address: user.address,
        role: user.role,
      });
    }
  }, [user, reset]);

  const onSubmit = (data: any) => {
    if (user && userId) {
      patchCurrentUserMutation.mutate({ id: userId, payload: data });
    }
  };

  return (
    <Layout>
      <Stack
        sx={{ width: "100%", height: "100%" }}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Paper sx={{ padding: 4, width: "400px" }}>
          <Typography
            variant="h4"
            sx={{ marginBottom: 2, textAlign: "center" }}
          >
            User Details
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
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
                  <TextField
                    label="Phone"
                    type="number"
                    fullWidth
                    required
                    {...field}
                  />
                )}
              />
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
                name="personalId"
                control={control}
                render={({ field }) => (
                  <TextField
                    label="Personal ID"
                    fullWidth
                    required
                    {...field}
                  />
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
                  <TextField
                    label="Role"
                    fullWidth
                    required
                    {...field}
                    disabled
                  />
                )}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Save Changes
              </Button>
            </Stack>
          </form>
        </Paper>
      </Stack>
    </Layout>
  );
};

export default UserDetailsPage;
