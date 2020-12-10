import { useRouter } from 'next/router';

import Error from 'next/error';

export default function ErrorPage() {
  const router = useRouter();
  const code = router.query.code || 404;

  return <Error statusCode={code} />;
}
