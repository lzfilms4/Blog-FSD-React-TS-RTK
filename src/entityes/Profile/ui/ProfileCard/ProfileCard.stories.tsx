import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Country } from 'entityes/Country';
import { Currency } from 'entityes/Currency';
import avatar from 'shared/assets/tests/storybook.jpg';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        username: 'admin',
        age: 22,
        country: Country.Russia,
        lastname: 'last',
        first: 'first',
        city: 'asd',
        currency: Currency.EUR,
        avatar,
    },
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
