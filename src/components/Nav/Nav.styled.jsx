import styled from "styled-components";
import { Link } from 'react-router-dom';

export const NavList = styled.ul`
display: flex;
flex-direction: column;
gap: 14px;


@media screen and (min-width: 768px) {
    gap: 16px;
    margin-top: 40px;
}

@media screen and (min-width: 1440px) {
    gap: 24px;
    margin-top: 0;
}
`

export const NavItem = styled.li`
transition: var(--transition);

&:hover,
  &:focus {
    transform: scale(1.1);
    text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;
  }
`

export const NavLink = styled(Link)`
color: var(--white-color);
`