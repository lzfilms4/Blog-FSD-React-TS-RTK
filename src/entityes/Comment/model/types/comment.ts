import { User } from 'entityes/User';

export interface Comment {
    id: string,
    user: User,
    text: string
}
