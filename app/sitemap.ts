import type { MetadataRoute } from 'next'
// Ensure static generation for `output: export` builds
export const dynamic = 'force-static'
import fs from 'fs'
import path from 'path'

// Generate the sitemap from the filesystem so it stays in sync with routes
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || 'http://localhost:3000'

  const appDir = path.join(process.cwd(), 'app')

  // Recursively discover all route folders containing a page.tsx
  const routes = discoverRoutes(appDir)
    // Convert absolute app paths to route paths
    .map((absDir) => {
      const rel = path.relative(appDir, absDir)
      const routePath = rel === '' ? '/' : `/${rel.replace(/\\/g, '/')}`
      // Use the page file's mtime as lastModified when available
      const pageFile = path.join(absDir, 'page.tsx')
      let lastModified: Date | undefined
      try {
        const stat = fs.statSync(pageFile)
        lastModified = stat.mtime
      } catch {
        // best-effort; ignore if we can't stat
      }
      return { routePath, lastModified }
    })
    // Deduplicate (in case of stray duplicates)
    .reduce<{ routePath: string; lastModified?: Date }[]>((acc, cur) => {
      if (!acc.some((r) => r.routePath === cur.routePath)) acc.push(cur)
      return acc
    }, [])

  // Assemble entries
  const entries: MetadataRoute.Sitemap = routes.map(({ routePath, lastModified }) => ({
    url: new URL(routePath, ensureTrailingSlash(baseUrl)).toString().replace(/\/$/, routePath === '/' ? '/' : ''),
    lastModified: lastModified ?? new Date(),
    changeFrequency: 'weekly',
    priority: routePath === '/' ? 1.0 : 0.7,
  }))

  return entries
}

function discoverRoutes(dir: string): string[] {
  const results: string[] = []

  // If this folder represents a route (contains page.tsx), include it
  if (fs.existsSync(path.join(dir, 'page.tsx'))) {
    results.push(dir)
  }

  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    if (!entry.isDirectory()) continue

    // Exclude non-route or special folders
    if (shouldSkip(entry.name)) continue

    const child = path.join(dir, entry.name)
    results.push(...discoverRoutes(child))
  }
  return results
}

function shouldSkip(name: string): boolean {
  // Skip internal or special folders that aren't part of the public route tree
  return (
    name.startsWith('_') ||
    name === 'api' ||
    name === 'pages' ||
    name === 'node_modules' ||
    name === '.next'
  )
}

function ensureTrailingSlash(u: string): string {
  return u.endsWith('/') ? u : `${u}/`
}
