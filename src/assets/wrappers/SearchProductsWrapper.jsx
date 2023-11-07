import styled from "styled-components";

const Wrapper = styled.section`
  width: var(--view-width); //90vw
  max-width: var(--max-width); //1120px
  margin: 5rem auto;
  .search-div {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    border-radius: 0.5rem;
    place-items: center;

    background: var(--primary);
    padding: 1.75rem;
    gap: 2rem;
  }
  .content-div,
  .content-div-sort {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }
  .progress-div {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  #progress {
    padding: 0.075rem 0;
    cursor: pointer;
  }

  .progress-div-content,
  .sub-content {
    display: flex;
    justify-content: space-between;
  }
  .shipping-div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .btn-div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;

    width: 100%;
  }
  label,
  p {
    color: var(--textColor);
    text-transform: lowercase;
    font-weight: 500;
  }
  input {
    background: var(--backgroundColor);
    border: 1px solid var(--winter-products-border);
    padding: 0.5rem 0.375rem;
    border-radius: 0.5rem;
    color: var(--textColor);
    font-weight: 600;
  }
  select {
    background: var(--backgroundColor);
    border: 1px solid var(--winter-products-border);
    padding: 0.5rem 0.375rem;
    border-radius: 0.5rem;
    color: var(--textColor);
    font-weight: 600;
    cursor: pointer;
  }
  input[type="checkbox"] {
    height: 1.25rem;
    width: 1.25rem;
    clip-path: circle(46% at 50% 50%); /* Set the clip path of circle*/
    animation: 0.2s ease-out;
    cursor: pointer;
  }

  .search-button {
    display: inline-block;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;

    text-transform: uppercase;
    font-size: 0.875rem;
    padding: 0.5rem 6.2rem;
    font-weight: 600;
    border: transparent;
    border-radius: 0.5rem;
    background: var(--button-color);
    transition: 0.1s ease-in all;
    cursor: pointer;
    &:hover {
      background: var(--button-hover-color);
    }
  }
  .reset-button {
    display: inline-block;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    font-size: 0.875rem;
    text-transform: uppercase;
    padding: 0rem 6.2rem;
    font-weight: 600;
    border: transparent;
    border-radius: 0.5rem;
    background: var(--button-winter-orange);
    transition: 0.1s ease-in all;
    cursor: pointer;
    &:hover {
      background: var(--button-winter-hover-orange);
    }
  }
  @media (max-width: 1024px) {
    .search-div {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
  .count-wrapper {
    margin-top: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      width: 100%;
    }
  }
  .icons {
    display: flex;
    width: 100%;
    justify-content: right;
    align-items: center;
    gap: 1rem;
  }
  .firstBtnLayout,
  .secondBtnLayout {
    display: flex;
    padding: 0.25rem;
    font-size: 1.5rem;
    border: transparent;
    cursor: pointer;
    background: transparent;
    border-radius: 50%;
    color: var(--grey-55);
  }
  .underline {
    width: 100%;
    height: 0.05rem;
    background: var(--primary);
    border-radius: 0.5rem;
    margin-top: 1.25rem;
  }

  .activeLayout {
    display: flex;
    padding: 0.25rem;
    font-size: 1.5rem;
    border: transparent;
    cursor: pointer;
    border-radius: 50%;
    background: var(--button-color);
    transition: 0.3s ease-in-out all;
    svg {
      color: var(--backgroundColor);
    }
    &:hover {
      background: var(--button-hover-color);
    }
  }
`;

export default Wrapper;
