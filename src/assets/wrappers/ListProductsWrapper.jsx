import styled from "styled-components";

const Wrapper = styled.section`
  width: var(--view-width);
  max-width: var(--max-width);
  margin: 5rem auto;
  h2 {
    color: var(--white);
    font-weight: 600;
  }

  img {
    width: 100%;
    height: 200px;
    border-radius: 0.25rem;
    object-fit: cover;
  }
  .listProducts {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;
    gap: 1rem;
    margin-top: 3rem;
  }
  .singleLinelist {
    grid-template-columns: repeat(1, 1fr) !important;
  }
  .singleProduct {
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
  .singleLineProduct {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
  .lineImg {
    width: 150px;
    height: 150px;
  }
  h4 {
    color: var(--textColor);
    font-weight: 600;
    margin-top: 1rem;
  }
  p {
    color: var(--listProducts-winter-price);
    text-align: center;
  }
  @media (max-width: 1020px) {
    .listProducts {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  .page-wrapper {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: var(--view-width);
    max-width: var(--max-width);
  }
  .contentProduct {
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    gap: 1rem;
  }
  .page-number {
    display: flex;
    color: var(--white);
    background: var(--primary);
    margin-top: 5rem;
    justify-content: center;
    align-items: center;
    border-radius: var(--borderRadius);
    .btn {
      display: inline-block;
      border: transparent;
      background: transparent;
      text-transform: uppercase;
      padding: 1rem;
      font-weight: 550;
      color: var(--white);
      border-radius: var(--borderRadius);
      transition: 0.3s ease-in-out all;
      cursor: pointer;
    }
    .active {
      background: var(--blackHover);
    }
  }
`;

export default Wrapper;
