import {api} from '@utils/ApiUtils';
import {REQUEST_METHOD} from '@constants/api';
import {GET_PRODUCTS_PATH} from '@services/products/config';
import {ProductType} from '@components/ProductCard/types';

export const getProducts = async () => {
  try {
    return await api<ProductType[]>({
      url: GET_PRODUCTS_PATH,
      method: REQUEST_METHOD.GET,
    });
  } catch (e) {}
};
