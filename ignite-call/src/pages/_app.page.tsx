import '../lib/day'

import { globalStyles } from "../styles/global";
import type { AppProps } from "next/app";
import { SessionProvider } from 'next-auth/react'
import { queryClient } from '@/lib/react-query';
import { QueryClientProvider } from '@tanstack/react-query'
import { DefaultSeo } from 'next-seo';

globalStyles()

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <DefaultSeo
                openGraph={{
                    type: 'website',
                    locale: 'pt_BR',
                    url: 'https://www.ignite-call.rocketseat.com.br',
                    siteName: 'Ignite Call',
                }}
            />
            <SessionProvider session={session}>
                <Component {...pageProps} />
            </SessionProvider>
        </QueryClientProvider>
    )
}