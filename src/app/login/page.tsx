import Wrapper from '@/components/layout/wrapper';
import LoginList from '@/components/login';
import SEO from '@/components/seo';

export default function Login() {
  return (
    <>
      <Wrapper>
        <SEO pageTitle='Login' />
        <LoginList />
      </Wrapper>
    </>
  );
}
