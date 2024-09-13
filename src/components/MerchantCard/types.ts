export interface IMerchantCard {
  data: MerchantType;
}
export interface MerchantType {
  slug: string;
  name: string;
  logo: string;
  categories: CategoriesEntity[];
  description: string;
  website: string;
  highlighted_products?: null[] | null;
  min_in_store_checkout_order_grand_total: string;
  stores: StoresEntity[];
}
export interface CategoriesEntity {
  external_id: string;
  name: string;
}
export interface StoresEntity {
  external_id: string;
  slug: string;
  name: string;
  address: string;
  photo?: null;
}
