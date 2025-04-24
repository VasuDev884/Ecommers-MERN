import React from 'react';
import styled from 'styled-components';
import { Heart } from 'lucide-react';

const PageWrapper = styled.div`
  padding: 40px 24px;
  max-width: 1300px;
  margin: 0 auto;
padding-top: 70px;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
  text-align: center;
`;

const Subtitle = styled.p`
  text-align: center;
  margin-top: 8px;
  color: #555;
`;

const FilterBar = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
  margin: 32px 0;
`;

const FilterTag = styled.button`
  background: #f5f5f5;
  padding: 8px 16px;
  border-radius: 24px;
  border: none;
  cursor: pointer;
  font-size: 14px;
`;

const ProductGrid = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
`;

const ProductCard = styled.div`
  border-radius: 16px;
  border: 1px solid #eee;
  padding: 16px;
  position: relative;
  background: #fff;
`;

const Badge = styled.span`
  position: absolute;
  top: 16px;
  left: 16px;
  background: ${props => props.type === 'sold' ? '#f44336' : '#ff6f00'};
  color: #fff;
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 8px;
  font-weight: 600;
`;

const Wishlist = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: contain;
`;

const ProductTitle = styled.h3`
  font-size: 16px;
  margin: 12px 0 4px;
`;

const ProductMeta = styled.div`
  font-size: 13px;
  color: #777;
  margin-bottom: 4px;
`;

const ProductPrice = styled.p`
  font-weight: 600;
`;

const ViewMore = styled.button`
  display: block;
  margin: 40px auto 0;
  background: #000;
  color: #fff;
  padding: 12px 24px;
  border: none;
  border-radius: 24px;
  font-size: 14px;
  cursor: pointer;
`;

const products = [
    {
        id: 1,
        title: "Nike Air Max 90",
        price: "Rp 1,799,000",
        image: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,q_auto:eco/0f819cfc-caae-4997-802e-41a410b28c0a/air-max-90-shoes.png",
        rating: "4.9 • 12 Items Sold",
        badge: "Just in"
    },
    {
        id: 2,
        title: "Nike Alphafly 2",
        price: "Rp 4,089,000",
        image: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,q_auto:eco/2c8e6fa2-c9fc-4e13-a47c-9edb7fdf982b/alphafly-2-road-racing-shoes-J9s5vZ.png",
        rating: "4.9 • 120 Items Sold",
        badge: "Sold out"
    },
    {
        id: 2,
        title: "Nike Alphafly 2",
        price: "Rp 4,089,000",
        image: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,q_auto:eco/2c8e6fa2-c9fc-4e13-a47c-9edb7fdf982b/alphafly-2-road-racing-shoes-J9s5vZ.png",
        rating: "4.9 • 120 Items Sold",
        badge: "Sold out"
    },
    {
        id: 2,
        title: "Nike Alphafly 2",
        price: "Rp 4,089,000",
        image: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,q_auto:eco/2c8e6fa2-c9fc-4e13-a47c-9edb7fdf982b/alphafly-2-road-racing-shoes-J9s5vZ.png",
        rating: "4.9 • 120 Items Sold",
        badge: "Sold out"
    },
    {
        id: 2,
        title: "Nike Alphafly 2",
        price: "Rp 4,089,000",
        image: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,q_auto:eco/2c8e6fa2-c9fc-4e13-a47c-9edb7fdf982b/alphafly-2-road-racing-shoes-J9s5vZ.png",
        rating: "4.9 • 120 Items Sold",
        badge: "Sold out"
    },
    {
        id: 2,
        title: "Nike Alphafly 2",
        price: "Rp 4,089,000",
        image: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,q_auto:eco/2c8e6fa2-c9fc-4e13-a47c-9edb7fdf982b/alphafly-2-road-racing-shoes-J9s5vZ.png",
        rating: "4.9 • 120 Items Sold",
        badge: "Sold out"
    },
    {
        id: 2,
        title: "Nike Alphafly 2",
        price: "Rp 4,089,000",
        image: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,q_auto:eco/2c8e6fa2-c9fc-4e13-a47c-9edb7fdf982b/alphafly-2-road-racing-shoes-J9s5vZ.png",
        rating: "4.9 • 120 Items Sold",
        badge: "Sold out"
    },
    {
        id: 2,
        title: "Nike Alphafly 2",
        price: "Rp 4,089,000",
        image: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,q_auto:eco/2c8e6fa2-c9fc-4e13-a47c-9edb7fdf982b/alphafly-2-road-racing-shoes-J9s5vZ.png",
        rating: "4.9 • 120 Items Sold",
        badge: "Sold out"
    }
];

export default function ProductPage() {
    return (
        <PageWrapper>
            <Title>Shop Now, Goodlook Later</Title>
            <Subtitle>We have a bunch collection for you! Let’s go explore and find your dream shoes, make it happen.</Subtitle>

            <FilterBar>
                <FilterTag>Nike</FilterTag>
                <FilterTag>Price</FilterTag>
                <FilterTag>Size</FilterTag>
                <FilterTag>Type</FilterTag>
                <FilterTag>More Filter</FilterTag>
            </FilterBar>

            <ProductGrid>
                {products.map(product => (
                    <ProductCard key={product.id}>
                        {product.badge && (
                            <Badge type={product.badge === "Sold out" ? "sold" : "new"}>
                                {product.badge}
                            </Badge>
                        )}
                        <Wishlist><Heart size={18} strokeWidth={1.5} /></Wishlist>
                        <ProductImage src={product.image} alt={product.title} />
                        <ProductTitle>{product.title}</ProductTitle>
                        <ProductMeta>⭐ {product.rating}</ProductMeta>
                        <ProductPrice>{product.price}</ProductPrice>
                    </ProductCard>
                ))}
            </ProductGrid>

            <ViewMore>View more</ViewMore>
        </PageWrapper>
    );
}
