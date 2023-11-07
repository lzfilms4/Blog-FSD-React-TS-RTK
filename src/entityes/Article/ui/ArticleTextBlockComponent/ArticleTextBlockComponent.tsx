import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import TextField from 'shared/ui/Text/Text';
import { ArticleTextBlock } from '../../model/types/article';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
    className?: string,
    block: ArticleTextBlock
}

const ArticleTextBlockComponent = memo(({ className, block }: ArticleTextBlockComponentProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
            {block.title && (
                <TextField title={block.title} className={cls.title} />
            )}
            {block.paragraphs.map((paragraph, index) => (
                <TextField key={paragraph} text={paragraph} className={cls.paragraph} />
            ))}
        </div>
    );
});

export default ArticleTextBlockComponent;
