import { Meta, StoryObj } from '@storybook/react';
import Chip from './chip';

const meta: Meta<typeof Chip> = {
  title: 'Chip',
  component: Chip,
};

export default meta;

type Story = StoryObj<typeof Chip>;

export const Primary: Story = {
  render: () => (
    <div className="flex gap-3">
      <Chip color="error" label="Error" />
      <Chip color="warning" label="Warning" />
      <Chip color="success" label="Success" />
    </div>
  ),
};
