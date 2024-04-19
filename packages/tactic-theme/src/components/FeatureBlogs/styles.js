import styled from 'styled-components'

export const MasonryLayout = styled.section`
    columns: 3 320px;
    column-gap: .5em;
    padding: 2rem;
    background: #f8f8f8;
    width: calc(100% - 10%);
`

export const Blog = styled.a`
  margin: 10px;
  display: inline-block;
  cursor: pointer;
  text-decoration: none;

  &:hover{
    opacity: 0.8;
  }
`

export const Link = styled.a`
  text-decoration: none;
  color: #2b2b2b;
  font-weight: bold;
  font-family: 'Poppins', sans-serif;
  line-height: 0rem;
`

export const Category = styled.span`
  color: #2b2b2b;
  opacity: 0.8;
  display: block;
  margin-top: 0.5rem;
`

export const Image = styled.img`
  border-radius: .7rem;
  margin-bottom: .9rem;
`
