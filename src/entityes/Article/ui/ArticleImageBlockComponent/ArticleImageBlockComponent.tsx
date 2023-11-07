import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import TextField, { TextAlign } from 'shared/ui/Text/Text';
import { ArticleImageBlock } from '../../model/types/article';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
    className?: string,
    block: ArticleImageBlock
}

const ArticleImageBlockComponent = memo(({ className, block }: ArticleImageBlockComponentProps) => (
    <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
        <img src={block.src} alt={block.title} className={cls.img} />
        {block.title && (
            <TextField text={block.title} align={TextAlign.CENTER} />
        )}
    </div>
));

export default ArticleImageBlockComponent;
