import styled from "styled-components";


export const FeedbackBtn = styled.button`
    cursor: pointer;
    padding: 5px 20px;
    text-transform: capitalize;
    background-color: #fff;
    outline: none;
    border: none;
    border-radius: 4px;
    box-shadow: 0px 0px 5px #242424;
    transition: color 250ms ease-in-out, background-color 250ms ease-in-out,
        box-shadow 250ms ease-in-out;
    font-size: 20px;
    font-weight: 400; 
    :hover {
        color: #fff;
        background-color: #868282;
        box-shadow: inset 0px 0px 5px #3c3c3c;
    }
    :not(:first-of-type) {
        margin-left: 20px;
    }
`;