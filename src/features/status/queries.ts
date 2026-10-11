import 'server-only';

export type PublicStatus = {
  slug: string;
  name: string;
};

const organizations: PublicStatus[] = [
  { slug: 'fjord-systems', name: 'Fjord Systems' },
];

export async function getPublicStatus(
  org: string,
): Promise<PublicStatus | null> {
  return (
    organizations.find((organization) => organization.slug === org) ?? null
  );
}
