import { Email, Facebook, Instagram, Phone, Room, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../reponsive'

const Container = styled.div`
    display: flex;
    ${mobile({
        flexDirection: "column",
    })}
`

const Left = styled.div`
    flex: 1;
    padding: 20px;
`

const Logo = styled.h1``
const Desc = styled.div`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #${props => props.color};
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({
        display: "none",
    })}
`

const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({
        backgroundColor: "#eee",
    })}
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment = styled.img`
    width: 50%;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>GShop.</Logo>
                <Desc></Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem><Room style={{ marginRight: "10px" }} /> Tan Lap, Dong Hoa, Di An, BD</ContactItem>
                <ContactItem><Phone style={{ marginRight: "10px" }} /> +84 123 456 789</ContactItem>
                <ContactItem><Email style={{ marginRight: "10px" }} /> giangle2198@gmail.com</ContactItem>
                <Payment src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdNV3ICHIHjvriPUblvpeeEdl8fdxDfMZffYaK0_H2UelA16a8AlTvT3tRuzP0g_pC9A&usqp=CAU" />
            </Right>
        </Container>
    )
}

export default Footer
