import { classNames } from 'shared/lib/classNames/classNames';
import Loader from 'shared/ui/Loader/Loader';
import {
    ArticleSortField, ArticleSortSelector, ArticleTypeTabs, ArticleView, ArticleViewSelector,
} from 'entityes/Article';
import { articlePageAcitons } from 'pages/ArticlesPage/model/slices/articlePageSlice';
import { useCallback, useMemo } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    getArticlesPageOrder, getArticlesPageSearch,
    getArticlesPageSort, getArticlesPageType,
    getArticlesPageView,
} from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Input from 'shared/ui/Input/Input';
import { Card } from 'shared/ui/Card/Card';
import { SortOrder } from 'shared/types';
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import Tabs, { TabItem } from 'shared/ui/Tabs/Tabs';
import { ArticleType } from 'entityes/Article/model/types/article';
import cls from './ArticlesPageFilters.module.scss';

interface ArticlePageFiltersProps {
    className?: string
}

const ArticlePageFilters = ({ className }: ArticlePageFiltersProps) => {
    const { t } = useTranslation();
    const view = useSelector(getArticlesPageView);
    const dispatch = useAppDispatch();
    const sort = useSelector(getArticlesPageSort);
    const order = useSelector(getArticlesPageOrder);
    const search = useSelector(getArticlesPageSearch);
    const type = useSelector(getArticlesPageType);

    const fetchData = useCallback((() => {
        dispatch(fetchArticlesList({ replace: true }));
    }), [dispatch]);

    const debounceFetchData = useDebounce(fetchData, 500);

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlePageAcitons.setView(view));
    }, [dispatch]);
    const onChangeSort = useCallback((newSort: ArticleSortField) => {
        dispatch(articlePageAcitons.setSort(newSort));
        dispatch(articlePageAcitons.setPage(1));
        fetchData();
    }, [fetchData, dispatch]);
    const onChangeOrder = useCallback((newOrder: SortOrder) => {
        dispatch(articlePageAcitons.setOrder(newOrder));
        dispatch(articlePageAcitons.setPage(1));
        fetchData();
    }, [fetchData, dispatch]);
    const onChangeSearch = useCallback((search: string) => {
        dispatch(articlePageAcitons.setSearch(search));
        dispatch(articlePageAcitons.setPage(1));
        debounceFetchData();
    }, [debounceFetchData, dispatch]);
    const onChangeType = useCallback((value: ArticleType) => {
        dispatch(articlePageAcitons.setType(value));
        dispatch(articlePageAcitons.setPage(1));
        fetchData();
    }, [fetchData, dispatch]);

    return (
        <div className={classNames(cls.ArticlePageFilters, {}, [className])}>
            <div className={cls.sortWrapper}>
                <ArticleSortSelector sort={sort} order={order} onChangeOrder={onChangeOrder} onChangeSort={onChangeSort} />
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
            </div>
            <Card className={cls.search}>
                <Input value={search} onChange={onChangeSearch} placeholder={t('Поиск')} />
            </Card>
            <ArticleTypeTabs value={type} onChangeType={onChangeType} className={cls.tabs} />

        </div>
    );
};

export default ArticlePageFilters;
