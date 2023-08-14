import Contacts from '@/components/screens/general/Contacts/Contacts';
import Layout from '@/components/Layout/Layout';
import bgImage from 'public/images/background.jpg';
import dynamic from 'next/dynamic';

const Background = dynamic(() => import('@/components/UI/Background/Background'));

export default function ContactsPage() {
  return (
    <Layout title="Контакты">
      <Background image={bgImage}>
        <Contacts />
      </Background>
    </Layout>
  );
}
