import React, { FC, ReactNode } from "react";

import { grey } from "@mui/material/colors";
import Grid from "@mui/material/Unstable_Grid2";
import { theme } from "../../../theme";


interface Props {
    backgroundImage?: string;
    children: ReactNode;
}

const Background: FC<Props> = (props) => {
    return (
        <>
            {props.backgroundImage !== undefined ? (
                <Grid
                    container
                    sx={{
                        height: "100vh",
                        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(${props.backgroundImage})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Grid
                        sx={{
                            backgroundColor: grey[50],
                            padding: theme.spacing(5),
                            borderRadius: theme.spacing(2),
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            [theme.breakpoints.down("sm")]: {
                                width: "100%",
                                height: "100%",
                                borderRadius: theme.spacing(0),
                                backdropFilter: `blur(${theme.spacing(1)})`,
                                backgroundColor: "rgba(247, 247, 247, 0.8)",
                            },
                        }}
                    >
                        {props.children}
                    </Grid>
                </Grid>
            ) : (
                <Grid
                    container
                    sx={{
                        height: "100vh",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Grid
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
                </Grid>
            )}
        </>
    );
};

export default Background;
