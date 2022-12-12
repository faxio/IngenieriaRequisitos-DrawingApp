import styled from "styled-components";

export const BotonApp = styled.div`
    min-height: 15px;
    min-width: 15px;
    max-width: 15px;
    max-height: 15px;
    display: inline-block;
    background-color: ${props => props.color? props.color: "white"};
    color: black;
    margin: 2px;
`

export const BotonesInteractivos = styled.button`
    font-size: 20px;
    max-width: 30px;
    max-height: 30px;
    margin-bottom: 8px;
    background-color: white;
    border: 1px solid black;
    & :hover {
        cursor: pointer;
    }
`

export const InputInteractivo = styled.input`
    font-size: 20px;
    max-width: 30px;
    max-height: 30px;
    margin-bottom: 8px;
`


export const Icons = styled.i`
    color: ${props => props.color ? props.color : "black"};
`