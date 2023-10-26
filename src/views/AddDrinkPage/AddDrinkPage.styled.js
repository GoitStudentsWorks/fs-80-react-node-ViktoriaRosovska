import { ReactSVG } from 'react-svg';
import styled from 'styled-components';

const AddPhotoContainer = styled.div`
  width: 335px;
  height: 320px;
  background-color: var(--dark-blue-fifty-color);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 18px;
`;

const AddDrinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const AddBtn = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 6px;
  background-color: var(--white-color);
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    border: 1px solid var(--dark-blue-twenty-color);
    & svg {
      stroke: var(--dark-blue-fifty-color);
    }
  }
`;

const ReactSVGIcon = styled(ReactSVG)`
  & div svg {
    width: 29px;
    height: 29px;
    stroke: var(--dark-blue-color);
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export { AddPhotoContainer, AddDrinkContainer, AddBtn, ReactSVGIcon };
