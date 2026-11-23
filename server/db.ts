import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from './generated/client.ts';

export function getRuntimeConnectionString(value = process.env.DATABASE_URL): string {
  if (!value) throw new Error('DATABASE_URL must be configured.');

  const url = new URL(value);
  if (url.protocol !== 'postgresql:' && url.protocol !== 'postgres:') {
    throw new Error('DATABASE_URL must be a PostgreSQL connection URL.');
  }

  // Make the pg driver's certificate verification explicit for Neon TCP URLs.
  if (['require', 'prefer', 'verify-ca'].includes(url.searchParams.get('sslmode') || '')) {
    url.searchParams.set('sslmode', 'verify-full');
  }

  return url.toString();
}

export function createDatabaseClient(): PrismaClient {
  const adapter = new PrismaPg({ connectionString: getRuntimeConnectionString() });
  return new PrismaClient({ adapter });
}
