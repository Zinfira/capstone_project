import styled from 'styled-components';

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.43rem;
  background: transparent;
  border: 0.05rem solid var(--grey1);
  border-color: ${props => props.cart ? "var(--color3)" : "var(--grey1)"};
  color: ${prop => prop.cart ? "var(--color3)" : "var(--mainDark)"};
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover{
    background: ${prop => prop.cart ? "var(--color3)" : "var(--color2)"};
    color: ${prop => prop.cart ? "var(--color2)" : "var(--mainDark)"};
  }
  &:focus {
    outline: none;
  }
`