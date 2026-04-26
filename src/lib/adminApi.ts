import type { AdminDashboardResponse, SiteRuntimeConfig } from '../types'

function createHeaders(adminKey?: string) {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  }

  if (adminKey) {
    headers['x-admin-key'] = adminKey
  }

  return headers
}

export async function fetchAdminDashboard(adminKey: string) {
  const response = await fetch('/api/admin/dashboard', {
    headers: createHeaders(adminKey),
  })

  if (!response.ok) {
    throw new Error('Unable to load admin dashboard.')
  }

  return (await response.json()) as AdminDashboardResponse
}

export async function updateSiteConfig(adminKey: string, config: SiteRuntimeConfig) {
  const response = await fetch('/api/admin/site-config', {
    method: 'PUT',
    headers: createHeaders(adminKey),
    body: JSON.stringify(config),
  })

  if (!response.ok) {
    const payload = (await response.json().catch(() => null)) as { message?: string } | null
    throw new Error(payload?.message ?? 'Unable to update site configuration.')
  }

  return (await response.json()) as { ok: true; config: SiteRuntimeConfig }
}
