import Contacts from '@/components/Contacts/Contacts';
import Layout from '@/components/UI/Layout/Layout';
import { AppTheme } from '@/constants';

export default function ContactsPage() {
  return (
    <Layout title="Контакты">
      <Contacts theme={AppTheme.LIGHT} />
    </Layout>
  );
}
