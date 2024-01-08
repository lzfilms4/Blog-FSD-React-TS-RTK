import { CounterSchema } from 'entityes/Counter';
import { UserSchema } from 'entityes/User';
import { LoginSchema } from 'features/AuthByUsername';
import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { ProfileSchema } from 'entityes/Profile';
import { AxiosInstance } from 'axios';
import { ArticleDetailsSchema } from 'entityes/Article';
import { ArticleDetailsCommentSchema, ArticleDetailsPageSchema } from 'pages/ArticleDetailsPage';
import { AddCommentFormSchema } from 'features/addCommentForm';
import { ArticlePageSchema } from 'pages/ArticlesPage';
import { UISchema } from 'features/UI';
import {
    ArticleDetailsRecommendationsSchema,
} from 'pages/ArticleDetailsPage/model/types/ArticleDetailsRecommendationsSchema';

export interface StateSchema {
    counter: CounterSchema,
    user: UserSchema,
    ui: UISchema,

    // Асинхронные редюсеры
    loginForm?: LoginSchema,
    profile?: ProfileSchema,
    articleDetails?: ArticleDetailsSchema,
    // articleDetailsComments?: ArticleDetailsCommentSchema,
    // articleDetailsRecommendations?: ArticleDetailsRecommendationsSchema,
    addCommentForm?: AddCommentFormSchema,
    articlesPage?: ArticlePageSchema
    articleDetailsPage?: ArticleDetailsPageSchema
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>,
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void,
    getMountedReducers: () => MountedReducers
}
export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}

export interface ThunkExtraArg {
    api: AxiosInstance,
    // navigate?: (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T> {
    rejectValue: T,
    extra: ThunkExtraArg,
    state: StateSchema
}
