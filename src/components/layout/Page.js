import styled from 'styled-components'

const StyledPage = styled.div`
  padding: 16px;
  margin-left: auto;
  margin-right: auto;
`

const Page = ({ children, ...props }) => {
  return <StyledPage {...props}>{children}</StyledPage>
}

export default Page