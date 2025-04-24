import React from 'react';
import styled from 'styled-components';
import { ArrowUpRight } from 'lucide-react';

const FooterWrapper = styled.footer`
  padding: 80px 40px;
  background: #fff;
  color: #000;
  font-family: 'Helvetica Neue', sans-serif;
`;

const TopSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 60px;
`;

const Description = styled.p`
  max-width: 300px;
  font-size: 14px;
  line-height: 1.6;
`;

const ContactList = styled.ul`
  list-style: none;
  padding: 0;
  font-size: 14px;
  line-height: 1.8;
`;

const SubscribeSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 36px;
  font-weight: 500;
  margin-bottom: 60px;
  border-bottom: 1px solid #000;
  padding-bottom: 12px;
`;

const SubscribeButton = styled.button`
  background: #000;
  color: #fff;
  border-radius: 50%;
  padding: 14px;
  border: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Column = styled.div`
  min-width: 120px;
`;

const ColumnTitle = styled.h4`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ColumnLink = styled.a`
  display: block;
  font-size: 13px;
  margin-bottom: 6px;
  text-decoration: none;
  color: #000;

  &:hover {
    text-decoration: underline;
  }
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <TopSection>
        <Description>
          Stay in the loop and never miss an update from us! Subscribe to our newsletter and be the first to receive the latest news, exclusive offers, insightful articles, and much more.
        </Description>
        <ContactList>
          <li>• Facebook</li>
          <li>• Instagram</li>
          <li>• X</li>
          <li>• info@rinjani.com</li>
        </ContactList>
      </TopSection>

      <SubscribeSection>
        Subscribe Us
        <SubscribeButton>
          <ArrowUpRight size={20} />
        </SubscribeButton>
      </SubscribeSection>

      <BottomSection>
        <Column>
          <ColumnTitle>Shop</ColumnTitle>
          <ColumnLink href="#">Men</ColumnLink>
          <ColumnLink href="#">Women</ColumnLink>
          <ColumnLink href="#">Kids</ColumnLink>
          <ColumnLink href="#">Sale</ColumnLink>
        </Column>
        <Column>
          <ColumnTitle>Company</ColumnTitle>
          <ColumnLink href="#">About</ColumnLink>
          <ColumnLink href="#">FAQ</ColumnLink>
          <ColumnLink href="#">Collaboration</ColumnLink>
          <ColumnLink href="#">Contact</ColumnLink>
        </Column>
        <Column>
          <ColumnTitle>Legal</ColumnTitle>
          <ColumnLink href="#">Shipping Policy</ColumnLink>
          <ColumnLink href="#">Returns & Exchanges</ColumnLink>
          <ColumnLink href="#">Term of Use</ColumnLink>
          <ColumnLink href="#">Support</ColumnLink>
        </Column>
      </BottomSection>
    </FooterWrapper>
  );
}
