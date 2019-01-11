import CMS from "netlify-cms";

import AboutPagePreview from "./preview-templates/AboutPagePreview";
import AppPostPreview from "./preview-templates/AppPostPreview";
import DesignPostPreview from "./preview-templates/DesignPostPreview";

CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("app", AppPostPreview);
CMS.registerPreviewTemplate("design", DesignPostPreview);
