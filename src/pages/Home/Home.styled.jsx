import styled from '@emotion/styled';
import queries from '../../utils/mediaQueries';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 320px;
  margin-left: auto;
  margin-right: auto;
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

export const Title = styled.h1`
  font-family: monospace;
  font-size: 32px;
  color: white;
  margin: 0 auto;

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