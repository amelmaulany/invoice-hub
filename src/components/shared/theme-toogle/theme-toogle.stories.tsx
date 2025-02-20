import { Meta, StoryObj } from "@storybook/react";
import ThemeToogle from "./theme-toogle";
import { useState } from "react";

const meta: Meta<typeof ThemeToogle> = {
    title: 'ThemeToogle',
    component: ThemeToogle,
}

export default meta;

type Story = StoryObj<typeof ThemeToogle>

const ThemeToogleWithHook = () => {
    const [isLight, setIsLight] = useState<boolean>(true);

    return <ThemeToogle onChange={setIsLight} value={isLight}/>

}

export const Primary: Story = {
    render: () => <ThemeToogleWithHook />
}