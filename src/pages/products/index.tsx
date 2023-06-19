import Products from '@/components/Products/Products';
import Layout from '@/components/UI/Layout/Layout';
import { PRODUCTS } from '@/constants/products';

export default function ProductsPage() {
  return (
    <Layout title="Товары">
      <Products content={PRODUCTS} />
    </Layout>
  );
}
