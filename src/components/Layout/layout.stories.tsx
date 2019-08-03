import { storiesOf } from '@storybook/react'
import * as React from 'react'
import Layout from './index'

storiesOf('Layout', module)
  .add('with text', () => <Layout>Hello World</Layout>)
  .add('with some emoji', () => <Layout>😀 😎 👍 💯</Layout>)
