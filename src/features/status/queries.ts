import 'server-only';
import type { ComponentStatus } from '@/lib/component-status';

type PublicComponent = {
  id: string;
  name: string;
  status: ComponentStatus;
};

export type PublicStatus = {
  slug: string;
  name: string;
  components: PublicComponent[];
};

const organizations: PublicStatus[] = [
  {
    slug: 'fjord-systems',
    name: 'Fjord Systems',
    components: [
      { id: 'web-app', name: 'Web app', status: 'operational' },
      { id: 'api', name: 'API', status: 'degraded' },
      { id: 'payments', name: 'Payments', status: 'operational' },
      { id: 'login', name: 'Login', status: 'operational' },
      { id: 'webhooks', name: 'Webhooks', status: 'partial_outage' },
    ],
  },
];

export async function getPublicStatus(
  org: string,
): Promise<PublicStatus | null> {
  return (
    organizations.find((organization) => organization.slug === org) ?? null
  );
}
