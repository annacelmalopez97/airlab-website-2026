import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
});

export function imageUrl(source: { asset?: { _ref?: string } } | null | undefined, width = 1200): string {
  if (!source?.asset?._ref) return '';
  const ref = source.asset._ref;
  const [, id, dimensions, format] = ref.match(/^image-([a-zA-Z0-9]+)-(\d+x\d+)-(\w+)$/) || [];
  if (!id) return '';
  const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
  const dataset = import.meta.env.PUBLIC_SANITY_DATASET || 'production';
  return `https://cdn.sanity.io/images/${projectId}/${dataset}/${id}-${dimensions}.${format}?w=${width}&auto=format&fit=max&q=80`;
}

export const teamQuery = `*[_type == "teamMember"] | order(order asc) { _id, name, role, category, photo, photoUrl, bio, linkedin, order }`;

export const partnersQuery = `*[_type == "partner"] | order(order asc) { _id, name, logo, website, category, order }`;

export const newsListQuery = `*[_type == "newsArticle"] | order(publishedAt desc) { _id, title, slug, publishedAt, category, coverImage, coverImageUrl, excerpt, externalUrl }`;

export const newsAllQuery = `*[_type == "newsArticle"] | order(publishedAt desc) { _id, title, slug, publishedAt, category, coverImage, coverImageUrl, excerpt, body, externalUrl }`;

export const newsArticleQuery = `*[_type == "newsArticle" && slug.current == $slug][0] { _id, title, slug, publishedAt, category, coverImage, coverImageUrl, excerpt, body, externalUrl }`;

export const homePageQuery = `*[_type == "homePage"][0] { heroSubtitle, heroVideoUrl, heroPrimaryButtonText, heroPrimaryButtonUrl, stats, ctaTitle, ctaSubtitle, ctaLocation, ctaPlatformUrl, ctaApiUrl }`;

export const contactPageQuery = `*[_type == "contactPage"][0] { heroSubtitle, address, apiUrl, rcpUrl }`;

export const joinUsPageQuery = `*[_type == "joinUsPage"][0] { heroSubtitle, missionPara1, missionPara2, stats, careersDescription, careersUrl, address }`;
