declare module "@mui/material/styles" {
    interface BreakpointOverrides {
        xxs: true;
        xs: true;
        sm: true;
        md: true;
        lg: true;
        xl: true;
        xxl: true;
    }
}

export const breakpoints: any = {
    values: {
        xxs: 0,
        xs: 390,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
        xxl: 1536,
    },
};
