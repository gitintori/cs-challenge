import styled from "styled-components";

export const Container = styled.ul`
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

export const RepoWrapper = styled.ul`
    display: flex;
    flex-direction: column;
    font-size: 20px;
    gap: 10px;
`;

export const LinkWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

export const LinkGithub = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--blue);
    color: var(--white);
    font-weight: bold;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    height: 40px;
    width: 200px;
    font-size: 20px;
`;

export const LinkVoltar = styled.ul`
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
