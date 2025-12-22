import { Helmet } from "react-helmet-async";

interface SEOProps {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
    canonical?: string;
    type?: string;
}

const SEO = ({
    title = "Bulk CNC Machined Components | Mantriq Industrial",
    description = "Get a landed cost advantage with Mantriq Industrial. High-quality bulk CNC machined components delivered with confidence.",
    image = "/og-image.png", // Ensure this exists in public folder
    url = "https://mantriqindustrial.ca",
    canonical,
    type = "website"
}: SEOProps) => {
    const siteTitle = "Mantriq Industrial";
    const fullTitle = title.includes(siteTitle) ? title : `${title} | ${siteTitle}`;

    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            {canonical && <link rel="canonical" href={canonical} />}
            {!canonical && url && <link rel="canonical" href={url} />}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Helmet>
    );
};

export default SEO;
