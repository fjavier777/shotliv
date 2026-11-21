# Shotliv Chrome Extension — MVP Requirements

**Status:** Initial scope  
**Product approach:** Chrome extension first

## 1. Product Goal

Allow users to make basic image enhancements directly in their browser, compare the result with the original, and download the edited image.

The MVP must work independently, without requiring an account, cloud storage, or SaaS backend.

## 2. Core User Flow

1. Open the Shotliv extension.
2. Select an image from the local device.
3. Preview the original image.
4. Adjust brightness, contrast, and saturation.
5. Compare the original and edited versions.
6. Reset adjustments if needed.
7. Download the processed image.

## 3. Functional Requirements

### FR-01 — Image Selection
- Select an image from the local device.
- Support JPEG, PNG, and WebP.
- Display a clear error for unsupported or unreadable files.

### FR-02 — Image Preview
- Display the original image.
- Preserve the original source for comparison and reset.

### FR-03 — Image Adjustments
- Provide brightness, contrast, and saturation controls.
- Update the preview when adjustments change.
- Allow adjustments to be combined.

### FR-04 — Before and After
- Allow users to compare the original and edited images.
- Never modify the original source.

### FR-05 — Reset
- Restore all adjustment controls to their initial values.

### FR-06 — Download
- Export the edited image as PNG, WebP, or JPEG.
- Use PNG as the default output format.
- Allow users to select the output format.
- Preserve applied image adjustments.
- Preserve transparency in PNG and WebP exports.
- Replace transparent areas with a white background in JPEG exports.
- Prefix exported filenames with `[SH]` while preserving the original filename.
- Never overwrite the original file.

## 4. Privacy Principles

- Process images locally in the browser.
- Do not upload images to Shotliv servers.
- Do not require user accounts.
- Do not collect image contents.
- Request only strictly necessary browser permissions.

## 5. Out of Scope

- User accounts and authentication.
- Payments and subscriptions.
- Cloud storage or processing.
- Batch processing.
- AI-based enhancement.
- SaaS dashboard or backend.
- Social network integrations.
- Advanced editing features.

## 6. MVP Completion Criteria

The MVP is ready for initial release when users can:

- Select a supported image.
- Preview the original.
- Adjust brightness, contrast, and saturation.
- Compare original and edited versions.
- Reset adjustments.
- Export images in PNG, WebP, and JPEG formats.
- Use PNG as the default export format.
- Preserve transparency in PNG and WebP exports.
- Export JPEG images with a white background when transparency is present.
- Download files using the `[SH]` filename prefix.

All core functionality must work in Chrome, with image processing performed locally.

## 7. Initial Validation

After release, evaluate:

- Whether users understand the interface without instructions.
- Whether the adjustment controls are useful.
- Whether users successfully download edited images.
- Which limitations users report.

New features should be based on observed usage and validated feedback.

---

**Build. Experiment. Evolve.**
