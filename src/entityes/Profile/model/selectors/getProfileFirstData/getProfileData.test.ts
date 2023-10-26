import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entityes/Country';
import { Currency } from 'entityes/Currency';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
    test('should not return error', () => {
        const data = {
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
                data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
