import Contacts from '@/components/Contacts/Contacts';
import Layout from '@/components/UI/Layout/Layout';
import { AppTheme } from '@/constants';
import dynamic from 'next/dynamic';

const Background = dynamic(() => import('@/components/UI/Background/Background'), { ssr: false });

export default function ContactsPage() {
  return (
    <Layout title="Контакты">
      <Background>
        <div className="single-section-page">
          <Contacts theme={AppTheme.LIGHT} />
        </div>
      </Background>
    </Layout>
  );
}
