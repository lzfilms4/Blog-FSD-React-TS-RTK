import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Select from 'shared/ui/Select/Select';
import { memo, useCallback } from 'react';
import ListBox from 'shared/ui/ListBox/ListBox';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    className?: string,
    value?: Country,
    onChange?: (value: Country) => void,
    readonly?: boolean
}

const options = [
    { value: Country.Russia, content: Country.Russia },
    { value: Country.USA, content: Country.USA },
];

export const CountrySelect = memo(({
    className, value, onChange, readonly,
}: CountrySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <ListBox
            readonly={readonly}
            className={classNames('', {}, [className])}
            onChange={onChangeHandler}
            value={value}
            items={options}
            defaultValue={t('Укажите страну')}
            label={t('Укажите страну')}
            direction="top right"
        />
    );
});
