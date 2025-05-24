export interface HomeTip {
    name: string;
    slug: string;
    publishedDate: string;        // ISO date string
    categories: string;
    thumbnailImage: string | null;
    postSummary: string | null;
    category: string;
    updatedAt: string;            // ISO date string
    createdAt: string; 
  }