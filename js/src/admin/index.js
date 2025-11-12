import app from 'flarum/app';

app.initializers.add('deltamichael-online', () => {
    app.extensionData.for('deltamichael-online')
        .registerSetting(
            {
                setting: 'deltamichael-online.titleoflist',
                label: app.translator.trans('deltamichael-online.admin.settings.titleoflist'),
                type: 'text'
            }
        )
        .registerSetting(
            {
                setting: 'deltamichael-online.displaymax',
                label: app.translator.trans('deltamichael-online.admin.settings.displaymax'),
                type: 'number'
            }
        );
});
