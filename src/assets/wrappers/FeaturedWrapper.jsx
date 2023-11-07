import styled from "styled-components";

const Wrapper = styled.section`
  width: var(--view-width);
  max-width: var(--max-width);
  margin: 5rem auto;
  h2 {
    color: var(--white);
    font-weight: 600;
  }
  .underline {
    height: 1px;
    width: 100%;
    margin-top: 2rem;
    background: #09090c;
  }

  img {
    width: 100%;
    height: 200px;
    border-radius: 0.25rem;
    object-fit: cover;
  }
  .featured-products {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;
    gap: 1rem;
    margin-top: 3rem;
  }
  .single-product {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 1rem;
    padding: 1.5rem;
    border: 1px solid var(--picture-border);
    background: var(--backgroundColor);
    box-shadow: 0 25px 25px -12px rgb(0 0 0 / 0.25);
    border-radius: 1rem;
    transition: 0.3s ease-in-out all;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
    }
  }
  h4 {
    color: var(--textColor);
    font-weight: 600;
    margin-top: 1rem;
  }
  p {
    color: var(--purple);
  }
  @media (max-width: 1020px) {
    .featured-products {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

export default Wrapper;
