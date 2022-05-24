
export interface Subsubcategory {
  id: number;
  category_id: number;
  subcategory_id: number;
  subsubcategory_name_en: string;
  subsubcategory_name_ar: string;
  subsubcategory_slug_en: string;
  subsubcategory_slug_ar: string;
  created_at: Date;
  updated_at: Date;
  admins_id: number;
}

export interface Subcategory {
  id: number;
  category_id: number;
  subcategory_name_en: string;
  subcategory_name_ar: string;
  subcategory_slug_en: string;
  subcategory_slug_ar: string;
  created_at: Date;
  updated_at: Date;
  admins_id: number;
  subsubcategory: Subsubcategory[];
}

export interface Category {
  id: number;
  category_name_en: string;
  category_name_ar: string;
  category_slug_en: string;
  category_slug_ar: string;
  category_icon?: any;
  created_at: Date;
  updated_at: Date;
  admins_id: number;
  subcategory: Subcategory[];
}

