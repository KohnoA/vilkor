import Services from '@/components/Services/Services';
import Layout from '@/components/UI/Layout/Layout';
import Texture from '@/components/UI/Texture/Texture';
import { SERVICES } from '@/constants/services';

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
