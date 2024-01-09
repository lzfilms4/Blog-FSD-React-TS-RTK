import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Input from 'shared/ui/Input/Input';
import Page from 'widgets/Page/Page';
import ListBox from 'shared/ui/ListBox/ListBox';
import Dropdown from 'shared/ui/Dropdown/Dropdown';

const MainPage = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState('');
    const onChange = (val:string) => {
        setValue(val);
    };
    return (
        <Page>
            {/* <BugButton /> */}
            {t('Главная страница')}
            {/* <Input placeholder={t('Введите текст')} value={value} onChange={onChange} /> */}
            <ListBox
                defaultValue={t('Выберите значение')}
                onChange={(value: string) => {}}
                value={undefined}
                items={[
                    { value: '1', content: '1' },
                    { value: '2', content: '2' },
                    { value: '3', content: '3', disabled: true },
                ]}
            />

        </Page>
    );
};

export default MainPage;
