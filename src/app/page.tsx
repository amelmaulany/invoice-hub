'use client'

import * as PageState from '@/components/shared-page-states/templates/templates'

export default function Home() {
  return (
    <PageState.Root>
      <PageState.Animation src="/animations/dashboard.lottie" largeAnimation />
      <PageState.TextWrapper>
        <PageState.Title>Welcome to InvoiceHub!</PageState.Title>
        <PageState.Description>Explore our features</PageState.Description>
      </PageState.TextWrapper>
    </PageState.Root>
  );
}
