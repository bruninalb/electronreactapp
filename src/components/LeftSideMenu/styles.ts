import styled from "styled-components";

export const Container = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  padding: 1rem;
  background-color: var(--gray);
  display: flex;
  flex-flow: column;
  align-items: center;

`
export const Menu = styled.ul`
  list-style: none;

  li {

    display: flex;
    align-items: center;
    padding: 0.5rem 0;

    &:hover {
      cursor: pointer;

      img {
        filter: grayscale(0);
      }
    }

    img {
      height: 2rem;
      filter: grayscale(70%);

      &:hover {
        cursor: pointer;
      }
    }


    a {
      margin-left: 1rem;
    }

    &.off {
      a {
        display: none;
        border-bottom: 1px solid green;
      }
    }

    &.on {
      img {
        filter: grayscale(0);
      }

    }
  }

`
export const MenuButton = styled.span`
  color: var(--primary);
  display: block;
  font-size: 2rem;
  filter: grayscale(70%);
  transform: rotate(90deg);

  &:hover {
    cursor: pointer;
    filter: grayscale(0);
  }
`

