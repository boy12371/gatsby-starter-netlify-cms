import CMS from "netlify-cms";

import IndexPagePreview from "./preview-templates/IndexPagePreview";
import AboutPagePreview from "./preview-templates/AboutPagePreview";
import SearchPagePreview from "./preview-templates/SearchPagePreview";
import BlogPostPreview from "./preview-templates/BlogPostPreview";
import ProductPostPreview from "./preview-templates/ProductPostPreview";

CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("search", SearchPagePreview);
CMS.registerPreviewTemplate("blog", BlogPostPreview);
CMS.registerPreviewTemplate("products", ProductPostPreview);
