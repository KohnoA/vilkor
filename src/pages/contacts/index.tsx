import Contacts from '@/components/screens/general/Contacts/Contacts';
import Layout from '@/components/Layout/Layout';
import { AppTheme } from '@/constants';

export default function ContactsPage() {
  return (
    <Layout title="Контакты">
      <Contacts theme={AppTheme.LIGHT} />
    </Layout>
  );
}
