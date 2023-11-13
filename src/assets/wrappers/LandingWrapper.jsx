import styled from "styled-components";

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 521px 1fr;
  gap: 5rem;
  width: var(--view-width);
  max-width: var(--max-width);
  margin: 5rem auto;
  .landing-content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    align-items: baseline;
    h1 {
      color: var(--textColor);
      font-weight: 700;
      text-transform: none;
    }
    p {
      display: inline-block;
      font-size: 1.125rem;
      color: var(--textColor);
      line-height: 2;
    }
  }
  .carousel-main {
    display: flex;
    gap: 1rem;
    align-items: center;
    background: var(--grey-500);
    padding: 1rem;
    border-radius: 1rem;
    overflow-x: hidden;
  }
  .carousel-img {
    display: block;
    text-align: center;
  }
  img {
    width: 20rem;
    height: 28rem;
    object-fit: cover;
    border-radius: 1rem;
  }
  button {
    display: block;
    padding: 1rem 0.75rem;
    text-transform: uppercase;
    background-color: var(--button-color);
    font-size: 0.875rem;
    border: transparent;
    border-radius: 0.5rem;
    color: var(--buttonTextColor);
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s ease-in-out all;
    &:hover {
      background: var(--button-hover-color);
    }
  }
  @media (max-width: 875px) {
    grid-template-columns: 335px 1fr !important;
    text-align: center;
    .landing-content {
      align-items: center;
    }
  }
  @media (max-width: 1020px) {
    grid-template-columns: 600px 1fr;
    .carousel-main {
      display: none;
    }
  }
`;

export default Wrapper;
