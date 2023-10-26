import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entityes/Country';
import { Currency } from 'entityes/Currency';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
    test('should not return error', () => {
        const form = {
            username: 'admin',
            age: 22,
            country: Country.Russia,
            lastname: 'last',
            first: 'first',
            city: 'asd',
            currency: Currency.EUR,
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                form,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(form);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
