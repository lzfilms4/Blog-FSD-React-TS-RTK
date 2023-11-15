import { EntityState } from '@reduxjs/toolkit';
import { Comment } from 'entityes/Comment';

export interface ArticleDetailsCommentSchema extends EntityState<Comment> {
    isLoading?: boolean;
    error?: string;
}
