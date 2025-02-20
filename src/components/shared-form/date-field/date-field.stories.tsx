import { Meta, StoryObj } from '@storybook/react';
import DateField from './date-field';
import { useState } from 'react';

const meta: Meta<typeof DateField> = {
  title: 'DateField',
  component: DateField,
};

export default meta;

type Story = StoryObj<typeof DateField>;

const DatePickerWithHook = () => {
  const [value, setValue] = useState<Date | null>(null);

  return (
    <DateField
      label="Due Date"
      onChange={setValue}
      value={value}
      placeholder="dd/mm/yyyy"
      required
    />
  );
};

export const Primary: Story = {
  render: () => <DatePickerWithHook />,
};
