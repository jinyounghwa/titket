import React, { Suspense } from 'react';
import PaymentClient from './PaymentClient';

export const dynamic = "force-dynamic";

export default function PaymentPage() {
  return (
    <Suspense fallback={<div>로딩 중...</div>}>
      <PaymentClient />
    </Suspense>
  );
}