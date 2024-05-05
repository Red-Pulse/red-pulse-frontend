import UIContainer from '../UI/UIContainer';
import { FC } from 'react';
import './Footer.scss';
import LogoSmall from '../../assets/img/logo-small.png';
import UITypography from '../UI/UITypography';

const Footer: FC = () => {
  return (
    <footer className="footer">
      <UIContainer className="footer__container">
        <img src={LogoSmall} width="60px" />
        <UITypography typography="text_fz16_lh20" fontWeight={400}>
          <i>© 2024 Red Pulse, Inc. All rights reserved.</i>
        </UITypography>
      </UIContainer>
    </footer>
  );
};

export default Footer;
