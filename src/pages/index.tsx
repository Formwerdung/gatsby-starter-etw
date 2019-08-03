import * as React from 'react'
import { css } from '@emotion/core'
import tw from 'tailwind.macro'
import Layout from '../components/Layout'

export default () => (
  <Layout>
    <div css={css(tw`text-red-500`)}>Hello world!</div>
  </Layout>
)
