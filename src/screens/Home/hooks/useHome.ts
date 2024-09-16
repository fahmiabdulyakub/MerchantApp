import {useCallback, useEffect, useMemo, useState} from 'react';
import {useIsFocused} from '@react-navigation/native';
import {getFeaturedMerchant} from '@services';
import {MerchantType} from '@components/MerchantCard/types';

const useHome = () => {
  const [data, setData] = useState<MerchantType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const focused = useIsFocused();

  const getMerchant = useCallback(async () => {
    setIsLoading(true);
    const response = await getFeaturedMerchant();
    if (response?.data.merchants) {
      setData(response.data.merchants);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getMerchant();
  }, [getMerchant]);
  return useMemo(
    () => ({data, isLoading, focused}),
    [data, isLoading, focused],
  );
};

export default useHome;
