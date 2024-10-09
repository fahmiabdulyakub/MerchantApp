import {useCallback, useEffect, useState} from 'react';
import {useIsFocused} from '@react-navigation/native';
import {getProducts} from '@services/products';
import {ProductType} from '@components/ProductCard/types';

const useHome = () => {
  const [data, setData] = useState<ProductType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const focused = useIsFocused();

  const getMerchant = useCallback(async () => {
    setIsLoading(true);
    const response = await getProducts();
    if (response?.data) {
      setData(response.data);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getMerchant();
  }, [getMerchant]);

  return {data, isLoading, focused};
};

export default useHome;
