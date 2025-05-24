import { CollectionConfig } from 'payload';

export const Blogs: CollectionConfig = {
  slug: 'blogs',
  access: {
    create: () => true,  // Cho phép tạo mới bất cứ ai (bạn có thể thay đổi điều kiện ở đây)
    read: () => true,    // Cho phép đọc
    update: () => true,  // Cho phép cập nhật
    delete: () => true,  // Cho phép xóa
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: [
      'name',
      'slug',
      'publishedDate',
      'categories',
      'category',
      'postSummary',
      'thumbnailImage',
    ],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'publishedDate',
      type: 'date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
        },
      },
    },
    {
      name: 'categories',
      type: 'text',
      admin: {
        description: 'Multiple categories separated by commas',
      },
    },
    {
      name: 'thumbnailImage',
      type: 'text',
      admin: {
        description: 'URL hoặc đường dẫn hình ảnh dưới dạng chuỗi',
      },
    },
    {
      name: 'postSummary',
      type: 'textarea',
    },
    {
      name: 'category',
      type: 'text',
      admin: {
        description: 'Optional single category label',
      },
    },
  ],
};

export default Blogs;
