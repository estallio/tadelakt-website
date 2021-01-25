import S from '@sanity/desk-tool/structure-builder';

export default () =>
  S.list()
  .title('Inhalte')
  .items(
    S.documentTypeListItems()
  );
