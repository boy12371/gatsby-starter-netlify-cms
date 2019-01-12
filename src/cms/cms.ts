import CMS from "netlify-cms";

import AboutPagePreview from "./preview-templates/AboutPagePreview";
import ProductPostPreview from "./preview-templates/ProductPostPreview";
import NavigationSettingsPreview from "./preview-templates/NavigationSettingsPreview";
import UnitsSettingsPreview from "./preview-templates/UnitsSettingsPreview";

CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("product", ProductPostPreview);
CMS.registerPreviewTemplate("navigation", NavigationSettingsPreview);
CMS.registerPreviewTemplate("units", UnitsSettingsPreview);
