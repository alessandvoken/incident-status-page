import { Suspense } from 'react';

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
  return <h1>{org}</h1>;
}
