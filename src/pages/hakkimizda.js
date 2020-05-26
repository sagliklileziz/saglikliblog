import React from 'react'
import Container from 'gatsby-theme-amsterdam/src/components/Container'
import SEO from 'gatsby-theme-amsterdam/src/components/SEO'
import styled from '@emotion/styled'

const Title = styled.h1`
  font-weight: ${props => props.theme.fonts.boldWeight};
  line-height: 1.25;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  margin: 0 auto 1rem;
  font-size: 2rem;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    font-size: 2.5rem;
  }
`

const Content = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  p {
    line-height: 1.5;
    margin: 0 0 1.75rem;
  }
  a {
    transition: 0.3s color;
    color: ${props => props.theme.colors.secondary};
    text-decoration: underline;
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
    @media (hover: none) {
      color: ${props => props.theme.colors.secondary} !important;
    }
  }
  code {
    font-family: ${props => props.theme.fonts.monospace};
    font-size: 0.9rem;
    padding: 0.25rem;
    background: ${props => props.theme.colors.code};
    color: ${props => props.theme.colors.text};
    border-radius: 0.3em;
  }
`

const HakkimizdaPage = ({ data }) => {
  return (
    <Container>
      <SEO title="Hakkımızda" description="Hakkımızda Sayfası" />
      <Title>Hakkımızda</Title>
      <Content>
        <p>
          Yaratıcı tariflerin yoğunlukta olduğu, sağlıklı ve
          leziz yemeklerin tanıtıldığı blogumuz sizlerle. Vegan, vejeteryan ve
          glutensiz tarifleri sizlerle buluşturduğumuz blogumuzda yeri
          geldiğinde geleneksel mutfağımızdan ve dünya mutfağından klasik tarifler de bulabileceksiniz.


        </p>
        <p>
         Unutmadan,
                              {' '}
           <a
             href="https://www.youtube.com/channel/UCuzgqx1I2waTpEjYDJiptXA/about"
             target="_blank"
             rel="noopener noreferrer"
           >
            YouTube kanalimiza
           </a>{' '}

           YouTube kanalimiza katılmak ister misiniz?
        </p>
      </Content>
    </Container>
  )
}

export default HakkimizdaPage
