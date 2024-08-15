import { type Meta, type StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "components/ui/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      description: "Different variants to apply different pre defined styles",
      control: "select",
      options: [
        "default",
        "destructive",
        "ghost",
        "link",
        "outline",
        "secondary",
      ],
    },
    size: {
      description: "Different sizes to apply",
      control: "select",
      options: ["default", "sm", "lg", "icon"],
    },
    disabled: {
      description: "State fo enabling or disabling the button",
      control: "boolean",
    },
    className: {
      description: "Classes for applying different TailwindCSS calsses",
      control: "text",
    },
    children: {
      description: "Text shown inside of the button",
      control: "text",
    },
    onClick: {
      description: "Function called by clicking the button",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    size: "sm",
    disabled: false,
    className: "shadow-lg",
    children: "Default Button",
    onClick: action("Default Click"),
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    size: "sm",
    disabled: false,
    className: "shadow-lg",
    children: "Destructive Button",
    onClick: action("Destructive Click"),
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    size: "sm",
    disabled: false,
    className: "shadow-lg",
    children: "Ghost Button",
    onClick: action("Ghost Click"),
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    size: "sm",
    disabled: false,
    className: "shadow-lg",
    children: "Link Button",
    onClick: action("Link Click"),
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    size: "sm",
    disabled: false,
    className: "shadow-lg",
    children: "Outline Button",
    onClick: action("Outline Click"),
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "sm",
    disabled: false,
    className: "shadow-lg",
    children: "Secondary Button",
    onClick: action("Secondary Click"),
  },
};
