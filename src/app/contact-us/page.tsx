import ContactUsList from '@/components/contact-us';
import Wrapper from '@/components/layout/wrapper';
import SEO from '@/components/seo';

export default function ContactUs() {
  return (
    <>
      <Wrapper>
        <SEO pageTitle='Contact Us' />
        <ContactUsList />
      </Wrapper>
    </>
  );
}
