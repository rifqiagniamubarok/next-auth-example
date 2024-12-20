import Image from 'next/image';
import { Inter } from 'next/font/google';
import LoginBtn from '@/components/LoginBtn';
import AccessToken from '@/components/accessToken';
import ProtectedRoute from '@/utils/ProtectedRoute';

const inter = Inter({ subsets: ['latin'] });

const Home = () => {
  return (
    <div>
      <AccessToken />
      <p>hello</p>
      <LoginBtn />
    </div>
  );
};

export default ProtectedRoute(Home);
