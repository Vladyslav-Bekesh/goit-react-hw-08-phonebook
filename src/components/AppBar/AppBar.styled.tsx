import styled from '@emotion/styled';
import queries from '../../utils/mediaQueries';

export const HeaderCss = styled.header`
  width: 320px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7px 0;

  margin-bottom: 16px;

  border-bottom: 1px solid #2a363b;
  ${queries.mobile} {
    padding: 10px 0;
    width: 400px;
  }
  ${queries.tablet} {
    padding: 15px 0;
    width: 768px;
  }
  ${queries.desktop} {
    padding: 15px 0;
    width: 1020px;
  }
`;
