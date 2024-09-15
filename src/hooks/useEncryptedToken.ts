import {STORAGE_KEYS} from '@constants/storage';
import {useCallback, useMemo} from 'react';
import {MMKVLoader, useMMKVStorage} from 'react-native-mmkv-storage';

const MMKV = new MMKVLoader().withEncryption().initialize();

const useEncryptedToken = () => {
  const [token, setToken] = useMMKVStorage<string | null>(
    STORAGE_KEYS.TOKEN,
    MMKV,
    null,
  );

  const saveToken = useCallback(
    (newToken: string) => {
      setToken(newToken);
    },
    [setToken],
  );

  const removeToken = useCallback(() => {
    setToken(null);
  }, [setToken]);

  return useMemo(
    () => ({
      token,
      saveToken,
      removeToken,
    }),
    [token, saveToken, removeToken],
  );
};

export default useEncryptedToken;
