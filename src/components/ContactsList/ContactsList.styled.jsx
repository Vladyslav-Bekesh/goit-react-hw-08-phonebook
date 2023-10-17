import styled from '@emotion/styled';
import queries from '../../utils/mediaQueries';

export const ContactList = styled.ul`
  width: 280px;
  border: tomato 1px solid;
  padding: 10px;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;

  &:not(:last-child) {
    margin-bottom: 13px;
  }
  ${queries.mobile} {
    padding: 18px;
    width: 320px;
  }
  ${queries.tablet} {
    padding: 25px;
    width: 370px;
  }
`;

export const ContactItem = styled.li`
  display: block;
  ${queries.mobile} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const DeleteBtn = styled.button`
  display: block;
  width: 120px;
  height: 32px;

  border: 1px solid black;
  background: linear-gradient(141.22deg, #ffc226 20%, #f84119 80%);
  border-radius: 74px;
  color: #111111;
  cursor: pointer;

  &:hover {
    background: linear-gradient(141.22deg, #cb4e13 9.4%, #dcb311 91.91%);
    color: white;
  }
  margin: 0 auto;
  margin-top: 10px;
`;

export const TextWrap = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContactName = styled.span`
  color: white;
  font-weight: 500;
  font-size: 18px;
`;

export const ContactNumber = styled.span`
  color: white;
  margin-left: 8px;
`;
