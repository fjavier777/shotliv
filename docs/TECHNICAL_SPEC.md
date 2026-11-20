# Shotliv Chrome Extension — Technical Specification

**Status:** Initial technical direction  
**Platform:** Google Chrome  
**Architecture:** Local browser-based image editor

## 1. Technology Stack

- **Extension standard:** Chrome Extension Manifest V3.
- **Programming language:** JavaScript.
- **Interface:** HTML5 and CSS3.
- **Image processing:** Canvas API (2D).
- **Execution environment:** Chrome browser.
- **External dependencies:** None for the initial MVP.
- **Backend:** Not required.

## 2. Extension Architecture

Shotliv will use a dedicated editor page instead of a traditional browser popup.

When the user clicks the extension icon, the extension will open `editor.html` in a new Chrome tab.

The extension will use:

- `manifest.json` — Extension configuration.
- `background.js` — Handles the extension icon interaction and opens the editor.
- `editor.html` — Editor interface.
- `css/editor.css` — Interface styling.
- `js/editor.js` — Image loading, adjustments, comparison, reset, and export logic.

## 3. Image Processing

The Canvas API will handle image rendering and processing directly in the browser.

The implementation must:

- Load images selected from the user's device.
- Preserve the original image as an unmodified source.
- Apply brightness, contrast, and saturation adjustments.
- Support combined adjustments.
- Render the edited result for preview.
- Export the processed image.

Processing must not require uploading image data to an external server.

## 4. File Handling

Initial supported input formats:

- JPEG
- PNG
- WebP

The implementation must validate selected files and handle unsupported or unreadable images gracefully.

Temporary object URLs must be released when no longer needed.

The export implementation must produce a valid image file without modifying or overwriting the original source.

## 5. Privacy and Permissions

- All image processing occurs locally.
- No user account is required.
- No image upload or cloud storage is used.
- No external API is required.
- The extension must request only permissions strictly necessary for its operation.

The initial implementation should avoid unnecessary permissions and persistent data storage.

## 6. User Interface

The editor must provide:

- Image selection.
- Original image preview.
- Brightness control.
- Contrast control.
- Saturation control.
- Before-and-after comparison.
- Reset functionality.
- Download action.
- Clear feedback for invalid files and processing errors.

The interface must be responsive within the available browser tab area.

## 7. Development Principles

- Keep the implementation lightweight.
- Prefer native browser APIs.
- Avoid unnecessary dependencies.
- Separate interface code from image-processing logic where useful.
- Preserve the original image throughout the editing session.
- Add complexity only when validated requirements justify it.

## 8. Future Considerations

The architecture may evolve to support additional capabilities, including advanced editing and optional SaaS features.

These capabilities are not part of the initial MVP and must not introduce unnecessary infrastructure into the first release.

---

**Build. Experiment. Evolve.**
