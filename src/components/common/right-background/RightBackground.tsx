import { FC, ReactNode } from "react";

import { useMediaQuery } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { theme } from "../../../theme";

interface Props {
  backgroundImage?: string;
  children: ReactNode;
}

const RightBackground: FC<Props> = (props) => {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {!isMobile ? (
        <Grid
          container
          sx={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid
            md={5}
            lg={4}
            sx={{
              padding: theme.spacing(5),
              borderRadius: theme.spacing(2),
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {props.children}
          </Grid>
          <Grid
            md={7}
            lg={8}
            sx={{
              height: "100vh",
              backgroundImage: `url(${props.backgroundImage})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></Grid>
        </Grid>
      ) : (
        <Grid
          container
          sx={{
            height: "100vh",
            backgroundImage: `url(${props.backgroundImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid
            md={5}
            lg={4}
            sx={{
              padding: theme.spacing(2),
              borderRadius: theme.spacing(2),
              backgroundColor: "rgba(247, 247, 247, 0.75)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {props.children}
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default RightBackground;
