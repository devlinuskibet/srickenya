import { Helmet } from "react-helmet-async";

type SEOProps = {
  title: string;
  description: string;
  type?: string;
  url?: string;
  image?: string;
};

export default function SEO({ title, description, type = "website", url, image }: SEOProps) {
  const siteTitle = "SRIC - Security Research & Information Centre";
  const fullTitle = title === "Home" ? siteTitle : `${title} | ${siteTitle}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      {url && <meta property="og:url" content={url} />}
      {image && <meta property="og:image" content={image} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  );
}
