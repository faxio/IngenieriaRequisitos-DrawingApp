import styled from 'styled-components'

export const ContenedorCuadrilla = styled.div`
    background-color: white;
    border: 1px solid black;
    width: 385px;
    height: 385px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: stretch;
    line-height: 0;
    margin-bottom: 2px;
`

export const ContenedorDraw = styled.div`
    padding: 10px;
    display: grid;
    grid-template-columns: 1fr 11fr 1fr;
    grid-column-gap: 4px;
    margin-bottom: 20px;

`

export const Stack = styled.div`
    display: flex;
    flex-direction: column;
`
export const Queue = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
`

export const QueueSpace = styled(Queue)`
    align-items: center;
    justify-content: space-between;
`

export const Header = styled.div`
    background-color: black;
    color: white;
    padding: 10px;
    font-weight: 100;
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const Texto = styled.h2`
    background-color: black;
    color: white;
    padding: 10px;
    font-weight: 100;
    margin-bottom: 10px;
    display: inline;
    margin-right: 10px;
`

export const ContenedorCard = styled.div`
    background-color: white;
`