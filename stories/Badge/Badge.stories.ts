// Badge.stories.ts

import { Meta } from "@storybook/react";
import { Badge } from "./Badge"; // Assuming the component file is named Badge.tsx

export default {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "badge"],
  argTypes: {
    value: {
      control: "text",
    },
    size: {
      control: {
        type: "radio",
        options: ["lg", "sm"],
      },
    },
  },
} as Meta;

export const SmallBadge = {
  args: {
    value: "7.3",
    size: "sm",
  },
};

export const LargeBadge = {
  args: {
    value: "7.3",
    size: "lg",
  },
};
