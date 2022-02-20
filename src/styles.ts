import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	*{
		padding: 0px;
		margin: 0px;
		box-sizing:border-box;
		font-family: 'Roboto', sans-serif;
		font-weight: 400;
	}

`;
export const Container = styled.div`
  width: 1280px;
  margin: 0 auto;
`;
