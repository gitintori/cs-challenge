import { Link } from "react-router-dom";
import styled from "styled-components";

export const Results = styled.ul`
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-size: 25px;
    background-color: var(--white);
    border-radius: 10px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    color: var(--black);
`;

export const UserInfoContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const Avatar = styled.img`
    height: 300px;
    width: 300px;
    border-radius: 10px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.5);
    margin-left: 130px;
`;

export const UserInfo = styled.div`
    margin: 100px;
    display: flex;
    flex-direction: column;

        p {
            margin: 20px 0;
        }
`;

export const NotFoundText = styled.div`
    color: var(--light-grey);
    margin: 20px 0;

`;

export const LinkWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

export const DefaultLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--light-grey);
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    padding: 1rem;
`;

export const LinkRepo = styled(DefaultLink)`
    background-color: var(--blue);
    color: var(--white);
    font-weight: bold;
`;

export const UserNotFound = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 20px;
`;
