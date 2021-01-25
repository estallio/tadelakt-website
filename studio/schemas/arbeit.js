export default {
  title: 'Arbeit',
  name: 'arbeit',
  type: 'document',
  __experimental_actions: ['update', 'publish', 'create', 'delete'],
  initialValue: {
    showInWork: true,
    showInTadelakt: false,
    showInLehmputz: false,
    showInHerstellungUndRestaurierung: false,
  },
  fields: [
    {
      title: 'Titel',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Beschreibung',
      name: 'description',
      type: 'string',
    },
    {
      title: 'Bild',
      name: 'image',
      type: 'image',
      /*
      options: {
        hotspot: true,
      }
      */
    },
    {
      title: 'In Arbeit anzeigen',
      name: 'showInWork',
      type: 'boolean',
    },
    {
      title: 'In Tadelakt anzeigen',
      name: 'showInTadelakt',
      type: 'boolean',
    },
    {
      title: 'In Lehmputz anzeigen',
      name: 'showInLehmputz',
      type: 'boolean',
    },
    {
      title: 'In Herstellung und Restaurierung anzeigen',
      name: 'showInHerstellungUndRestaurierung',
      type: 'boolean',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    }
  }
}
