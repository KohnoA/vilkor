import Products from '@/components/screens/general/Products/Products';
import Layout from '@/components/Layout/Layout';
import { PRODUCTS } from '@/constants/products';
import dynamic from 'next/dynamic';

const Background = dynamic(() => import('@/components/UI/Background/Background'));

export default function ProductsPage() {
  return (
    <Layout title="Товары">
      <Background>
        <Products content={PRODUCTS} />
      </Background>
    </Layout>
  );
}
