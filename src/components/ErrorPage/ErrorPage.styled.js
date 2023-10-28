import background1_sm from '../../assets/images/404/404_iced_tea@1x_sm.png';
import background2_sm from '../../assets/images/404/404_iced_tea@2x_sm.png';
import background1_md from '../../assets/images/404/404_iced_tea@1x_md.png';
import background2_md from '../../assets/images/404/404_iced_tea@2x_md.png';
// import backgroundLeftCircle from '../../assets/image/404/Ellipseleft.png';
// import background222 from '../../assets/image/404/Ellipse222.png';
// import background223 from '../../assets/image/404/Ellipse223.png';
import styled from 'styled-components';

const ErrorPageImage = styled.div`
  width: 123px;
  height: 156px;
  background-image: url(${background1_sm});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media screen and (min-device-pixel-ratio: 2) and (max-width: 767px),
    screen and (min-resolution: 192dpi) and (max-width: 767px),
    screen and (min-resolution: 2dppx) and (max-width: 767px) {
    background-image: url(${background2_sm});
  }
  @media screen and (min-width: 768px) {
    background-image: url(${background1_md});
    width: 158px;
    height: 201px;
  }
  @media screen and (min-device-pixel-ratio: 2) and (min-width: 768px),
    screen and (min-resolution: 192dpi) and (min-width: 768px),
    screen and (min-resolution: 2dppx) and (min-width: 768px) {
    background-image: url(${background2_md});
  }
`;

const ErrorPageText = styled.p`
  color: var(--white-ten-color);
  font-family: Manrope;
  font-size: 200px;
  font-style: normal;
  font-weight: 600;
  line-height: 200px;
`;

// const ErrorPageSection = styled.section`
//   width: 100vw;
//   height: 100vh;
//   background-image: url(${backgroundLeftCircle}), url(${background223}),
//     url(${background222});
//   background-repeat: no-repeat;
//   background-position: left center, bottom left, bottom right;
// `;

export { ErrorPageText, ErrorPageImage };
