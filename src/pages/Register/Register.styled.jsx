import styled from '@emotion/styled';

export const FormContainerCss = styled.div`
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

export const FormCss = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
  color: white;
  border: 1px solid white;
  border-radius: 15px;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  padding: 12px;
`;

export const RegisterBtnCss = styled.button`
  display: inline-block;
  padding: 10px 8px;
  border: 0;
  border-radius: 15px;
  min-width: 120px;

  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  background-color: #f87719;
  color: white;

  &:hover {
    background-color: orangered;
    opacity: 1;
  }
`;

export const FormLabelCss = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 12px;
`;

export const FormInputCss = styled.input`
  color: white;
  background-color: inherit;
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: #f87719 1px solid;
  border-radius: 15px;
  outline: none;
  padding: 8px 10px;
  margin-top: 8px;

  &::placeholder {
    font: inherit;
    font-size: 18px;
    text-align: center;
  }
`;
