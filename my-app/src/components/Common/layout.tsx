import { FC } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
`;


const Menu = styled.div`
    text-align:right;
`;


const Content = styled.div`
    width: 1024px;
    margin: 0 auto;
    color:red;
    background-color:yellow;
    text-align:center;
`;


interface IProps{
    children: JSX.Element;
};

export const Layout: FC<IProps> = props =>{
    return(
        <Wrapper>
            <Menu/>
            <Content>
                {props.children}
            </Content>
        </Wrapper>
    )
}