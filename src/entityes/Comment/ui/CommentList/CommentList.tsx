import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import TextField from 'shared/ui/Text/Text';
import cls from './CommentList.module.scss';
import CommentCard from '../CommentCard/CommentCard';
import { Comment } from '../../model/types/comment';

interface CommentListProps {
    className?: string,
    comments?: Comment[],
    isLoading?: boolean
}

const CommentList = memo(({ className, comments, isLoading }: CommentListProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {comments?.length
                ? comments.map((comment) => (
                    <CommentCard className={cls.comment} comment={comment} isLoading={isLoading} />
                ))
                : <TextField title={t('Комментарии отсутствуют')} />}
        </div>
    );
});

export default CommentList;
