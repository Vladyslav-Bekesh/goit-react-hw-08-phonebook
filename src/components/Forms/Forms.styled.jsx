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
