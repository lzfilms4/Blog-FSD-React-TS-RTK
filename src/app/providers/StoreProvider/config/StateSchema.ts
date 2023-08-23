import { CounterSchema } from 'entityes/Counter';
import { UserSchema } from 'entityes/User';
import { LoginSchema } from 'features/AuthByUsername';

export interface StateSchema {
    counter: CounterSchema,
    user: UserSchema,
    loginForm?: LoginSchema
}
