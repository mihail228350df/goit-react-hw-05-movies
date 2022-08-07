import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  color: black;
  margin-right: 10px;
  text-decoration: none;
  border: solid 1px black;
  padding: 5px;
  border-radius: 5px;
  &.active {
    color: orange;
    border-color: orange;
  }
`;