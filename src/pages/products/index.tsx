import Products from '@/components/Products/Products';
import Layout from '@/components/UI/Layout/Layout';
import Texture from '@/components/UI/Texture/Texture';
import { PRODUCTS } from '@/constants/products';

export default function ProductsPage() {
  return (
    <Layout title="Товары">
      <Texture>
        <Products content={PRODUCTS} />
      </Texture>
    </Layout>
  );
}
