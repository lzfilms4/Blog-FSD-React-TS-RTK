import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleType, ArticleView } from 'entityes/Article';
import { ArticleSortField } from 'entityes/Article/model/types/article';
import { SortOrder } from 'shared/types';

export interface ArticlePageSchema extends EntityState<Article> {
    isLoading?: boolean,
    error?: string,

    page: number,
    limit: number,
    hasMore: boolean,

    // filters
    view: ArticleView,
    order: SortOrder,
    sort: ArticleSortField,
    search: string,
    type: ArticleType

    _inited: boolean
}
