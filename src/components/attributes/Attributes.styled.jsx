import styled from "styled-components";

export const ItemsList = styled.ul`
display:flex;
align-items:center;
list-style:none;
flex-wrap:wrap;
padding:0;
min-height:36px;
`;

export const ListItemTitle = styled.p`
font-family: 'Roboto Condensed';
font-weight: 700;
font-size: 18px;
line-height: 1;
`;

export const AttItem = styled.li`
display: flex;
align-items: center;
justify-content: center;
border: 1px solid var(--text-color);
width: 63px;
height: 45px;
margin-bottom: 12px;
font-family: 'Source Sans Pro';
font-weight: 400;
font-size: 16px;
line-height: 1.125;
letter-spacing: 0.05em;
cursor: pointer;
color: var(--text-color);
color: ${props => props.chosen ? "var(--light-color)" : "var(--text-color)"};
background-color: ${props => props.chosen ? "var(--text-color)" : "var(--light-color)"};

&:not(:last-of-type){
    margin-right: 12px;
}
`;

export const ColorWrapper = styled.div`
width: 32px;
height: 32px;
color: transparent;
background-color: ${props => props.color ? props.color : "none"};
box-shadow: ${props=> props.color==="var(--light-color)" ? "0px 0px 1px 2px rgba(250,229,255,0.51)" : "none"}
`;

export const AttItemColor = styled.li`
display: flex;
align-items: center;
justify-content: center;
width: 36px;
height: 36px;
background-color: transparent;
color: transparent;
border: 1px solid ${props => props.border ? "var(--button-color)" : "transparent"};
cursor: pointer;
&:not(:last-of-type){
    margin-right:12px;
}
`;

export const AttributeItem = styled.li`
display: flex;
align-items: center;
justify-content: center;
&:not(:last-of-type){
    margin-bottom:24px;
}
`;

export const AttributeItemContainer = styled.div`
width: 100%;
`;