import Services from '@/components/Services/Services';
import Layout from '@/components/UI/Layout/Layout';
import { SERVICES } from '@/constants/services';

export default function ServicesPage() {
  return (
    <Layout title="Услуги">
      <Services content={SERVICES} />
    </Layout>
  );
}
