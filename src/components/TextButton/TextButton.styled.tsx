import styled from '@emotion/styled';
import queries from '../../utils/mediaQueries';

export const TextButtonCss = styled.button`
  background: linear-gradient(141.22deg, #ffc226 20%, #f84119 80%);
  display: inline-block;
  padding: 8px 20px;
  border-radius: 30px;
  margin-top: 10px;
  border: none;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:disabled {
    opacity: 0.5;
    cursor: default;

    background-color: #444444;
  }

  &:enabled {
    opacity: 1;
  }

  &:not(:disabled):hover {
    background-color: orangered;
    transform: scale(1.1);
  }
  
  ${queries.mobile} {
    font-size: 15px;

    padding: 8px 15px;
    border-radius: 26px;
    margin-left: 10px;
    margin-top: 0;
  }
  ${queries.tablet} {
    font-size: 19px;

    padding: 10px 35px;
    border-radius: 28px;
    margin-top: 0;
  }
`;
