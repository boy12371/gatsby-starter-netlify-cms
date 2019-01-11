import CMS from "netlify-cms";

import AboutPagePreview from "./preview-templates/AboutPagePreview";
import ProductPostPreview from "./preview-templates/ProductPostPreview";

CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("product", ProductPostPreview);
