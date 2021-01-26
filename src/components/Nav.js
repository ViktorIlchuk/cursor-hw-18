import styled from "styled-components";

const Nav = styled.nav`
    background: black;
    padding: 10px 25px;
    > * {
        color: #fff;
        text-decoration: none;
        margin-right: 10px;
        :hover {
            text-decoration: underline;
        }
    }
`

export default Nav;