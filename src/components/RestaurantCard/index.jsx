
import React, { useState } from 'react';
import ReactStars from "react-rating-stars-component";

import { Restaurant, RestaurantInfo, Content, RestaurantPhoto, Title, Address } from './styles';
import restaurante from '../../assets/restaurante-fake.png';

const RestaurantCard = () => <Restaurant>
    <RestaurantInfo>
        <Title>Nome do Resturante</Title>
        <ReactStars count={5} isHalf activeColor="#e7711c" edit={false} value={4}></ReactStars>
        <Address>Rua Baltazar Carrasco dos Reis, 863</Address>
    </RestaurantInfo>
    <img src={restaurante} alt="Foto do Restaurante" />
</Restaurant>;

export default RestaurantCard;