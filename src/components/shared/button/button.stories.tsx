import { Meta, StoryObj } from "@storybook/react";
import Button from "./button";

const meta: Meta<typeof Button> = {
    title: 'Button',
    component: Button
}

export default meta;

type Story = StoryObj<typeof Button>

export const Primary: Story = {
    render: () => (
        <div className="flex gap-3 items-center">
            <span className="text-sm font-medium text-neutral-600">Link</span>
            <Button color="neutral" href="google.com" type="link">Google.com</Button>
            <Button color="danger" href="google.com" type="link">Google.com</Button>
            <Button color="primary" href="google.com" type="link">Google.com</Button>
            <Button color="warning" href="google.com" type="link">Google.com</Button>
        </div>
    )
}