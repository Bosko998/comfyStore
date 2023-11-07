import styled from "styled-components";

const Wrapper = styled.nav`
  .top-header {
    background: var(--top-nav-winter);
    display: flex;
    margin: 0 auto;
    gap: 1rem;
    justify-content: flex-end;
    padding: 0.5rem 2rem;
    a {
      font-size: 0.85rem;
      text-decoration: none;
      color: #d1d7db;
    }
  }
  ul {
    display: flex;

    list-style: none;
  }
  .nav-center {
    background: var(--primary);
  }
  .userAcc {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    p {
      color: var(--white);
      font-size: 0.875rem;
    }
  }
  .logout {
    display: inline-block;
    background: transparent;
    border: 1px solid var(--blue-pink);
    color: var(--blue-pink);
    padding: 0.175rem 0.5rem;
    border-radius: 0.5rem;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 0.75rem;
    text-align: center;
    cursor: pointer;
    &:hover {
      color: var(--black);
      background: var(--pink);
    }
  }
  .userAccount {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
  .bottom-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 0.75rem 0.75rem;
    width: 94vw;
    max-width: var(--max-width);
  }
  .logo {
    font-size: clamp(1.5rem, 3vw, 2rem);
    text-decoration: none;
    font-weight: 700;
    letter-spacing: 2px;
    span {
      color: var(--black);
      background: var(--logo-winter);
      border-radius: 0.5rem;
      padding: 0.175rem 1rem;
      font-weight: 500;
      transition: 0.3s ease-in-out all;
    }
    &:hover span {
      background: var(--button-hover-color);
    }
  }
  .end-header {
    display: flex;
    position: relative;
    gap: 1rem;
    align-items: center;
    justify-content: center;
  }
  .nav-links {
    display: flex;
    flex-direction: row;
    margin-top: 1rem;
    margin-top: 0;
  }
  .nav-link {
    display: block;
    color: var(--textColor);
    text-decoration: none;
    text-transform: capitalize;
    font-size: 0.9rem;
    padding: 0.7rem 1rem 0.7rem 1rem;
    transition: var(--transition);
    border-radius: 0.25rem;

    &:hover {
      background: var(--hover-link);
    }
  }
  .dark-toggle {
    display: flex;
    background: none;
    border: transparent;
    font-size: 1.25rem;
    cursor: pointer;
    svg {
      color: var(--textColor);
      cursor: pointer;
    }
  }
  .cartCounter {
    position: absolute;
    right: -10px;
    top: -7px;
    color: var(--picture-border);
    background: var(--button-hover-color);
    border: 1px solid var(--button-hover-color);
    font-size: 0.75rem;
    border-radius: 50%;
    cursor: pointer;
    padding: 0.075rem 0.375rem;
  }
  .active {
    background: var(--top-nav-winter);
    color: var(--white);
    border-radius: 0.25rem;
  }

  @media (max-width: 1025px) {
    .nav-links {
      display: none;
    }
    p {
      right: -4px;
    }
    ul {
      display: flex;
      flex-direction: column;
      position: absolute;
      margin-top: 1.75rem;
      left: -1rem;
      background: #181920;
      width: 13rem;
      padding: 0.5rem;
      border-radius: 1rem;
    }
    a {
      padding: 0.5rem 0.5rem !important;
    }
    .cartCounter {
      right: -2px;
    }
  }

  .start-header {
    display: inline-block;
    position: relative;
    cursor: pointer;
    background: transparent;
    border: transparent;
    padding: 0.5rem 0.5rem;
    border-radius: var(--borderRadius);
    &:hover {
      background-color: #45464a;
    }
  }
  .hamburger {
    width: 1.5rem;
    height: 1.5rem;
    color: var(--textColor);
  }
  .cart svg {
    color: var(--textColor);
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

export default Wrapper;
