import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 2rem 0;
`;

export const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 8fr;
  gap: 1.2rem 1.2rem;

  @media (max-width: 960px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Item = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.11);

  h3 {
    color: #212121;
  }

  p {
    color: #707070;
    margin-bottom: 0;
  }
`;

export const Content = styled.div`
  padding-bottom: 0.6rem;

  display: flex;
  align-items: flex-start;

  div {
    &:first-child {
      margin-right: 0.5rem;
    }

    h3 {
      margin-bottom: 0;
    }

    span {
      color: #888;
      margin-right: 0.5rem;
    }
  }
`;

export const Description = styled.div`
  align-items: center;
  color: #000;
  font-size: 12pt;
`;
