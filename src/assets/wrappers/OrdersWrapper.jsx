import styled from "styled-components";

const Wrapper = styled.section`
  width: var(--view-width);
  max-width: var(--max-width);
  margin: 5rem auto;
  h2 {
    color: var(--textColor);
    font-weight: 600;
    margin-bottom: 1rem;
    font-size: 1.875;
  }
  .underline-order {
    width: 100%;
    height: 1px;
    background: black;
    margin-top: 1.25rem;
  }
`;

export default Wrapper;
