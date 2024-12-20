import ProtectedRoute from '@/utils/ProtectedRoute';
import { useSession } from 'next-auth/react';
import React from 'react';

const Check = () => {
  const { data } = useSession();
  return <div>Check</div>;
};

export default ProtectedRoute(Check);
