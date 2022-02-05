import styled from 'styled-components'

const ContentBase = styled.div`
  width: 600px;
  height: 300px;
`

export const Post = () => {
  return (
    <ContentBase>
      <div>header</div>
      <div>body</div>
      <div>footer</div>
    </ContentBase>
  )
}
