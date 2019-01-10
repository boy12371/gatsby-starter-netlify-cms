import CMS from "netlify-cms";

import HomePagePreview from "./preview-templates/HomePagePreview";
import AboutPagePreview from "./preview-templates/AboutPagePreview";
import BlogPostPreview from "./preview-templates/BlogPostPreview";
import ProductPostPreview from "./preview-templates/ProductPostPreview";

CMS.registerPreviewTemplate("home", HomePagePreview);
CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("blog", BlogPostPreview);
CMS.registerPreviewTemplate("products", ProductPostPreview);
