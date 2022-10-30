import { useState } from 'react';

interface IUser {
  data: Record<string, string>;
  error?: unknown;
  loading?: boolean;
}

export default () => {
  const [user, setUser] = useState<IUser>();

  const { data, error, loading } = user || {};

  return {
    data,
    error,
    loading,
    setUser,
  };
};
