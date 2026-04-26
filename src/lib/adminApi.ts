import type {
  AdminDashboardResponse,
  AdminLoginResponse,
  AdminSessionResponse,
  SiteRuntimeConfig,
} from '../types'

function createHeaders() {
  return {
    'Content-Type': 'application/json',
  }
}

async function unwrapError(response: Response, fallback: string) {
  const payload = (await response.json().catch(() => null)) as { message?: string } | null
  throw new Error(payload?.message ?? fallback)
}

export async function fetchAdminSession() {
  const response = await fetch('/api/admin/session')
  if (!response.ok) {
    throw new Error('Unable to validate admin session.')
  }

  return (await response.json()) as AdminSessionResponse
}

export async function loginAdmin(password: string) {
  const response = await fetch('/api/admin/login', {
    method: 'POST',
    headers: createHeaders(),
    body: JSON.stringify({ password }),
  })

  if (!response.ok) {
    await unwrapError(response, 'Unable to sign in.')
  }

  return (await response.json()) as AdminLoginResponse
}

export async function logoutAdmin() {
  const response = await fetch('/api/admin/logout', {
    method: 'POST',
  })

  if (!response.ok) {
    await unwrapError(response, 'Unable to sign out.')
  }

  return (await response.json()) as { ok: true }
}

export async function fetchAdminDashboard() {
  const response = await fetch('/api/admin/dashboard')
  if (!response.ok) {
    await unwrapError(response, 'Unable to load admin dashboard.')
  }

  return (await response.json()) as AdminDashboardResponse
}

export async function updateSiteConfig(config: SiteRuntimeConfig) {
  const response = await fetch('/api/admin/site-config', {
    method: 'PUT',
    headers: createHeaders(),
    body: JSON.stringify(config),
  })

  if (!response.ok) {
    await unwrapError(response, 'Unable to update site configuration.')
  }

  return (await response.json()) as { ok: true; config: SiteRuntimeConfig }
}
