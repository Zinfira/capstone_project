import styled from 'styled-components';

export const ButtonContainer = styled.button`
  text-tranform: capitalize;
  font-size: 1.43rem;
  background: transparent;
  border: 0.05rem solid var(--grey1);
  color: var(--grey1);
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover{
    background: var(--grey1);
    color: var(--color2);
  }
  &:focus {
    outline: none;
  }
`