import { Currency } from 'entityes/Currency/model/types/currency';
import { Country } from 'entityes/Country/model/types/country';

export interface Profile {
    first?: string,
    lastname?: string,
    age?: number,
    currency?: Currency,
    city?: string,
    country?: Country,
    username?: string,
    avatar?: string
}

export interface ProfileSchema {
    data?: Profile,
    form?: Profile,
    isLoading: boolean,
    error?: string
    readonly: boolean
}
