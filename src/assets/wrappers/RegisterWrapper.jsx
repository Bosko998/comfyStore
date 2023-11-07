import styled from "styled-components";

const Wrapper = styled.section`
  width: 50vw;
  max-width: 450px;
  margin: 10rem auto;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  border-radius: var(--borderRadius);
  form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    padding: 5rem;
    gap: 1rem;
    background: var(--backgroundColor);
  }
  h2 {
    text-align: center;
    color: var(--textColor);
    font-weight: 700;
  }
  .emailWrapper,
  .passwordWrapper,
  .userNameWrapper {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
  }
  label {
    text-transform: capitalize;
    color: var(--textColor);
    font-size: 0.875;
  }
  input {
    padding: 0.75rem 1.75rem;
    border: 1px solid var(--winter-input-border);
    color: var(--textColor);

    background: transparent;
    border-radius: var(--borderRadius);
  }
  .btns {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1rem;
  }
  .loginBtn {
    display: inline-block;
    text-transform: uppercase;
    font-weight: 600;
    background: var(--button-color);
    border: transparent;
    font-size: 0.875rem;
    border-radius: var(--borderRadius);
    font-weight: 500;
    padding: 1rem 1.75rem;
    transition: 0.3s ease-in-out all;
    cursor: pointer;
    &:hover {
      background: var(--button-hover-color);
    }
  }
  .guestBtn {
    display: inline-block;
    text-transform: uppercase;
    background: #bf95f9;
    border: transparent;
    font-size: 0.875rem;
    border-radius: var(--borderRadius);
    font-weight: 600;
    padding: 1rem 1.75rem;
    transition: 0.3s ease-in-out all;
    cursor: pointer;
    &:hover {
      background: #aa73f7;
    }
  }
  .formFooter {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    p {
      color: var(--textColor);
    }
    .registerBtn {
      border: transparent;
      background: transparent;
      color: var(--button-color);
      text-transform: capitalize;
      font-size: 1rem;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
        color: var(--button-hover-color);
      }
    }
  }
`;

export default Wrapper;
