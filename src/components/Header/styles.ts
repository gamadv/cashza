import styled from 'styled-components';

export const Container = styled.header`
  background: var(--purple);
  div {
    display: flex;

    h1 {
      color: var(--shape);
      margin-left: 1rem;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 1200px;
  margin-inline: auto;

  padding: 2rem 1rem 10rem;

  button {
    font-size: 1rem;
    color: #fff;

    background: var(--purple-light);
    border: 0;

    padding: 0 2rem;
    border-radius: 0.25rem;

    height: 3rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
