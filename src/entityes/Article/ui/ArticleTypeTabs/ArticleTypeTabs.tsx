import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import Tabs, { TabItem } from 'shared/ui/Tabs/Tabs';
import { ArticleType } from 'entityes/Article';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from 'pages/ArticlesPage/ui/ArticlesPageFilters/ArticlesPageFilters.module.scss';

interface ArticleTypeTabsProps {
    className?: string,
    value: ArticleType,
    onChangeType: (type: ArticleType) => void
}

const ArticleTypeTabs = memo(({ className, value, onChangeType }: ArticleTypeTabsProps) => {
    const { t } = useTranslation();
    const typeTabs = useMemo<TabItem[]>(() => [
        {
            value: ArticleType.ALL,
            content: t('Все статьи'),
        },
        {
            value: ArticleType.IT,
            content: t('IT'),
        },
        {
            value: ArticleType.ECONOMICS,
            content: t('Экономика'),
        },
        {
            value: ArticleType.SCIENCE,
            content: t('Наука'),
        },
    ], [t]);

    const onTabClick = useCallback((tab: TabItem) => {
        onChangeType(tab.value as ArticleType);
    }, [onChangeType]);

    return (
        <Tabs
            tabs={typeTabs}
            value={value}
            onTabClick={onTabClick}
            className={classNames('', {}, [className])}
        />
    );
});

export default ArticleTypeTabs;
