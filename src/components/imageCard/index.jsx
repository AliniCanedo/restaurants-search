import React from 'react';
import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  justify-content: center;
  min-width: 90px;
  padding: 5px;
  height: 90px;
  border-radius: 8px;
  background-image: url(${(props) => props.photo});
  background-size: cover;
  p {
    margin-left: 6px;
    margin-top: 10px;
  }
`;
const Title = styled.span`
  font-family: ${(props) => props.theme.fonts.regular};
  color: #fff;
  font-size: 16px;
`;
const ImageCard = ({ photo, title }) => <Card photo={photo} >
  <Title>{title}</Title>
</Card>

export default ImageCard;