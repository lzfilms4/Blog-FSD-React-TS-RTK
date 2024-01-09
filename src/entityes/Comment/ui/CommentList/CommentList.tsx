import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import TextField from 'shared/ui/Text/Text';
import { VStack } from 'shared/ui/Stack';
import CommentCard from '../CommentCard/CommentCard';
import { Comment } from '../../model/types/comment';

interface CommentListProps {
    className?: string,
    comments?: Comment[],
    isLoading?: boolean
}

const CommentList = memo(({ className, comments, isLoading }: CommentListProps) => {
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <VStack gap="16" max className={classNames('', {}, [className])}>
                <CommentCard isLoading />
                <CommentCard isLoading />
                <CommentCard isLoading />
            </VStack>
        );
    }
    return (
        <VStack gap="16" max className={classNames('', {}, [className])}>
            {comments?.length
                ? comments.map((comment) => (
                    <CommentCard key={comment.id} comment={comment} isLoading={isLoading} />
                ))
                : <TextField title={t('Комментарии отсутствуют')} />}
        </VStack>
    );
});

export default CommentList;
