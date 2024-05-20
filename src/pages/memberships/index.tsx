import React, { useState } from "react";
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
import { useQueryClient } from "@tanstack/react-query";
import useGetMemberhipsQuery from "../../hooks/memberhips/useGetMemberhipsQuery";
import usePutMembershipMutation from "../../hooks/memberhips/usePutMembershipMutation";
import usePostNewMembershipMutation from "../../hooks/memberhips/usePostNewMembershipMutation";
import useDeleteMembershipMutation from "../../hooks/memberhips/useDeleteMembershipMutation";

const MembershipsPage = () => {
  const { data: memberships } = useGetMemberhipsQuery();
  const putMembershipMutation = usePutMembershipMutation();
  const postNewMembershipMutation = usePostNewMembershipMutation();
  const deleteMembershipMutation = useDeleteMembershipMutation();
  const [open, setOpen] = useState(false);
  const [selectedMembership, setSelectedMembership] = useState<any>(null);

  const queryClient = useQueryClient();

  const { control, handleSubmit, reset } = useForm<FieldValues>({
    mode: "onChange",
    defaultValues: {
      name: "",
      price: 0,
      validityDays: 0,
      entryLimit: 0,
      validFromHour: 0,
      validToHour: 0,
      dailyUsageLimit: 0,
      validDaysOfWeek: "",
    },
  });

  const handleOpenDialog = (membership: any = null) => {
    setSelectedMembership(membership);
    reset({
      name: membership?.name || "",
      price: membership?.price || 0,
      validityDays: membership?.validityDays || 0,
      entryLimit: membership?.entryLimit || 0,
      validFromHour: membership?.validFromHour || 0,
      validToHour: membership?.validToHour || 0,
      dailyUsageLimit: membership?.dailyUsageLimit || 0,
      validDaysOfWeek: membership?.validDaysOfWeek?.join(", ") || "",
    });
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
    setSelectedMembership(null);
  };

  const onSubmit = (data: any) => {
    const payload = {
      ...data,
      validDaysOfWeek: data.validDaysOfWeek
        .split(",")
        .map((day: string) => day.trim()),
    };

    if (selectedMembership) {
      putMembershipMutation.mutate(
        {
          id: selectedMembership.id,
          payload: payload,
        },
        {
          onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["memberships"] });
            handleCloseDialog();
          },
        }
      );
    } else {
      postNewMembershipMutation.mutate(
        { payload: payload },
        {
          onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["memberships"] });
            handleCloseDialog();
          },
        }
      );
    }
  };

  const handleDelete = (membershipId: string) => {
    deleteMembershipMutation.mutate(
      { id: membershipId },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["memberships"] });
        },
      }
    );
  };

  return (
    <Layout>
      <Box sx={{ padding: 4 }}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Memberships
          </Typography>
          <Button variant="contained" onClick={() => handleOpenDialog()}>
            Add New
          </Button>
        </Stack>
        <Grid container spacing={4} sx={{ marginTop: 2 }}>
          {memberships?.map((membership: any) => (
            <Grid item xs={12} sm={6} md={4} key={membership.id.timestamp}>
              <Paper elevation={3} sx={{ padding: 3 }}>
                <Stack spacing={2}>
                  <Typography variant="h5">{membership.name}</Typography>
                  <Typography variant="body1">
                    Price: {membership.price} HUF
                  </Typography>
                  <Typography variant="body1">
                    Validity Days: {membership.validityDays ?? "N/A"}
                  </Typography>
                  <Typography variant="body1">
                    Entry Limit: {membership.entryLimit ?? "Unlimited"}
                  </Typography>
                  <Typography variant="body1">
                    Valid From: {membership.validFromHour}:00
                  </Typography>
                  <Typography variant="body1">
                    Valid To: {membership.validToHour}:00
                  </Typography>
                  <Typography variant="body1">
                    Daily Usage Limit:{" "}
                    {membership.dailyUsageLimit ?? "Unlimited"}
                  </Typography>
                  <Typography variant="body1">
                    Valid Days:{" "}
                    {membership.validDaysOfWeek?.join(", ") ?? "All days"}
                  </Typography>
                  <Stack direction="row" spacing={2}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleOpenDialog(membership)}
                      fullWidth
                    >
                      Modify
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => handleDelete(membership.id)}
                      fullWidth
                    >
                      Delete
                    </Button>
                  </Stack>
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Dialog open={open} onClose={handleCloseDialog} fullWidth maxWidth="sm">
        <DialogTitle>
          {selectedMembership ? "Modify Membership" : "Add New Membership"}
        </DialogTitle>
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
                name="price"
                control={control}
                render={({ field }) => (
                  <TextField
                    label="Price"
                    type="number"
                    fullWidth
                    required
                    {...field}
                  />
                )}
              />
              <Controller
                name="validityDays"
                control={control}
                render={({ field }) => (
                  <TextField
                    label="Validity Days"
                    type="number"
                    fullWidth
                    {...field}
                  />
                )}
              />
              <Controller
                name="entryLimit"
                control={control}
                render={({ field }) => (
                  <TextField
                    label="Entry Limit"
                    type="number"
                    fullWidth
                    {...field}
                  />
                )}
              />
              <Controller
                name="validFromHour"
                control={control}
                render={({ field }) => (
                  <TextField
                    label="Valid From Hour"
                    type="number"
                    fullWidth
                    {...field}
                  />
                )}
              />
              <Controller
                name="validToHour"
                control={control}
                render={({ field }) => (
                  <TextField
                    label="Valid To Hour"
                    type="number"
                    fullWidth
                    {...field}
                  />
                )}
              />
              <Controller
                name="dailyUsageLimit"
                control={control}
                render={({ field }) => (
                  <TextField
                    label="Daily Usage Limit"
                    type="number"
                    fullWidth
                    {...field}
                  />
                )}
              />
              <Controller
                name="validDaysOfWeek"
                control={control}
                render={({ field }) => (
                  <TextField
                    label="Valid Days of Week"
                    fullWidth
                    {...field}
                    placeholder="Comma separated, e.g., Monday, Tuesday"
                  />
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

export default MembershipsPage;
