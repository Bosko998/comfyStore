import styled from "styled-components";

const Wrapper = styled.section`
  width: var(--view-width);
  max-width: var(--max-width);
  margin: 5rem auto;
  h2 {
    color: var(--textColor);
    font-weight: 600;
    margin-bottom: 1rem;
    letter-spacing: 3px;
    font-size: 1.875;
  }
  .underline-checkout {
    width: 100%;
    height: 1px;
    background: black;
    margin: 1.25rem 0;
  }
  .shipping-info {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }

  form {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;

    justify-content: center;
    gap: 1rem;
  }
  .form-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: start;
    justify-content: center;
    flex-direction: column;
  }
  label,
  p {
    color: var(--textColor);
    text-transform: capitalize;
  }
  input {
    border: 1px solid var(--winter-products-border);
    width: 100%;
    padding: 0.75rem;
    border-radius: 0.5rem;
    background: transparent;
  }
  .place-order {
    display: inline-block;
    text-transform: uppercase;
    padding: 1rem;
    font-weight: 600;
    width: 100%;
    border: transparent;
    border-radius: 0.5rem;
    background: var(--button-color);
    margin-top: -2rem;
    grid-column-start: 2;
    margin-top: 2rem;
    cursor: pointer;
    &:hover {
      background: var(--button-color);
    }
  }
  @media (max-width: 875px) {
    .shipping-info {
      grid-template-columns: none;
    }
  }
`;

export default Wrapper;
