import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 40px;
    gap: 20px;
    background-color: var(--white);
    border-radius: 10px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    padding: 30px;

`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 20px;
    gap: 10px;
`;

export const OrderButton = styled.div`
    display: flex;
    flex-direction: center;
    gap: 10px;
    
    button {
        padding: 5px 10px;
        font-size: 16px;
        border-radius: 10px;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
        background-color: var(--light-grey);
        cursor: pointer;
    }
`;

export const ListRepo = styled.ul`
    display: flex;
    flex-direction: column;
    font-size: 20px;
    gap: 10px;
    list-style: none;
`;

export const LinkRepoDetails = styled(Link)`
   text-decoration: underline;
`;

export const LinkVoltar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--light-grey);
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    height: 20px;
    width: 110px;
    padding: 20px;
    font-size: 20px;
`;
export const DefaultLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--light-grey);
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    padding: 0.5rem;
`
