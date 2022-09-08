import styled from "styled-components";

type ContainerProps = {
  done: boolean;
}
export const Container = styled.div(({done}: ContainerProps) => (
  `
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  background-color: #20212C;

  input {
    width: 22px;
    height: 22px;
  }

  label {
    color: #CCC;
    margin-left: 15px;
    text-decoration: ${done ? 'line-through' : 'initial'}
  }
`
))