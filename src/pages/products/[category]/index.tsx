import Layout from '@/components/UI/Layout/Layout';
import { GetStaticPaths, GetStaticProps } from 'next';
import { PRODUCTS } from '@/constants/products';
import { IProduct } from '@/types';
import dynamic from 'next/dynamic';
import CategoryProductsList from './components/CategoryProductsList/CategoryProductsList';
import BarkInfo from './components/BarkInfo/BarkInfo';
import { ProductCategory } from '@/constants';
import PeatInfo from './components/PeatInfo/PeatInfo';
import MulchInfo from './components/MulchInfo/MulchInfo';
import PlantsInfo from './components/PlantsInfo/PlantsInfo';
import PlantsSection from './components/PlantsSection/PlantsSection';

const Background = dynamic(() => import('@/components/UI/Background/Background'), { ssr: false });

interface CategoryPageProps {
  category: IProduct;
}

export default function CategoryPage({ category }: CategoryPageProps) {
  const { title, items, category: categoryTitle } = category;

  return (
    <Layout title={title}>
      {categoryTitle === ProductCategory.PLANTS ? (
        <PlantsSection />
      ) : (
        <section className="container section">
          <h2 className="title title_left">{title}</h2>

          <CategoryProductsList products={items} category={categoryTitle} />
        </section>
      )}

      <Background>
        {categoryTitle === ProductCategory.BARK && <BarkInfo />}
        {categoryTitle === ProductCategory.PEAT && <PeatInfo />}
        {categoryTitle === ProductCategory.MULCH && <MulchInfo />}
        {categoryTitle === ProductCategory.PLANTS && <PlantsInfo />}
      </Background>
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
