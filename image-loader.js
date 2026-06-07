/**
 * Custom Next.js image loader for GitHub Pages static export.
 *
 * When building with STATIC_EXPORT=1, NEXT_PUBLIC_BASE_PATH is set to
 * "/vaishvi-portfolio" so all image srcs get the correct sub-path prefix.
 * In local dev (no env var) the prefix is empty and images load normally.
 */
export default function imageLoader({ src }) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${base}${src}`;
}
