import { CollectionConfig } from 'payload';

export const HomeTips: CollectionConfig = {
  slug: 'home-tips',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'published_date'],
  },
  access: {
    read: () => true,
    update: () => true,
    delete: () => true,
    create: () => true,
    
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      maxLength: 100,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      maxLength: 100,
    },
    {
      name: 'summary',
      type: 'textarea',
      required: true,
      maxLength: 500,
    },
    {
      name: 'published_date',
      type: 'date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
        },
      },
    },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'Home Tips', value: 'Home Tips' },
        { label: 'Blog', value: 'Blog' },
        { label: 'Home Projects & DIY', value: 'Home Projects & DIY' },
        { label: 'Singapore Living', value: 'Singapore Living' },
      ],
      required: true,
    },
    {
      name: 'url',
      type: 'text',
      required: true,
      maxLength: 200,
    },
    {
      name: 'img',
      type: 'text',
      required: true,
      maxLength: 200,
    },
  ],
};

export default HomeTips;