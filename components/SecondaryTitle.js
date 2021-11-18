import React from "react";
import styled, { ThemeProvider } from "styled-components";

const Title = styled.h2`
  background: -webkit-linear-gradient(105.97deg, #89043D 24.16%, #183F3F 70.93%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 42px;
  font-size: 32px;
  text-align: ${props => props.theme.main};
`

Title.defaultProps = {
  theme: {
    main: 'left'
  }
}

export default function SecondaryTitle( props ) {
  const theme = {
    main: props.align
  }
  return (
    <ThemeProvider theme={theme}>
      <Title>
        { props.title }
      </Title>
    </ThemeProvider>
  )
}