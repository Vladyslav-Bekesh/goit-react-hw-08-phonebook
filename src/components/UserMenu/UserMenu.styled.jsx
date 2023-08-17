import styled from '@emotion/styled';
import queries from '../../utils/mediaQueries';

export const WrapperCss = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  ${queries.mobile} {
    flex-direction:row;
    align-items: center;
    gap: 12px;
  }
`;

export const WelcomeCss = styled.p`
  text-align: right;
`;

export const ButtonCss = styled.button`
  background: linear-gradient(45deg, #ff9900 30%, #f87719);

  padding: 4px 6px;
  border-radius: 4px;
  margin-top: 10px;

  border: none;

  @media ${queries.mobile} {
    margin-top: 0;
  }
`;
