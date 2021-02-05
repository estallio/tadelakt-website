import S from '@sanity/desk-tool/structure-builder';

export default () =>
  S.documentTypeList('arbeit')
  .schemaType('arbeit')
  .title('Arbeit')
  .id('arbeit');
