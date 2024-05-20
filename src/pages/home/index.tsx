import Layout from "../../components/common/layout/layout";
import { Stack, Typography, Box, Button } from "@mui/material";
import useGetCurrentUserQuery from "../../hooks/user/useGetCurrentUserQuery";
import { useNavigate } from "react-router";
import { useAppSelector } from "../../store/redux";
import { userIdSelector } from "../../store/auth/selector";

const HomePage = () => {
  const userId = useAppSelector(userIdSelector);

  const user = useGetCurrentUserQuery(userId);
  
  const navigate = useNavigate();
  return (
    <Layout isScrollable={false}>
      {!user.data ? (
        <Stack height={"90vh"} alignItems={"center"} justifyContent={"center"}>
          <Typography variant="h5">
            Please login to buy a membership!
          </Typography>
          <Button variant="text" onClick={() => navigate('/login')}>Go to login page</Button>
        </Stack>
      ) : (
        <Stack
          height={"90vh"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={5}
        >
          <Box>
            <Typography variant="h4" textAlign="center">
              Welcome to Power GYM, {user.data.name}!
            </Typography>
            <Typography variant="h6" textAlign="center" sx={{mt: 2}}>
              Thank you for choosing us. We're glad to have you here.
            </Typography>
          </Box>
          <Box
            component="img"
            sx={{
              width: "100%",
              maxWidth: "1200px",
              borderRadius: 2,
              boxShadow: 3,
            }}
            alt="Gym"
            src="/images/homepage.jpeg"
          />
        </Stack>
      )}
    </Layout>
  );
};

export default HomePage;
