import styled from "styled-components";

export const Container = styled.div`
    padding: 2rem;
    background-color: #f4f4f4; 
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    text-align: center;
    font-family: 'Poppins', sans-serif; 
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

export const MovieList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    column-gap: 1.5rem; 
    row-gap: 2rem; 
`;

export const Movie = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    background-color: #fff; 
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

    img {
        width: 100%;
        border-radius: 10px;
        margin-bottom:;
    }

    span {
        font-size: 20px;
        text-align: center;
        color: #333; 
        margin-top: 15px;
        font-weight: 600;
    }

    a {
        text-decoration: none;
        transition: all 0.3s;
        color: #007bff; 
    }

    a:hover {
        transform: scale(1.05); 
    }
`;

export const Btn = styled.button`
    margin-top: 10px;
    padding: 0.5rem 2rem; 
    border: none;
    border-radius: 5px; 
    color: #fff;
    background-color: #f4f4f4;;
    font-weight: 600;
    font-size: 20px; 
    cursor: pointer;
    transition: all 250ms;
    font-family: 'Poppins', sans-serif;
    outline: none;
    border: 1px solid transparent; 
    background-color: #f4f4f4;
    color: #555; 
    &:hover {
        background-color: #eee; 
        transform: scale(1.05);
    }
`;
