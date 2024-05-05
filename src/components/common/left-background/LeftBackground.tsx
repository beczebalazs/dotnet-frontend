import { FC, ReactNode } from "react";

import { alpha, useMediaQuery } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { theme } from "../../../theme";

interface Props {
  backgroundImage?: string;
  children: ReactNode;
}

const LeftBackground: FC<Props> = (props) => {
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
            xxs={6}
            sx={{
              backgroundImage: `url(${props.backgroundImage})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100vh",
            }}
          ></Grid>
          <Grid
            xxs={6}
            sx={{
              padding: theme.spacing(5),
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {props.children}
          </Grid>
        </Grid>
      ) : (
        <Grid
          container
          sx={{
            height: "110vh",
            backgroundColor: "secondary.main",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            [theme.breakpoints.down("xs")]: {
              height: "145vh",
            },
          }}
        >
          <Grid
            sx={{
              backgroundImage: `linear-gradient(0deg, ${alpha(
                theme.palette.secondary.main,
                0.4
              )}, ${alpha(theme.palette.secondary.main, 0.4)}), url(${
                props.backgroundImage
              })`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "25%",
              width: "100%",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.4)",
              borderBottomLeftRadius: theme.spacing(12.5),
              borderBottomRightRadius: theme.spacing(12.5),
              position: "absolute",
              top: 0,
            }}
          ></Grid>
          <Grid
            sx={{
              padding: theme.spacing(5),
              borderRadius: theme.spacing(2),
              width: "100%",
              position: "absolute",
              top: "27%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              "& .MuiTypography-root": {
                color: "white !important",
              },
            }}
          >
            {props.children}
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default LeftBackground;
