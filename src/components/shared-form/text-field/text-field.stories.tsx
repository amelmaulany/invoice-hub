import { Meta, StoryObj } from '@storybook/react';
import TextField from './text-field';
import { useState } from 'react';

const meta: Meta<typeof TextField> = {
  title: 'TextField',
  component: TextField,
};

export default meta;

type Story = StoryObj<typeof TextField>;

const TextFieldWithHook = ({ error }: { error?: string }) => {
  const [value, setValue] = useState<string>('');

  return (
    <TextField
      label="Name"
      onChange={setValue}
      value={value}
      required
      placeholder="Input your name"
      error={error}
    />
  );
};

export const Primary: Story = {
  render: () => <TextFieldWithHook />,
};

export const Error: Story = {
  render: () => <TextFieldWithHook error="Lorem ipsum" />,
};
