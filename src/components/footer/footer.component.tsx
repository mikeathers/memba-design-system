import React from 'react'
import {sharedContent} from '@memba-labs/shared'
import {Text} from '../text'
import {Container} from './footer.styles'

export const Footer: React.FC = () => {
  return (
    <Container>
      <Text type={'footnote'}>{sharedContent.allRightsReserved}</Text>
    </Container>
  )
}
