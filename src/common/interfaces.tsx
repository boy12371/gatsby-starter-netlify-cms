import React from "react";
import { Iterable } from "immutable";
import { ChildImageSharpVariants, Image } from "./types";

export interface PreviewProps {
    entry: Iterable<any, any>;
    widgetFor: (name: string) => string;
    getAsset: <R>(name: string) => R;
}

export interface BaseContentProps<C> {
    content: C;
    className?: string;
}

export interface HTMLContentProps extends BaseContentProps<string> {}

export interface ContentProps extends BaseContentProps<React.ReactText> {}

export interface ImageInfoWithText extends ImageInfo {
    text?: string;
}

export interface FeatureGridProps {
    gridItems: ImageInfoWithText[];
}

export interface ChildImageSharp {
    fluid: {
        aspectRatio: number;
        src: string;
        srcSet: string;
        sizes: string;
    };
}

export interface ImageInfo<CIS = ChildImageSharpVariants> {
    alt?: string;
    childImageSharp: CIS;
    image: Image;
    style?: React.CSSProperties;
}

export interface PreviewCompatibleImageProps {
    imageInfo: ImageInfo | string;
}

export interface Price {
    plan?: string;
    price?: string | number;
    description?: string;
    items: React.ReactText[];
}

export interface PricingProps {
    data: Price[];
}

export interface Testimonial {
    quote?: string;
    author?: string;
}

export interface TestimonialsProps {
    testimonials: Testimonial[];
}

export interface AboutPageTemplateProps {
    title?: React.ReactText;
    content: string;
    contentComponent?: React.ComponentType<BaseContentProps<any>>;
}

export interface AboutPageProps {
    data: any;
}

export interface Frontmatter {
    description: string;
    title: string;
    tags?: string[];
    date?: string;
}

export interface MarkdownRemark<F extends object = Frontmatter> {
    html: string;
    frontmatter: F;
}

export interface Edge<F extends Frontmatter = Frontmatter> {
    node: {
        fields: {
            slug: string;
        };
        frontmatter: F;
    };
}

export interface TagRouteProps<F extends Frontmatter = Frontmatter> {
    data: {
        allMarkdownRemark: {
            edges: Edge<F>[];
            totalCount: number;
        };
        site: {
            siteMetadata: {
                title: string;
            };
        };
    };
    pageContext: {
        tag: string;
    };
}

// ====================== SearchPage ======================

export interface SearchPostTemplateProps {
    content: React.ReactNode;
    contentComponent?: React.ComponentType<BaseContentProps<any>>;
    description: React.ReactText;
    tags?: string[];
    title: string;
    helmet?: React.ReactNode;
}

export interface SearchPostData<F extends object = Frontmatter> {
    markdownRemark: MarkdownRemark<F>;
}

export interface SearchPostProps {
    data: SearchPostData;
}

export interface SearchPageIntro {
    blurbs: ImageInfoWithText[];
}

export interface SearchPageMain {
    heading?: string;
    description?: string;
    image1: Image;
    image2: Image;
    image3: Image;
}

export interface SearchPagePricing {
    heading?: string;
    description?: string;
    plans: Price[];
}

export interface SearchPageTemplateProps {
    image: Image;
    title?: string;
    heading?: string;
    description?: string;
    intro: SearchPageIntro;
    main: SearchPageMain;
    testimonials: Testimonial[];
    fullImage: Image;
    pricing: SearchPagePricing;
}

export interface SearchPageFrontmatter extends Frontmatter {
    image: Image;
    heading: string;
    intro: SearchPageIntro;
    main: SearchPageMain;
    testimonials: Testimonial[];
    full_image: Image;
    pricing: SearchPagePricing;
}

export interface SearchPageProps {
    data: SearchPostData<SearchPageFrontmatter>;
}

// ====================== IndexPage ======================

export interface IndexPageIntro {
    blurbs: ImageInfoWithText[];
}

export interface IndexPageTemplateProps {
    image: Image;
    title?: string;
    heading?: string;
    description?: string;
    fullImage: Image;
}

export interface IndexPageProps {
    data: any;
}

// ====================== AppPost ======================

export interface AppPostTemplateProps {
    content: React.ReactNode;
    contentComponent?: React.ComponentType<BaseContentProps<any>>;
    description: React.ReactText;
    tags?: string[];
    title: string;
    helmet?: React.ReactNode;
}

export interface AppPostData<F extends object = Frontmatter> {
    markdownRemark: MarkdownRemark<F>;
}

export interface AppPostProps {
    data: AppPostData;
}

// ====================== DesignPage ======================

export interface DesignPostTemplateProps {
    content: React.ReactNode;
    contentComponent?: React.ComponentType<BaseContentProps<any>>;
    description: React.ReactText;
    tags?: string[];
    title: string;
    helmet?: React.ReactNode;
}

export interface DesignPostData<F extends object = Frontmatter> {
    markdownRemark: MarkdownRemark<F>;
}

export interface DesignPostProps {
    data: DesignPostData;
}

export interface DesignPageIntro {
    blurbs: ImageInfoWithText[];
}

export interface DesignPageMain {
    heading?: string;
    description?: string;
    image1: Image;
    image2: Image;
    image3: Image;
}

export interface DesignPagePricing {
    heading?: string;
    description?: string;
    plans: Price[];
}

export interface DesignPageTemplateProps {
    image: Image;
    title?: string;
    heading?: string;
    description?: string;
    intro: DesignPageIntro;
    main: DesignPageMain;
    testimonials: Testimonial[];
    fullImage: Image;
    pricing: DesignPagePricing;
}

export interface DesignPageFrontmatter extends Frontmatter {
    image: Image;
    heading: string;
    intro: DesignPageIntro;
    main: DesignPageMain;
    testimonials: Testimonial[];
    full_image: Image;
    pricing: DesignPagePricing;
}

export interface DesignPageProps {
    data: DesignPostData<DesignPageFrontmatter>;
}
