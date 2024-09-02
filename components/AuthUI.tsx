'use client'

import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import useHydrate from '@/hooks/useHydrate'
import { createClient } from '@/lib/client/supabase'

export default function AuthUI() {
  const supabase = createClient()
  const isMount = useHydrate()

  if (!isMount) return null


  return (
    <section className='flex items-center justify-center pb-24 pt-40'>
      <div className='max-w-3xl'>
        <Auth
          redirectTo={process.env.NEXT_PUBLIC_AUTH_REDIRECT_TO}
          supabaseClient={supabase}
          appearance={{
            theme: ThemeSupa
          }}
          onlyThirdPartyProviders
          providers={['google', 'github']}
        />
      </div>
    </section>
  )
}
