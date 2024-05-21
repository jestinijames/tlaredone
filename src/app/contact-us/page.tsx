import { Metadata } from 'next';

import ContactUsSection from '@/components/contact-us';
import Wrapper from '@/components/layout/wrapper';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Find our contact details here.',
};

export default function ContactUs() {
  return (
    <>
      <Wrapper>
        <ContactUsSection />
      </Wrapper>
    </>
  );
}
