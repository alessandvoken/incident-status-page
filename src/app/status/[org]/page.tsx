import { Suspense } from 'react';
import { getPublicStatus } from '@/features/status/queries';

import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return [
    {
      org: 'acme',
    },
  ];
}

export default function StatusPage({ params }: PageProps<'/status/[org]'>) {
  return (
    <main>
      <Suspense fallback={<p>Loading</p>}>
        <OrgHeading params={params} />
      </Suspense>
    </main>
  );
}

async function OrgHeading({
  params,
}: {
  params: PageProps<'/status/[org]'>['params'];
}) {
  const { org } = await params;
  const status = await getPublicStatus(org);

  if (status == null) {
    notFound();
  }

  return <h1>{status.name}</h1>;
}
