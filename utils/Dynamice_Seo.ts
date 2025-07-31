import { Metadata } from "next";
import { seoData } from "@/json";
import { cn } from "@/lib/utils";

const DynamicSeo = (index: number): Metadata => {
  const currentSeoData = seoData[index] || {};

  return {
    title: currentSeoData.LAYOUT_SEO_TITLE || "",
    description: currentSeoData.LAYOUT_SEO_DESCRIPTION || "",
    generator: currentSeoData.LAYOUT_CREATORS || "",
    applicationName: currentSeoData.LAYOUT_APPLICATION_NAME || "",
    referrer: "origin-when-cross-origin",
    keywords: currentSeoData.LAYOUT_KEYWORDS || "",
    authors: [
      {
        name: "Slum To Stage",
        url: "https://www.slum2stage.org/",
      },
    ],
    creator: currentSeoData.LAYOUT_CREATORS || "",
    publisher: "Slum To Stage",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(cn(currentSeoData.LAYOUT_URL || "")),
    alternates: {
      canonical: currentSeoData.LAYOUT_URL || "",
      languages: {
        "en-US": "/en-US",
      },
    },
    openGraph: {
      title: currentSeoData.LAYOUT_SEO_TITLE || "",
      description: currentSeoData.LAYOUT_SEO_DESCRIPTION || "",
      url: currentSeoData.LAYOUT_URL || "",
      siteName: currentSeoData.LAYOUT_APPLICATION_NAME || "",
      images: [
        {
          url: "/assets/images/og.png",
          width: 1996,
          height: 872,
          alt: currentSeoData.LAYOUT_APPLICATION_NAME || "",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: [
        {
          url: "/assets/images/favicon-32x32.png",
          sizes: "32x32",
          type: "image/png",
        },
        {
          url: "/asets/images/favicon-16x16.png",
          sizes: "16x16",
          type: "image/png",
        },
      ],
      shortcut: "/assets/images/favicon-32x32.png",
      apple: [
        {
          url: "/assets/images/apple-touch-icon.png",
          sizes: "180x180",
          type: "image/png",
        },
      ],
      other: {
        rel: "/assets/images/android-chrome-512x512",
        url: "/assets/images/android-chrome-512x512.png",
      },
    },
    verification: {
      google: "We-ws3A5LZKL1ccqgaoSzg-e6kRdRlMXlgKPWvEDP6o",
      yandex: "21bf5d2f690a11c9",
      yahoo: "b91628d9ce0e835cf74e62eab04e5fd3",
      other: {
        "facebook-domain-verification": ["es6d6v9o1kur3zsrb0sbzzyueeac0w"],
      },
    },
    twitter: {
      card: "summary_large_image",
      title: currentSeoData.LAYOUT_APPLICATION_NAME || "",
      description: currentSeoData.LAYOUT_SEO_DESCRIPTION || "",
      creator: "@slumtostage",
      site: "@slumtostage",
      images: [
        {
          url: "/assets/images/og.png",
          alt: currentSeoData.LAYOUT_APPLICATION_NAME || "",
        },
      ],
    },
    category: "Nonprofit & Social Impact",
    classification: "Education & Arts Outreach",
  };
};

export default DynamicSeo;
