import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    buttonStyle: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
    buttonType: {
      options: ["button", "submit"],
      control: { type: "radio" },
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    buttonStyle: "primary",
    buttonType: "button",
    size: "medium",
    label: "Primary",
  },
};

export const Secondary = {
  args: {
    buttonStyle: "secondary",
    buttonType: "button",
    size: "medium",
    label: "Secondary",
  },
};

export const Large = {
  args: {
    size: "large",
    label: "Large",
  },
};

export const Small = {
  args: {
    size: "small",
    label: "Small",
  },
};
