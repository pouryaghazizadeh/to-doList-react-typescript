import styled from "styled-components";



export const SingleTodos = styled.form`
  display: flex;
  border-radius: 5px;
  padding: 20px;
  margin-top: 15px;
  /* background-image: url("https://img.freepik.com/free-photo/crumpled-yellow-paper-background-close-up_60487-2390.jpg?size=626&ext=jpg"); */
  transition: 0.2s;
  background: linear-gradient(#c0392b,
#8e44ad);



`

export const SingleText = styled.span`
  flex: 1;
  padding: 5px;
  border: none;
  font-size: 20px;

  &:focus{
    outline: none;
  }

`
export const SingleTextNotDone = styled.s`
  flex: 1;
  padding: 5px;
  border: none;
  font-size: 20px;

  &:focus{
    outline: none;
  }

`

export const Icon = styled.span`
  margin-left: 10px;
  font-size: 25px;
  cursor: pointer;
`
