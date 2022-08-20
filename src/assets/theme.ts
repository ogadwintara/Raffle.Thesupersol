import { createTheme } from '@material-ui/core/styles';
import { DeviceType } from '../providers/ViewportProvider';

const PRIMARY_COLOR = '#d9b114';
const SECONDARY_COLOR = '#f2ea05';

const theme = ({ device }: { device: DeviceType }) =>
  createTheme({
    typography: {
      allVariants: { color: '#FFF', fontFamily: 'Roboto Mono' },
      h1: {
        color: PRIMARY_COLOR,
        textAlign: 'center',
        fontSize: device === DeviceType.Phone ? '20px' : '40px',
      },
      h2: {
        color: SECONDARY_COLOR,
        fontWeight: 'bold',
        fontSize: device === DeviceType.Phone ? '18px' : '25px',
      },
      h3: {
        color: SECONDARY_COLOR,
        fontWeight: 'bold',
        fontSize: device === DeviceType.Phone ? '15px' : '16px',
      },
      h4: {
        color: 'white',
        fontSize: device === DeviceType.Phone ? '20px' : '20px',
      },
      body1: {
        fontSize: device === DeviceType.Phone ? '14px' : '14px',
      },
      overline: {
        color: '#999',
        fontSize: device === DeviceType.Phone ? '12px' : '13px',
      },
      caption: {
        fontSize: device === DeviceType.Phone ? '16x' : '16px',
      },
    },
    palette: {
      type: 'dark',
      background: {
        paper: '#212225',
        default:
          'linear-gradient(0deg, #0f0f0f 0%, rgba(6,18,98,1) 100%, #0f0f0f 100%);',
      },
      primary: {
        main: PRIMARY_COLOR,
      },
      secondary: {
        main: SECONDARY_COLOR,
      },
      grey: { 500: '#777' },
    },
  });

export default theme;
