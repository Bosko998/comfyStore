import styled from "styled-components";

const Wrapper = styled.div`
  .card-body {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: left;
    background: var(--primary);
    padding: 2rem;
    border-radius: 0.5rem;
    height: fit-content;
    margin-bottom: 1rem;
  }
  .amount-div {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
  }

  p {
    color: var(--textColor);
    font-size: 0.875rem;
    text-transform: capitalize;
  }
  .underline {
    width: 100%;
    height: 1px;
    background: #09090c;
    margin: 0.5rem 0;
  }
`;
export default Wrapper;
