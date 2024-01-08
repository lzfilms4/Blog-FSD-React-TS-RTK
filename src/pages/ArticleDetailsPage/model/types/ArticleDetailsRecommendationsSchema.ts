import { EntityState } from '@reduxjs/toolkit';
import { Comment } from 'entityes/Comment';
import { Article } from 'entityes/Article';

export interface ArticleDetailsRecommendationsSchema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;
}
