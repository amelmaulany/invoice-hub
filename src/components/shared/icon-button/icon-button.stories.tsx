import { Meta, StoryObj } from '@storybook/react';
import IconButton from './icon-button';
import { faBell, faComment } from '@fortawesome/pro-regular-svg-icons';

const meta: Meta<typeof IconButton> = {
  title: 'IconButton',
  component: IconButton,
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Primary: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <IconButton
        icon={faBell}
        hasNotification
        tooltip="Notifications"
        onClick={() => alert('See notifications')}
      />
      <IconButton icon={faComment} tooltip="Chats" onClick={() => alert('See chats')} />
    </div>
  ),
};
