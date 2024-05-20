import { SxProps, Theme } from '@mui/material';
import { blue } from '@mui/material/colors';
import { AppBarHeight, SideBarWidth } from '../../../constants/common.constants';


export const styles = {
  main: {
    flexGrow: 1,
    mt: `calc(${AppBarHeight}px + 10px)`,
    ml: { xs: 1, lg: `calc(${SideBarWidth}px + 16px)` },
    mr: 1,
    height: {
      lg: `calc(100vh - ${AppBarHeight}px - 20px)`,
    },
    backgroundColor: 'white',
    overflowX: 'hidden',
    p: { xs: 2, md: 4 },
    borderRadius: 6,
  } as SxProps<Theme>,
  layout: {
    display: 'flex',
    flexGrow: 1,
    bgcolor: 'grey.100',
    overflow: 'hidden',
  } as SxProps<Theme>,
  sideBar: {
    mt: `calc(${AppBarHeight}px + 10px)`,
    height: `calc(100vh - ${AppBarHeight}px - 20px)`,
    width: `${SideBarWidth}px`,
    position: 'fixed',
    zIndex: 40,
    display: 'flex',
    flexDirection: 'column',
    border: 1,
    borderColor: 'grey.100',
    bgcolor: 'white',
    px: 2,
    pb: 2,
    pt: 1,
    ml: 1,
    borderRadius: 6,
  } as SxProps<Theme>,
  menuItems: { flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 1 } as SxProps<Theme>,
  menuItem: (isActive?: boolean) =>
    ({
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'space-beetween',
      p: 1,
      borderRadius: 2,
      color: isActive ? 'primary' : 'grey.800',
      bgcolor: isActive ? blue[50] : 'inherit',
      ':hover': {
        color: 'primary.light',
        bgcolor: blue[50],
      },
    }) as SxProps<Theme>,
  logout: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'space-beetween',
    p: 1,
    borderRadius: 2,
    color: 'grey.800',
    bgcolor: 'inherit',
  } as SxProps<Theme>,
};
