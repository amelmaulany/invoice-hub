import { Meta, StoryObj } from '@storybook/react';
import SelectField from './select-field';
import { SelectItem } from '@/lib/types/select';
import { useState } from 'react';

const meta: Meta<typeof SelectField> = {
  title: 'SelectField',
  component: SelectField,
};

export default meta;

type Story = StoryObj<typeof SelectField>;

const SelectFieldWithHook = () => {
  const options: SelectItem[] = [
    {
      key: 'male',
      label: 'Male',
    },
    {
      key: 'female',
      label: 'Female',
    },
  ];
  const [value, setValue] = useState<SelectItem | null>(null);

  return (
    <SelectField
      label="Label"
      onChange={setValue}
      options={options}
      value={value}
      placeholder="Choose your gender"
      required
    />
  );
};

export const Primary: Story = {
  render: () => <SelectFieldWithHook />,
};
