import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import TextField from 'shared/ui/Text/Text';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import {
    getProfileData, getProfileReadonly, profileActions, updateProfileData,
} from 'entityes/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from 'entityes/User';
import HStack from 'shared/ui/Stack/HStack/HStack';

interface ProfilePageHeaderProps {
    className?: string
}

const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
    const { t } = useTranslation();

    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;
    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <HStack max justify="between" className={classNames('', {}, [className])}>
            <TextField title={t('Профиль')} />
            {canEdit && (
                <div>
                    {
                        readonly ? (
                            <Button theme={ButtonTheme.OUTLINE} onClick={onEdit}>
                                {t('Редактировать')}
                            </Button>
                        ) : (
                            <HStack gap="8">
                                <Button theme={ButtonTheme.OUTLINE_RED} onClick={onCancelEdit}>
                                    {t('Отменить')}
                                </Button>
                                <Button theme={ButtonTheme.OUTLINE} onClick={onSave}>
                                    {t('Сохранить')}
                                </Button>
                            </HStack>
                        )
                    }
                </div>
            )}

        </HStack>
    );
};

export default ProfilePageHeader;
