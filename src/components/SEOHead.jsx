import React from "react";

const SEOHead = () => {
  const currentDate = new Date().toISOString();

  return (
    <>
      {/* Additional meta tags for better SEO */}
      <meta name="language" content="English" />
      <meta name="geo.region" content="MX" />
      <meta name="geo.country" content="Mexico" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />

      {/* Structured Data for Personal Website */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Jorge Wolburg",
          jobTitle: "Full Stack Developer",
          description:
            "Innovative Full Stack Developer specializing in React, Python, and AI technologies",
          url: "https://jorgewolburg.dev",
          image: "https://jorgewolburg.dev/images/developer.png",
          email: "jorge@jorgewolburg.dev",
          sameAs: [
            "https://linkedin.com/in/jorgewolburg",
            "https://github.com/jorgewolburg",
            "https://twitter.com/jorge_wol",
          ],
          worksFor: {
            "@type": "Organization",
            name: "Freelance Developer",
          },
          address: {
            "@type": "PostalAddress",
            addressCountry: "Mexico",
          },
          knowsAbout: [
            "React",
            "Python",
            "JavaScript",
            "TypeScript",
            "Node.js",
            "Three.js",
            "GSAP",
            "AI Development",
            "Web Development",
            "Full Stack Development",
            "Frontend Development",
            "Backend Development",
            "Machine Learning",
            "Database Design",
            "API Development",
          ],
          alumniOf: {
            "@type": "EducationalOrganization",
            name: "Universidad",
          },
        })}
      </script>

      {/* Website structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Jorge Wolburg Portfolio",
          description:
            "Portfolio website showcasing Jorge Wolburg's work as a Full Stack Developer",
          url: "https://jorgewolburg.dev",
          author: {
            "@type": "Person",
            name: "Jorge Wolburg",
          },
          dateModified: currentDate,
          datePublished: "2024-01-01T00:00:00Z",
          inLanguage: "en-US",
          keywords:
            "Full Stack Developer, React, Python, AI, Web Development, Portfolio",
          mainEntity: {
            "@type": "Person",
            name: "Jorge Wolburg",
          },
        })}
      </script>

      {/* Portfolio Work structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: "Jorge Wolburg's Development Portfolio",
          description:
            "A collection of web development projects showcasing skills in React, Python, and AI technologies",
          creator: {
            "@type": "Person",
            name: "Jorge Wolburg",
          },
          url: "https://jorgewolburg.dev",
          dateCreated: "2024-01-01",
          dateModified: currentDate,
          keywords: [
            "Web Development",
            "React",
            "Python",
            "AI",
            "Portfolio",
            "Full Stack",
          ],
          genre: "Technology",
          inLanguage: "en-US",
        })}
      </script>

      {/* Breadcrumb structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://jorgewolburg.dev",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Portfolio",
              item: "https://jorgewolburg.dev#work",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Experience",
              item: "https://jorgewolburg.dev#experience",
            },
            {
              "@type": "ListItem",
              position: 4,
              name: "Contact",
              item: "https://jorgewolburg.dev#contact",
            },
          ],
        })}
      </script>
    </>
  );
};

export default SEOHead;
