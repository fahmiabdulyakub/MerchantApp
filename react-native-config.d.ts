declare module 'react-native-config' {
  export interface NativeConfig {
    LOGIN_URL: string;
    PRODUCT_URL: string;
  }

  export const Config: NativeConfig;
  export default Config;
}
