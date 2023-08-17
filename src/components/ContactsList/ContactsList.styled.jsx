import styled from '@emotion/styled';

export const ContactList = styled.div`
  width: 480px;
  border: tomato 1px solid;
  padding: 32px;
  border-radius: 15px;
  margin-left: auto;
  margin-right: auto;

  &:not(:last-child) {
    margin-bottom: 13px;
  }
`;

export const ContactItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
