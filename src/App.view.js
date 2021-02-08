import { NavLink } from "react-router-dom";
import styled from "styled-components";

const activeClassName = 'active-link';

const Link = styled(NavLink).attrs({activeClassName})`
  &.${activeClassName} {
    color: gray;
  }
`;

export default Link;