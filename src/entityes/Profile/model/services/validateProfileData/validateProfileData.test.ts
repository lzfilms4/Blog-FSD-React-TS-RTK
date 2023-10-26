import { ValidateProfileError } from 'entityes/Profile';
import { Country } from 'entityes/Country';
import { Currency } from 'entityes/Currency';
import { validateProfileData } from './validateProfileData';

jest.mock('axios');

const data = {
    username: 'admin',
    age: 22,
    country: Country.Russia,
    lastname: 'last',
    first: 'first',
    city: 'asd',
    currency: Currency.EUR,
};

describe('validateProfileData.test', () => {
    test('success', async () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });

    test('without first and last name', async () => {
        const result = validateProfileData({ ...data, first: '', lastname: '' });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
        ]);
    });

    test('incorrect age', async () => {
        const result = validateProfileData({ ...data, age: undefined });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_AGE,
        ]);
    });

    test('incorrect country', async () => {
        const result = validateProfileData({ ...data, country: undefined });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_COUNTRY,
        ]);
    });
});
