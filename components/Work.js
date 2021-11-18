import React from "react";
import styled from "styled-components";
import SecondaryTitle from "./SecondaryTitle";
import Card from "./Card";

const Container = styled.div`
  width: 980px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 120px;
`

const Title = styled.h2`
  background: -webkit-linear-gradient(105.97deg, #89043D 24.16%, #183F3F 70.93%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 42px;
  font-size: 32px;
  text-align: center;
`

export default function Work( props ) {
  const cardData = props.workData

  return (
    <div>
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