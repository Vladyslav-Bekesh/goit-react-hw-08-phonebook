import styled from '@emotion/styled';
import queries from '../../utils/mediaQueries';

export const HeaderCss = styled.header`
  width: 320px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  
  margin-bottom: 16px;
  
  border-bottom: 1px solid #2a363b;
  ${queries.mobile} {
    width: 400px;
  }
  ${queries.tablet} {
    width: 768px;
  }
`;
