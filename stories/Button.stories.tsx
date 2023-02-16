import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "../src/components/Button/Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Basic: ComponentStory<typeof Button> = () => <Button />;
