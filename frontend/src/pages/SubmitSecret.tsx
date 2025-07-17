import React, { useState, useCallback } from 'react';
import SecretForm from '../components/SecretForm';
import SecretLink from '../components/SecretLink';
import ErrorMessage from '../components/ErrorMessage';
import { submitSecret } from '../api/submitSecret';

const SubmitSecret: React.FC = () => {
  const [secret, setSecret] = useState('');
  const [link, setLink] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setLink(null);
    try {
      const { ok, data } = await submitSecret(secret);
      if (ok && data.link) {
        setLink(window.location.origin + data.link);
        setSecret('');
      } else {
        setError(data.error || 'Failed to create secret');
      }
    } catch {
      setError('Network error');
    } finally {
      setLoading(false);
    }
  }, [secret]);

  return (
    <div>
      <h2>Submit a One-Time Secret</h2>
      <SecretForm
        secret={secret}
        onSecretChange={setSecret}
        onSubmit={handleSubmit}
        loading={loading}
      />
      {link && <SecretLink link={link} />}
      {error && <ErrorMessage message={error} />}
    </div>
  );
};

export default SubmitSecret; 