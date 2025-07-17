import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSecret } from '../api/submitSecret';
import './ViewSecret.css';

const ViewSecret: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [secret, setSecret] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    fetchSecret(id)
      .then(({ ok, data }) => {
        if (ok && data.secret) {
          setSecret(data.secret);
        } else {
          setError(data.error || 'Secret not found or already viewed.');
        }
      })
      .catch(() => setError('Network error'))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div>
      <h2>View Secret</h2>
      {loading && <div>Loading...</div>}
      {secret && (
        <div className="view-secret-container">
          <strong>Secret:</strong>
          <div className="view-secret-value">{secret}</div>
        </div>
      )}
      {error && <div className="view-secret-error">{error}</div>}
    </div>
  );
};

export default ViewSecret; 