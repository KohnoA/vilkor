import Layout from '@/components/Layout/Layout';
import { GetStaticPaths, GetStaticProps } from 'next';
import { PRODUCTS } from '@/constants/products';
import { IProduct } from '@/types';
import dynamic from 'next/dynamic';
import { ProductCategory } from '@/constants';
import BarkInfo from '@/components/screens/productsPage/BarkInfo/BarkInfo';
import CategoryProductsList from '@/components/screens/productsPage/CategoryProductsList/CategoryProductsList';
import PeatInfo from '@/components/screens/productsPage/PeatInfo/PeatInfo';
import MulchInfo from '@/components/screens/productsPage/MulchInfo/MulchInfo';
import PlantsInfo from '@/components/screens/productsPage/PlantsInfo/PlantsInfo';
import PlantsSection from '@/components/screens/productsPage/PlantsSection/PlantsSection';

const Background = dynamic(() => import('@/components/UI/Background/Background'));

interface CategoryPageProps {
  category: IProduct;
}

export default function CategoryPage({ category }: CategoryPageProps) {
  const { title, items, category: categoryTitle } = category;

  return (
    <Layout title={title}>
      <Background>
        {categoryTitle === ProductCategory.PLANTS ? (
          <PlantsSection />
        ) : (
          <CategoryProductsList title={title} products={items} category={categoryTitle} />
        )}
      </Background>

      {categoryTitle === ProductCategory.BARK && <BarkInfo />}
      {categoryTitle === ProductCategory.PEAT && <PeatInfo />}
      {categoryTitle === ProductCategory.MULCH && <MulchInfo />}
      {categoryTitle === ProductCategory.PLANTS && <PlantsInfo />}
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { category: categoryRoute } = context.params ?? {};
  const category = PRODUCTS.find(({ category }) => category === categoryRoute);

  if (!category) {
    return {
      notFound: true,
    };
  }

  return {
    props: { category },
  };
};
