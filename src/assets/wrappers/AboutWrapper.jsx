import styled from "styled-components";

const Wrapper = styled.section`
  width: var(--view-width);
  max-width: 670px;
  margin: 5rem auto;
  .header-about {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 2rem;
  }
  h1 {
    color: var(--textColor);
    font-weight: 700;
    text-transform: none;
  }
  .comfy {
    color: var(--textColor);
    background: var(--pinkMain);
    color: var(--purple2);
    font-weight: 700;
    letter-spacing: 2px;
    border-radius: 1rem;
    padding: 1rem 1.5rem;
    font-size: clamp(2rem, 5vw, 2.5rem);
  }
  p {
    color: var(--textColor);
    line-height: 2;
    font-size: 1.125rem;
  }
  @media (max-width: 875px) {
    .header-about {
      flex-direction: column;
    }
  }
`;

export default Wrapper;
