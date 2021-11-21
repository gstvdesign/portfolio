import React from "react";
import styled from "styled-components";
import { request } from "../../lib/datocms";
import { Image, StructuredText } from "react-datocms";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";

const Container = styled.div`
  width: 960px;
  margin: 0 auto;
  color: #636363;
  @media(max-width: 960px) {
    max-width: 640px;
  }
`

const Role = styled.p`
  margin: 52px 0 12px;
  font-family: 'Work Sans', sans-serif;
  font-weight: 700;
  font-size: 12px;
  color: #183f3f;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
`

const Title = styled.h1`
  background: -webkit-linear-gradient(105.97deg, #89043D 24.16%, #183F3F 70.93%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 20px;
  font-size: 48px;
  text-align: center;
  z-index: 0;
`

const Divider = styled.div`
  width: 58px;
  height: 0;
  margin: 0 auto 12px;
  border: 1px solid #C4C4C4;  
`

const Brief = styled.p`
  margin-bottom: 3rem;
  font-size: 1rem;
  color: #89043d;
  text-align: center;
`

const TextContainer = styled.div`
  margin: 36px auto;
  overflow: visible;
  p, h2, ul, blockquote {
    max-width: 640px;
    margin: 0 auto;
    @media(max-width: 960px) {
      margin: auto 1rem;
    }
  }
  p {
    margin-bottom: 1rem;
  }
  h2 {
    font-family: 'Work Sans', sans-serif;
    margin-top: 4rem;
    margin-bottom: 1rem;
  }
  blockquote {
    margin-top: 4rem;
    margin-bottom: 1rem;
    padding-left: 1rem;
    border-left: 2px solid #a1e8af;
    font-size: 1.25rem;
    footer {
      font-size: 1rem;
      font-weight: 300;
      font-style: italic;
    }
  }
  hr {
    border: 0;
    height: 1px;
    background-image: linear-gradient(to right, #A1E8AF, #AFCBFF, #A1E8AF);
    margin: 4rem;
  }
  img {
    margin: 2rem 0;
    height: auto !important;
    box-shadow: 0px 0px 12px rgba(135, 135, 135, 0.1);
    @media(max-width: 960px) {
      margin: 2rem 1rem
    }
  }
`

export default function WorkPost( props ) {
  const { role, title, brief, featuredImage, article } = props.jobData

  return (
    <Layout>
      <Seo title={title} />
      <Container>
        <Role>{role}</Role>
        <Title>{title}</Title>
        <Divider />
        <Brief>{brief}</Brief>
        <Image data={featuredImage.responsiveImage} />
        <TextContainer>
          <StructuredText data={article}
            renderBlock={({ record }) => {
              switch (record.__typename) {
                case 'ImageRecord':
                  return <Image data={record.image.responsiveImage} />;
                default:
                  return null;
              }
            }}/>
        </TextContainer>
      </Container>
    </Layout>
  )
}

const ROUTEQUERY = `query MyQuery {
  allWorks {
    slug
  }
}`

export const getStaticPaths = async () => {
  const routes = await request({
    query: ROUTEQUERY,
  });

  let paths = []
  routes.allWorks.map(item => paths.push(`/work/${item.slug}`))

  return {
    paths,
    fallback: false
  };
}

const JOBQUERY =`query MyQuery($slug: String) {
  work(filter: {slug: {eq: $slug}}) {
    brief
    role
    slug
    title
    article {
      value
      blocks {
        __typename
        ... on ImageRecord {
          id
          image {
            responsiveImage {
              alt
              aspectRatio
              base64
              bgColor
              height
              sizes
              src
              srcSet
              title
              webpSrcSet
              width
            }
          }
        }
      }
    }
    featuredImage {
      responsiveImage {
        alt
        aspectRatio
        base64
        bgColor
        height
        sizes
        src
        srcSet
        title
        webpSrcSet
        width
      }
    }
  }
}`

export const getStaticProps = async ({ params }) => {
  const job = await request({
    query: JOBQUERY,
    variables: { slug: params.slug }
  });

  return {
    props: { 
      jobData: job.work
    }
  };
}
