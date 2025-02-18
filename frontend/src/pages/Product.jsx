import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import { mobile } from '../reponsive'

const Container = styled.div``
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({
        padding: "10px",
        flexDirection: "column",
    })}
`
const ImgContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: contain;
    ${mobile({
        height: "40vh",
    })}
`
const InfoContainer = styled.div`
    flex: 1;
    ${mobile({
        padding: "10px",
    })}
`
const Title = styled.h1`
    font-weight: 200;
`
const Desc = styled.p`
    margin: 20px 0px;
`
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
    margin: 30px 10px;
    ${mobile({
        width: "100%",
    })}
`
const Filter = styled.div`
    display: flex;
    align-items: center;
`
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;

`
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0px 5px;
    cursor: pointer;
`
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`
const FilterSizeOption = styled.option`
`
const AdditionalContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({
        width: "100%",
    })}
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border: 1px solid teal;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`
const Button = styled.button`
    padding: 15px;
    border: 1px solid teal;
    background-color: white;
    cursor: pointer;

    &:hover{
        background-color: #f8f4f4;
    }
`

const Product = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImgContainer>
                    <Image src="https://i.pinimg.com/236x/3a/d8/eb/3ad8eb424d33c9072acce58e7b5651ee.jpg" />
                </ImgContainer>
                <InfoContainer>
                    <Title>JEAN</Title>
                    <Desc>
                        The stand-collar sweater, part of the DiorAlps capsule, reimagines the winter sports universe while upholding House couture codes. Crafted in white wool and cashmere, it features a three-tone geometric motif, further embellished with a hallmark Dior star and a 'CHRISTIAN DIOR' signature on the front. The warm sweater can be coordinated with other DiorAlps creations to complete the look.
                    </Desc>
                    <Price>$ 20</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black" />
                            <FilterColor color="darkblue" />
                            <FilterColor color="gray" />
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AdditionalContainer>
                        <AmountContainer>
                            <Remove />
                            <Amount>1</Amount>
                            <Add />
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AdditionalContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Product
