import styled from "styled-components";

export const Container = styled.div`
    padding: 2rem;
    background-color: #f4f4f4; /* Fundo creme */
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    text-align: center;
    font-family: 'Poppins', sans-serif; /* Fonte Poppins */

    h1 {
        margin: 2rem 0 4rem; /* Espaçamento ajustado */
        font-size: 28px; /* Tamanho de fonte aumentado */
        font-weight: 600; /* Peso da fonte aumentado */
        color: #555; /* Cor do título */
    }
`;

export const SelectWrapper = styled.div`
  position: relative;
  select {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: #fff;
    font-size: 16px;
    color: #333;
  }
`;

export const SearchBar = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;
  font-size: 16px;
  color: #333;
  margin-top: 1rem;
`;


export const MovieList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    column-gap: 1.5rem; /* Espaçamento reduzido */
    row-gap: 2rem; /* Espaçamento reduzido */
`;

export const Movie = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    background-color: #fff; /* Fundo branco */
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

    img {
        width: 100%;
        border-radius: 10px;
        margin-bottom:;
    }

    span {
        font-weight: 600;
        font-size: 20px;
        text-align: center;
        color: #333; /* Cor do texto ajustada */
        margin-top: 15px;
    }

    a {
        text-decoration: none;
        transition: all 0.3s;
        color: #007bff; /* Cor do link azul */
    }

    a:hover {
        transform: scale(1.05); /* Efeito de escala aumentado no hover */
    }
`;

export const Btn = styled.button`
    margin-top: 10px;
    padding: 0.5rem 2rem; /* Botão menor */
    border: none;
    border-radius: 5px; /* Borda arredondada */
    color: #fff;
    background-color: #f4f4f4;;
    font-weight: 600;
    font-size: 20px; /* Tamanho de fonte reduzido */
    cursor: pointer;
    transition: all 250ms;
    font-family: 'Poppins', sans-serif;
    outline: none;
    border: 1px solid transparent; /* Borda transparente */
    background-color: #f4f4f4; /* Fundo creme */
    color: #555; /* Cor do botão */
    &:hover {
        background-color: #eee; /* Cor do botão ao passar o mouse */
        transform: scale(1.05);
    }
`;
