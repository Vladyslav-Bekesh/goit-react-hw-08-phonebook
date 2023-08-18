import styled from '@emotion/styled';
import queries from '../../utils/mediaQueries';

export const FormCss = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
  color: white;

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

  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  cursor: pointer;
  outline: none;
  background: linear-gradient(141.22deg, #ffc226 20%, #f84119 80%);
  color: white;

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
`;

export const FormLabelCss = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 12px;
  ${queries.mobile} {
    width: 479px;
  }
  ${queries.tablet} {
    width: 768px;
  }
  ${queries.desktop} {
    width: 1024px;
  }
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

  ${queries.mobile} {
    width: 480px;
  }
  ${queries.tablet} {
    width: 570px;
  }
`;
