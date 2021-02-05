import { client, imageBuilder } from './sanity';

export { imageBuilder };

export const fetchWork = async () => {
  const result = (
    await client.fetch(
      `*[!(_id in path("drafts.**")) &&_type == 'arbeit' && showInWork == true] | order(_createdAt desc) { _id, title, description, 'imageUrl': image.asset->url }`
    )
  ).map((entry) => ({
    ...entry,
    imageUrl: entry.imageUrl + '?w=1750&h=1750&fit=clip&auto=format',
    thumbnailUrl: entry.imageUrl + '?w=250&h=250&fit=crop&auto=format',
  }));

  console.log(result);

  return {
    work: result,
  };
};

export const fetchTadelakt = async () => {
  const result = (
    await client.fetch(
      `*[!(_id in path("drafts.**")) &&_type == 'arbeit' && showInTadelakt == true] | order(_createdAt desc) { _id, title, description, 'imageUrl': image.asset->url }`
    )
  ).map((entry) => ({
    ...entry,
    imageUrl: entry.imageUrl + '?w=1750&h=1750&fit=clip&auto=format',
    thumbnailUrl: entry.imageUrl + '?w=250&h=250&fit=crop&auto=format',
  }));

  return {
    work: result,
  };
};

export const fetchLehmputz = async () => {
  const result = (
    await client.fetch(
      `*[!(_id in path("drafts.**")) &&_type == 'arbeit' && showInLehmputz == true] | order(_createdAt desc) { _id, title, description, 'imageUrl': image.asset->url }`
    )
  ).map((entry) => ({
    ...entry,
    imageUrl: entry.imageUrl + '?w=1750&h=1750&fit=clip&auto=format',
    thumbnailUrl: entry.imageUrl + '?w=250&h=250&fit=crop&auto=format',
  }));

  return {
    work: result,
  };
};

export const fetchHerstellungUndRestaurierung = async () => {
  const result = (
    await client.fetch(
      `*[!(_id in path("drafts.**")) &&_type == 'arbeit' && showInHerstellungUndRestaurierung == true] | order(_createdAt desc) { _id, title, description, 'imageUrl': image.asset->url }`
    )
  ).map((entry) => ({
    ...entry,
    imageUrl: entry.imageUrl + '?w=1750&h=1750&fit=clip&auto=format',
    thumbnailUrl: entry.imageUrl + '?w=250&h=250&fit=crop&auto=format',
  }));

  return {
    work: result,
  };
};
