import { Meta, StoryObj } from '@storybook/react';
import NumberField from './number-field';
import { useState } from 'react';

const meta: Meta<typeof NumberField> = {
  title: 'NumberField',
  component: NumberField,
};

export default meta;

type Story = StoryObj<typeof NumberField>;

const NumberFieldWithHook = () => {
  const [value, setValue] = useState<number | null>(null);

  return <NumberField label="Label" onChange={setValue} value={value} prefix="Rp" required />;
};

export const Primary: Story = {
  render: () => <NumberFieldWithHook />,
};
