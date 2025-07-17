import React from 'react';
import './SecretForm.css';

interface SecretFormProps {
  secret: string;
  onSecretChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  loading: boolean;
}

const SecretForm: React.FC<SecretFormProps> = ({ secret, onSecretChange, onSubmit, loading }) => (
  <form onSubmit={onSubmit}>
    <textarea
      value={secret}
      onChange={e => onSecretChange(e.target.value)}
      placeholder="Enter your secret..."
      rows={4}
      className="secret-form-textarea"
      required
    />
    <br />
    <button type="submit" disabled={loading || !secret.trim()} className="secret-form-button">
      {loading ? 'Submitting...' : 'Create Secret Link'}
    </button>
  </form>
);

export default SecretForm; 