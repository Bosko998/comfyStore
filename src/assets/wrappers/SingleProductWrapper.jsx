import styled from "styled-components";

const Wrapper = styled.section`
  width: var(--view-width);
  max-width: var(--max-width);
  margin: 5rem auto;
  h2,
  h3,
  p {
    color: var(--textColor);
  }
  .content-wrapper {
    width: 600px;
  }
  img {
    width: 600px;
    height: 380px;
    border-radius: 0.5rem;
    object-fit: cover;
  }
  .breadcrumbs {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 2rem;
    a {
      text-decoration: none;
      text-transform: capitalize;
      color: var(--textColor);
      &:hover {
        text-decoration: underline;
      }
    }
    p {
      color: var(--textColor);
    }
  }
  .main-wrapper {
    display: flex;
    gap: 3rem;
  }
  option {
    background: var(--primary1);
  }
  .text-wrapper {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 1rem;
    h2 {
      font-weight: 700;
    }
    h3 {
      font-weight: 500;
      font-size: 1.25rem;
    }
    .sum {
      font-size: 1.25rem;
    }
    .text {
      line-height: 2;
    }
  }
  .colors-wrapper {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .circle-colors {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
  .amount-wrapper {
    margin-top: 2rem;
  }

  .active {
    border: 2px solid #bd94f7;
  }
  #selectAmount {
    display: flex;
    margin-top: 1rem;
    margin-bottom: 2rem;
    width: 20rem;
    padding: 1rem;
    background: transparent;
    border: 1px solid #bf95f9;
    border-radius: 0.5rem;
    color: var(--textColor);
    cursor: pointer;
  }
  .addBtn {
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
  @media (max-width: 1024px) {
    .main-wrapper {
      flex-direction: column;
    }
    img {
      width: 380px;
    }
  }
  @media (max-width: 875px) {
    img {
      width: 300px;
      margin: 0 auto;
    }
    .text {
      width: 55%;
    }
  }
`;

export default Wrapper;
