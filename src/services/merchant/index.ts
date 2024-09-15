import {api} from '@utils/ApiUtils';
import {GetFeaturedMerchantResponseType} from '@services/merchant/types';
import {GET_FEATURED_MERCHANT_PATH} from '@services/merchant/config';
import {REQUEST_METHOD} from '@constants/api';
import {COUNTRY_CODE} from '@screens/SignIn/config';

export const getFeaturedMerchant = async () => {
  try {
    return await api<GetFeaturedMerchantResponseType>({
      url: GET_FEATURED_MERCHANT_PATH,
      method: REQUEST_METHOD.GET,
      params: {country: COUNTRY_CODE.country_id},
    });
  } catch (e) {}
};
