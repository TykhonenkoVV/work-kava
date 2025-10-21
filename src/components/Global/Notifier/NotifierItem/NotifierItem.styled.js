import styled from '@emotion/styled';

export const Item = styled.div`
    position: relative;
    display: flex;
    gap: 10px;
    align-items: center;
    padding: 30px 10px 20px;
    border-radius: 5px;
    background-color: rgb(219, 75, 75);
    opacity: 0.9;
    transition: transform 250ms;
    transform: translateX(calc(100% + 15px));
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 5px;
    right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    border: none;
    background: none;
    cursor: pointer;
`;

export const NotifierBox = styled.div`
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    width: 40px;
    height: 40px;
    align-items: center;
    border-radius: 50%;
    background-color: rgb(180, 41, 41);
`;

export const Notification = styled.p``;

export const Icon = styled.svg`
    width: 30px;
    height: 30px;
    fill: rgb(204, 158, 158);
`;

export const ProgressBar = styled.div`
    position: absolute;
    bottom: 5px;
    left: 5px;
    width: calc(100% - 10px);
    height: 5px;
    background-color: #000;
`;
