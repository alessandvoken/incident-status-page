import { Suspense } from 'react';
import { getPublicStatus } from '@/features/status/queries';

import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return [
    {
      org: 'fjord-systems',
    },
  ];
}

export default function StatusPage({ params }: PageProps<'/status/[org]'>) {
  return (
    <main>
      <Suspense fallback={<p>Loading</p>}>
        <OrgStatus params={params} />
      </Suspense>
    </main>
  );
}

async function OrgStatus({
  params,
}: {
  params: PageProps<'/status/[org]'>['params'];
}) {
  const { org } = await params;
  const status = await getPublicStatus(org);

  if (status == null) {
    notFound();
  }

  return (
    <>
      <h1>{status.name}</h1>
      <h2>Components</h2>
      <ul>
        {status.components.map((component) => (
          <li key={component.id}>
            <span>{component.name}</span> <span>{component.status}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
