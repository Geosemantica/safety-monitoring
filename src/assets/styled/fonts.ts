import { css } from 'styled-components';
import RobotoRegular from '../fonts/Roboto-Regular.ttf';
import RobotoMedium from '../fonts/Roboto-Medium.ttf';
import RobotoBold from '../fonts/Roboto-Bold.ttf';
import RobotoBlack from '../fonts/Roboto-Black.ttf';

const fonts = css`
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(${RobotoRegular});
  }
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(${RobotoMedium});
  }
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(${RobotoBold});
  }
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    font-display: swap;
    src: url(${RobotoBlack});
  }
`;

export default fonts;
