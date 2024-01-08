import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ArticleSortField, ArticleType } from 'entityes/Article';
import { SortOrder } from 'shared/types';
import {
    getArticlesPageInited,
} from '../../selectors/articlesPageSelectors';
import { articlePageAcitons } from '../../slices/articlePageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
    'articlesPage/initArticlesPage',
    async (searchParams, thunkAPI) => {
        const {
            getState, dispatch,
        } = thunkAPI;
        const inited = getArticlesPageInited(getState());

        if (!inited) {
            const orderFromUrl = searchParams.get('order') as SortOrder;
            const sortFromUrl = searchParams.get('sort') as ArticleSortField;
            const searchFromUrl = searchParams.get('search');
            const typeFromUrl = searchParams.get('type') as ArticleType;
            if (orderFromUrl) {
                dispatch(articlePageAcitons.setOrder(orderFromUrl));
            }
            if (sortFromUrl) {
                dispatch(articlePageAcitons.setSort(sortFromUrl));
            }
            if (searchFromUrl) {
                dispatch(articlePageAcitons.setSearch(searchFromUrl));
            }
            if (typeFromUrl) {
                dispatch(articlePageAcitons.setType(typeFromUrl));
            }
            dispatch(articlePageAcitons.initState());
            dispatch(fetchArticlesList({}));
        }
    },
);
