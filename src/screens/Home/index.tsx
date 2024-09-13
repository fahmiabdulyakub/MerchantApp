import {View} from 'react-native';
import React from 'react';
import Header from '@screens/Home/components/Header';
import {Button, Input} from '@components';
import {ICQRCode, ICSearch} from '@assets/icons';
import {styles} from '@screens/Home/styles';
import MerchantList from './components/MerchantList';

const Home = () => {
  const data = [
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

  return (
    <View style={styles.container}>
      <Header />
      <MerchantList data={data} />
      <View style={styles.searchContainer}>
        <Input
          style={styles.search}
          left={<ICSearch />}
          right={<Button icon={<ICQRCode />} />}
          placeholder="Search a store or order"
        />
      </View>
    </View>
  );
};

export default Home;
