import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  width: var(--view-width);
  max-width: var(--max-width);
  margin: 20rem auto;
  h1 {
    color: var(--errorh1);
    font-size: 8rem;
    font-weight: 600;
  }
  h2 {
    color: var(--font-color);
    font-size: 3rem;
    font-weight: 600;
    text-transform: lowercase;
  }
  p {
    color: var(--font-color);
  }
  button {
    display: inline-block;
    padding: 1rem;
    text-transform: uppercase;
    background: var(--winter-purple-alt);
    border: transparent;
    font-weight: 600;
    color: var(--backgroundColor);
    border-radius: 0.5rem;
    font-size: 0.875rem;
    transition: 0.3s ease-in-out all;
    cursor: pointer;
    &:hover {
      background: var(--button-purple-hover);
    }
  }
`;

export default Wrapper;
