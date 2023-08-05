import Background from '@/components/UI/Background/Background';
import Products from '@/components/screens/general/Products/Products';
import Layout from '@/components/Layout/Layout';
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
