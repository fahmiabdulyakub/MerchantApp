import {MerchantType} from '@components/MerchantCard/types';
import {ProductType} from '@components/ProductCard/types';

export type RenderItemType = {
  item: MerchantType;
  index: number;
};

export type IMerchantList = {
  data: MerchantType[];
};

export type IProductList = {
  isLoading: boolean;
  data: ProductType[];
};

export type RenderProductItemType = {
  item: ProductType;
  index: number;
};
