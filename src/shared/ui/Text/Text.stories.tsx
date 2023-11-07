import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Text, { TextSize, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title',
    text: 'Text',
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'Title',
};

export const onlyText = Template.bind({});
onlyText.args = {
    text: 'Text',
};

export const SizeL = Template.bind({});
SizeL.args = {
    text: 'Text',
    size: TextSize.L,
};

export const Error = Template.bind({});
Error.args = {
    title: 'Title',

    text: 'Text',
    theme: TextTheme.ERROR,
};
