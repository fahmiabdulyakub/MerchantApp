import {MerchantType} from '@components/MerchantCard/types';
import {ProductType} from '@components/ProductCard/types';

export const MOCK_MERCHANTS: MerchantType[] = [
  {
    slug: 'acme-singapore',
    name: 'ACME Singapore',
    logo: 'https://static.uat.abnk.ai/media/uploads/merchants/merchant/2024/07/08/c669ae56-3d7a-44d6-ba63-6a43e56f1d62_stsmall507x507-pad600x600f8f8f8.jpg',
    categories: [
      {
        external_id: 'home-renovation',
        name: 'Home Renovation',
      },
    ],
    description: '',
    website: 'https://acme.sg',
    highlighted_products: [],
    min_in_store_checkout_order_grand_total: '100.00',
    stores: [
      {
        external_id: 'SG-S-YJYTJTKCETDD',
        slug: 'acme-singapore-acme-singapore-store',
        name: 'ACME Singapore Store',
        address: '',
        photo: null,
      },
    ],
  },
];

export const MOCK_PRODUCTS: ProductType[] = [
  {
    category: "men's clothing",
    description:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    id: 1,
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    price: 109.95,
    rating: {
      count: 120,
      rate: 3.9,
    },
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  },
];
