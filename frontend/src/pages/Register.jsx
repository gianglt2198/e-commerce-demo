import React from 'react'
import styled from 'styled-components'
import { mobile } from '../reponsive'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)),  url("https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1150&w=1000");
    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
    padding: 20px;
    width: 40%;
    background-color: white;
    ${mobile({
        width: "75%",
    })}
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`

const Form = styled.div`
    display: flex;
    flex-wrap: wrap;
    ${mobile({
        flexDirection: "column",
    })}
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`

const Button = styled.button`
    border: none;
    width: 40%;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`


const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="name" />
                    <Input placeholder="last name" />
                    <Input placeholder="username" />
                    <Input placeholder="email" />
                    <Input placeholder="password" />
                    <Input placeholder="confirm password" />
                    <Agreement>
                        By creating an account, I consent to the processing of my personal
                        dta in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
