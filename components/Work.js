import React from "react";
import styled from "styled-components";
import SecondaryTitle from "./SecondaryTitle";
import Card from "./Card";

const Container = styled.div`
  width: 980px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 120px;
  flex-wrap: wrap;
  @media(max-width: 980px) {
    width: 490px;
  }
`

export default function Work( props ) {
  const cardData = props.workData

  return (
    <div id="work">
      <SecondaryTitle title="Know some of my work" align="center" />
      <Container>
        
          {cardData.map((item, index) => {
            const { brief, featuredImage, role, title, slug } = item
            return (
              <Card 
                key={index}
                role={role}
                imgSrc={featuredImage.responsiveImage}
                title={title} 
                content={brief}
                url={slug}/>
            )}
          )}
        
      </Container>
    </div>
  )
}