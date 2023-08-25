import React from 'react'

import {Text} from '../text'
import {LoadingSpinner} from '../loading-spinner'
import {colorTokens, spacingTokens} from '../../styles'

import {Container, LoadingContainer} from './loading.styles'

export const Loading: React.FC = () => {
  return (
    <Container>
      <Text
        type={'h1'}
        $marginBottomX={spacingTokens.space4x}
        color={colorTokens.blues800}
      >
        Memba
      </Text>
      <LoadingContainer>
        <Text type={'h2'}>Loading</Text>
        <LoadingSpinner size={40} />
      </LoadingContainer>
    </Container>
  )
}
