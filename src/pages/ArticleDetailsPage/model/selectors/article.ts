import { createSelector } from '@reduxjs/toolkit';
import { getArticleDetailsData } from 'entityes/Article/model/selectors/articleDetails';
import { getUserAuthData } from 'entityes/User';

export const getCanEditArticle = createSelector(
    getArticleDetailsData,
    getUserAuthData,
    (article, user) => {
        if (!article || !user) {
            return false;
        }
        return article.user.id === user.id;
    },
);
