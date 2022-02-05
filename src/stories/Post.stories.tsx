import React from 'react';
import { ComponentMeta } from '@storybook/react';

import { Post } from '../components/Post';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Post',
  component: Post,
} as ComponentMeta<typeof Post>;

export const Default = () => {
  return <Post />
}
