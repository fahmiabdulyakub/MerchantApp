import {MerchantType} from '@components/MerchantCard/types';

export type RenderItemType = {
  item: MerchantType;
  index: number;
};

export type IMerchantList = {
  data: MerchantType[];
};
