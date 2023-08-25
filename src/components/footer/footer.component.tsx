'use client'
import {Container} from './footer.styles'
import {sharedContent} from '@memba-labs/shared'
import {Text} from '../text'

export const Footer: React.FC = () => {
  return (
    <Container>
      <Text type={'footnote'}>{sharedContent.allRightsReserved}</Text>
    </Container>
  )
}
