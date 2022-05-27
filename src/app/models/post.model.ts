export interface Post {
  id: number;
  category_id: number;
  post_title_en: string;
  post_title_ar: string;
  post_slug_en: string;
  post_slug_ar: string;
  post_image: string;
  post_details_en: string;
  post_details_ar: string;
  created_at: Date;
  updated_at: Date;
  admins_id: number;
}
