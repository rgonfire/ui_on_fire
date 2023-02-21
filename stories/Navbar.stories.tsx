/**
 * Configuration of navbar stories view (doc)
 */

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Navbar from "../src/components/Navbars/Navbar";

export default {
  title: "Components/Navbars",
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: "Button",
};
