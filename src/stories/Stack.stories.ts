import type { Meta, StoryObj } from '@storybook/react';

import Stack from "../components/Stack";

export default {
    title: "Components/Stack",
    component: Stack,
    argTypes: {
      numberOfChildren: { type: "number", defaultValue: 4 }
    }
}

/*const Template = ({ numberOfChildren, ...args }: { numberOfChildren: number }) => (
    <Stack {...args}>
        {[...Array(numberOfChildren).keys()].map((n: number) => (
            <div
                style = {{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "red",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                {n + 1}
            </div>
        ))}
    </Stack>
);*/

export const Horizontal = {
    args: {
        numberOfChildren: 5,
        direction: "row"
    }
}