import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Product from './Product';
import axios from 'axios';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
`

const Products = ({ cat, filters, sort }) => {


    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(cat ? `http://192.168.1.202:5000/api/products?category=${cat}` : `http://192.168.1.202:5000/api/products`);
                setProducts(res.data)
            } catch (err) {

            }
        }
        getProducts()
    }, [cat])

    useEffect(() => {
        cat && setFilteredProducts(
            products.filter(item => Object.entries(filters).every(([key, value]) => {
                item[key].includes(value)
            }))
        )
    }, [cat, filters, products])
    
    return (
        <Container>
            {filteredProducts.map(item => (
                <Product item={item} key={item.id} />
            ))}
        </Container>
    )
}

export default Products
