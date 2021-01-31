import React from 'react';
import { useParams } from "react-router";
import { users } from "../exercise/data";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #f5f5f5;
  width: 50%;
  margin: auto;
`;

const Row = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eaeaea;
`;

const UserDetails: React.FC = () => {
  const { id } = useParams<{id: string}>();

  const user = users.find(user => user.id === parseInt(id));

  if (!user) {
    return <div>User not found!</div>
  }
  const { firstName, lastName, username, email, city, address, gender} = user;

  return (
    <Wrapper>
      <Row>
        <div>First name:</div>
        <div>{firstName}</div>
      </Row>
      <Row>
        <div>Last name: </div>
        <div>{lastName}</div>
      </Row>
      <Row>
        <div>Username: </div>
        <div>{username}</div>
      </Row>
      <Row>
        <div>Email: </div>
        <div>{email}</div>
      </Row>
      <Row>
        <div>Address: </div>
        <div>{address}</div>
      </Row>
      <Row>
        <div>City: </div>
        <div>{city}</div>
      </Row>
      <Row>
        <div>Gender: </div>
        <div>{gender}</div>
      </Row>
    </Wrapper>
  );
}

export default UserDetails;
