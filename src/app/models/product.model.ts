export interface Product {
  id: number;
  brand_id: number;
  category_id: number;
  subcategory_id: number;
  subsubcategory_id?: any;
  product_name_en: string;
  product_name_ar: string;
  product_slug_en: string;
  product_slug_ar: string;
  product_code: string;
  product_qty: string;
  product_tags_en: string[];
  product_tags_ar: string[];
  product_size_en: string[];
  product_size_ar: string[];
  product_color_en: string[];
  product_color_ar: string[];
  selling_price: string;
  discount_price: string;
  short_descp_en: string;
  short_descp_ar: string;
  long_descp_en: string;
  long_descp_ar: string;
  product_thambnail: string;
  hot_deals: number;
  featured?: any;
  special_offer: number;
  special_deals?: any;
  status: number;
  created_at: Date;
  updated_at: Date;
  admins_id: number;
  rate: number;

}
