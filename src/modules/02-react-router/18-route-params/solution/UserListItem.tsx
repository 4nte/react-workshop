import React from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  display: flex;
  padding: 10px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #eaeaea;
  &:hover {
    background-color: #eaeaea;
  }
`;

const UserListItem: React.FC<{id: number, username: string}> = ({ id, username }) => {
  return (
    <StyledLink to={`/user/${id}`}>
      {username}
    </StyledLink>
  );
};

export default UserListItem;
