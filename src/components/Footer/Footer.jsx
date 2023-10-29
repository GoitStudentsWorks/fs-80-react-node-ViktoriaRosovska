import Logo from '../../components/Logo/Logo';
import FollowUs from '../FollowUs/FollowUs';
import {
  FooterContainer,
  FooterLogoAndSocial,
  Container,
  FooterNavWrapper,
  FooterContent,
} from './Footer.styled';
import Nav from 'components/Nav/Nav';
import SubscribeForm from 'components/SubscribeForm/SubscribeForm';
import FooterCopyright from './FooterCopyright/FooterCopyright';

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <FooterContent>
          <FooterNavWrapper>
            <FooterLogoAndSocial>
              <Logo />
              <FollowUs />
            </FooterLogoAndSocial>

            <Nav />
          </FooterNavWrapper>
          <SubscribeForm/>
          <FooterCopyright/>
        </FooterContent>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
