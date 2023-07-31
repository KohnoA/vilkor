import Products from '@/components/Products/Products';
import Background from '@/components/UI/Background/Background';
import Layout from '@/components/UI/Layout/Layout';
import { PRODUCTS } from '@/constants/products';

export default function ProductsPage() {
  return (
    <Layout title="Товары">
      <Background className="single-section-page">
        <Products content={PRODUCTS} />
      </Background>
    </Layout>
  );
}
