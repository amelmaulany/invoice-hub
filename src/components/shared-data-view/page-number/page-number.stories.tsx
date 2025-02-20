import type { Meta, StoryObj } from '@storybook/react';
import PageNumber from './page-number';
import { useState } from 'react';

const meta: Meta<typeof PageNumber> = {
  title: 'PageNumber',
  component: PageNumber,
};

export default meta;

type Story = StoryObj<typeof PageNumber>;

const PageNumberWithHooks = () => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const pageSize = 10;
  const countData = 1000;

  return (
    <PageNumber
      count={countData}
      onChange={setPageNumber}
      pageNumber={pageNumber}
      pageSize={pageSize}
    />
  );
};

export const Primary: Story = {
  render: () => <PageNumberWithHooks />,
};
