import styled from "styled-components";

const Wrapper = styled.section`
  width: var(--view-width);
  max-width: var(--max-width);
  margin: 5rem auto;
  h2 {
    color: var(--textColor);
    font-weight: 600;
    margin-bottom: 1rem;
    font-size: 1.875rem;
  }
  p {
    color: var(--textColor);
    font-size: 0.875rem;
    text-transform: capitalize;
  }
  .title {
    color: var(--textColor);
    font-size: 0.85rem;
    font-weight: 500;
  }
  .underline-cart {
    width: 100%;
    height: 1px;
    background: black;
    margin-top: 1.25rem;
  }
  .underline {
    width: 100%;
    height: 1px;
    background: #09090c;
    margin: 0.5rem 0;
  }
  .main-content-wrapper {
    display: grid;
    grid-template-rows: 1fr;
  }
  .content-wrapper {
    display: grid;
    place-items: center;
    gap: 2rem;
    margin: 2rem 0;
    grid-template-columns: repeat(4, 1fr);
  }
  .content-section {
    display: grid;
    grid-template-columns: 1fr 400px;
    gap: 1rem;
    margin-top: 2rem;
  }
  .content {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    width: 100%;
    place-items: center start;
    gap: 1rem;
  }

  .proceed {
    display: inline-block;
    text-transform: uppercase;
    padding: 1rem;
    font-weight: 600;
    width: 100%;
    border: transparent;
    border-radius: 0.5rem;
    background: var(--button-color);
    margin-top: -2rem;
    cursor: pointer;
    &:hover {
      background: var(--button-color);
    }
  }

  a {
    grid-column-start: 2;
  }
  @media (max-width: 1024px) {
    .content-section {
      grid-template-columns: repeat(1, 1fr);
    }
    a {
      grid-column-start: 1;
    }
  }

  .color-wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5rem;
  }
  .color-item {
    width: 15px;
    height: 15px;
    border-radius: 50%;
  }
  .img-container {
    width: 100%;
  }
  img {
    height: 12vh;
    width: 8rem;
    object-fit: cover;
    border-radius: 0.5rem;
  }
  .amont-wrapper {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 1rem;
  }
  .removeBtn {
    display: inline-block;
    background: transparent;
    border: transparent;
    color: var(--button-color);
    font-size: 0.875rem;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
      color: var(--button-color);
    }
  }
  @media (max-width: 875px) {
    .content-wrapper {
      grid-template-columns: repeat(1, 1fr);
    }
    .img-container,
    .content {
      width: auto;
    }
  }
`;

export default Wrapper;
