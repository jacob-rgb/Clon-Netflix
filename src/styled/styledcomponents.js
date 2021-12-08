import styled from 'styled-components';
import { InputBase } from '@material-ui/core';

export const NetflixInput = styled(InputBase)`
z-index:30;
background: #fff;
padding:25.5px;
height:30px;
border-radius:5px;
border: none;
`;

const handleWidth = (wide) => {
    switch (wide) {
        case "fullWidth": return "100%";
        case "medium": return "260px";
        default: return "160px";
    }
}

export const NetflixButton = styled.button`
background-color: ${(props)=> props.color === "gray" ? "lightgray" : "red"};
z-index:15;
color: #fff;
border-radius:${({radius}) => radius ? "5px" : "0px"};
text-transform:inherit;
padding:15px;
font-size:1.1rem;
border:none;
outline:none;
cursor:pointer;
width: ${({wide}) => handleWidth(wide)};
display:flex;
justify-content: center;
align-items:center;
gap:3px;
`;