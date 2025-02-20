import { Meta, StoryObj } from '@storybook/react';
import * as Table from './table';
import * as AmountCell from '../../shared-data-view/amount-cell/amount-cell';
import * as DateCell from '../../shared-data-view/date-cell/date-cell';

const meta: Meta<typeof Table> = {
  title: 'Table',
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Primary: Story = {
  render: () => (
    <Table.Root>
      <Table.Head>
        <Table.Th colAlign="left">Amount</Table.Th>
        <Table.Th colAlign="right">Date</Table.Th>
      </Table.Head>
      <Table.Body>
        <Table.Tr>
          <AmountCell.Content>{19000000}</AmountCell.Content>
          <DateCell.Content>{new Date()}</DateCell.Content>
        </Table.Tr>
        <Table.Tr>
          <AmountCell.Null />
          <DateCell.Null />
        </Table.Tr>
        <Table.Tr>
          <AmountCell.Loading />
          <DateCell.Loading />
        </Table.Tr>
      </Table.Body>
    </Table.Root>
  ),
};
