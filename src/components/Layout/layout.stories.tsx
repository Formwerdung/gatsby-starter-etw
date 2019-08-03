import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Layout from './index'

storiesOf("Button", module)
  .add("with text", () => (
    <Layout>Hello Button</Layout>
  ))
  .add("with some emoji", () => (
    <Layout>😀 😎 👍 💯</Layout>
  ));
