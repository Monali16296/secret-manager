import { Secret } from '../models/secretModel';
import { v4 as uuidv4 } from 'uuid';

export async function createSecret(secretText: string): Promise<string> {
  const id = uuidv4();
  const createdAt = new Date().toISOString();
  await  Secret.create({ id, secretText, createdAt, used: 0 });
  return `/secret/${id}`;
}

export async function getSecret(id: string): Promise<string | null> {
  const secret = await Secret.findOne({ where: { id }, attributes: ['secretText', 'used'] });
  if (!secret || secret.used) {
    return null;
  }
  await Secret.update(
    { used: 1, viewedAt: new Date().toISOString() },
    { where: { id } }
  );
  return secret.secretText;
} 