import Seo from '../components/Seo'
import MainTitle from '../components/MainTitle'
import Headline from '../components/Headline'
import Layout from '../components/Layout'
import Work from '../components/Work'
import { request } from "../lib/datocms";
import Hire from '../components/Hire'
import About from '../components/About'

const HOMEPAGE_QUERY = `query MyQuery {
  allBenefits {
    id
    title
    explanation
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
  allWorks {
    slug
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
    brief
    title
    role
  }
  mainPage {
    whyHire
    mainTitle
    headline
    about(markdown: true)
    avatar {
      responsiveImage {
        alt
        aspectRatio
        base64
        bgColor
        sizes
        height
        src
        srcSet
        title
        webpSrcSet
        width
      }
    }
  }
}
`

export async function getStaticProps() {
  const data = await request({
    query: HOMEPAGE_QUERY,
  });
  return {
    props: { 
      data
    }
  };
}

export default function Home( props ) {
  const { mainPage, allWorks, allBenefits } = props.data

  return (
    <Layout>
      <Seo title="Gustavo's Portfolio" />
      <MainTitle title={mainPage.mainTitle} />
      <Headline headline={mainPage.headline}></Headline>
      <Work workData={allWorks}/>
      <Hire 
        excerpt={mainPage.whyHire}
        cardContent={allBenefits}
        />
      <About
        avatar={mainPage.avatar.responsiveImage}
        about={mainPage.about}
        />
    </Layout>
  )
}
