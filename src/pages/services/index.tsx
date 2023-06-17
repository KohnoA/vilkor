import Services from '@/components/Services/Services';
import Layout from '@/components/UI/Layout/Layout';
import { SERVICES } from '@/constants/services';
import dynamic from 'next/dynamic';

const Texture = dynamic(() => import('@/components/UI/Texture/Texture'));

export default function ServicesPage() {
  return (
    <Layout title="Услуги">
      <Texture>
        <div className="single-section-page">
          <Services content={SERVICES} />
        </div>
      </Texture>
    </Layout>
  );
}
