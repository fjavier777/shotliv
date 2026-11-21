# SHOTLIV — Product Roadmap

**Status:** Strategic Planning  
**Scope:** Post-MVP Product Evolution  
**Product:** Shotliv  
**Organization:** HYPERMECHANE

---

## 1. Strategic Objective

Define the future evolution of Shotliv beyond its initial MVP, organizing potential features into two complementary product directions:

- **Business Photography Tools:** Features designed for companies and professionals who process commercial photographs.
- **Personal Photography Tools:** Features designed for individuals who want to improve, organize, and prepare personal photographs.

Both directions will share the same core image-processing capabilities.

This roadmap is a strategic planning document. Inclusion of a feature does not authorize immediate development.

## 2. Product Strategy

Shotliv will evolve around three complementary layers:

### 2.1 Shotliv Core

The shared image-processing foundation:

- Image enhancement and adjustments.
- Image format support: PNG, JPG, and WEBP.
- Image export and quality control.
- Presets and configuration persistence.
- Local-first image processing.

### 2.2 Shotliv Business

Commercial photography tools for:

- Automotive dealerships.
- Real estate agencies.
- Independent commercial photographers.
- Other businesses that process product photographs.

### 2.3 Shotliv Personal

Personal photography tools for:

- Travel photographs.
- Portraits.
- Family photographs.
- Social media content.
- Personal photo collections.

These are product directions, not separate applications or independent architectures.

## 3. Business Photography Tools

### FR-01 — Batch Image Processing

**Status:** Planned

Allow users to process multiple photographs using consistent editing parameters.

Potential capabilities:

- Select multiple images.
- Process images sequentially.
- Apply the same adjustments to selected images.
- Display processing progress.
- Identify failed images and allow retry.
- Preserve original files.
- Export processed images individually.

Initial validation target: test batches of approximately 30 images, then evaluate larger batches based on browser performance and available memory.

### FR-02 — Automatic License Plate Blur

**Status:** Under Evaluation

Automatically detect and blur vehicle license plates.

Potential capabilities:

- Local license plate detection.
- Adjustable blur intensity.
- Blur or pixelation options.
- Enable or disable the feature.
- Manual correction when automatic detection fails.
- Batch application.

Important considerations:

- Detection reliability under different lighting conditions.
- Different plate formats and viewing angles.
- False positives and false negatives.
- Privacy and image-processing performance.

Automatic detection must not be treated as a guarantee that every plate will be anonymized.

### FR-03 — WhatsApp Contact Banner

**Status:** Planned

Allow businesses to add a contact banner to commercial photographs.

Potential capabilities:

- WhatsApp phone number.
- Seller or agent name.
- Custom contact message.
- Position and size controls.
- Color and transparency settings.
- Optional QR code.
- Batch application.

### FR-04 — Business Logo Watermark

**Status:** Planned

Allow companies to apply their own visual identity to photographs.

Potential capabilities:

- Upload a transparent PNG logo.
- Adjust position.
- Adjust size.
- Configure opacity.
- Configure margins.
- Apply to multiple images.
- Save watermark configurations locally.

### FR-05 — Business Presets

**Status:** Under Evaluation

Provide ready-to-use configurations for commercial photography.

Potential presets:

- DEALERSHIP STANDARD.
- DEALERSHIP PREMIUM.
- REAL ESTATE STANDARD.
- REAL ESTATE PREMIUM.

Presets may combine image adjustments, export settings, watermarks, contact banners, and privacy options.

## 4. Personal Photography Tools

These features expand Shotliv beyond commercial photography while reusing its existing image-processing foundation.

### PP-01 — Travel Photo Enhancement

**Status:** Planned

Improve photographs taken during trips, vacations, and outdoor activities.

Potential capabilities:

- Natural color enhancement.
- Contrast and exposure adjustments.
- Landscape-oriented presets.
- Preserve realistic colors and details.

### PP-02 — Portrait Enhancement

**Status:** Planned

Improve personal portraits while preserving a natural appearance.

Potential capabilities:

- Exposure and contrast adjustments.
- Color and tone improvements.
- Natural skin-tone preservation.
- Portrait-specific presets.

Advanced facial retouching is not included in the initial scope.

### PP-03 — Social Media Formats

**Status:** Planned

Adapt photographs to common social media formats.

Potential capabilities:

- Preset aspect ratios.
- Image cropping.
- Resizing.
- Platform-oriented export dimensions.
- Preview before export.

Specific platform requirements should be verified before implementation.

### PP-04 — Photo Collage

**Status:** Under Evaluation

Allow users to combine multiple photographs into a single composition.

Potential capabilities:

- Basic collage layouts.
- Adjustable spacing.
- Background selection.
- Image positioning.
- Export in supported formats.

### PP-05 — Background Removal

**Status:** Under Evaluation

Allow users to remove or replace image backgrounds.

Potential capabilities:

- Local background segmentation.
- Transparent background export.
- Optional background replacement.

This feature may require browser-compatible machine learning models and additional processing resources.

### PP-06 — Old Photo Enhancement

**Status:** Under Evaluation

Provide basic improvements for older photographs.

Potential capabilities:

- Contrast and exposure correction.
- Color restoration.
- Noise reduction.
- Basic sharpness improvement.

Advanced restoration, reconstruction, and colorization require separate technical and market validation.

## 5. Product Evolution Priorities

The following order is preliminary and subject to validation after MVP completion.

| Priority | Feature | Product Direction |
|---|---|---|
| 1 | Batch Image Processing | Business / Core |
| 2 | Business Logo Watermark | Business |
| 3 | WhatsApp Contact Banner | Business |
| 4 | Travel Photo Enhancement | Personal |
| 5 | Social Media Formats | Personal |
| 6 | Portrait Enhancement | Personal |
| 7 | Automatic License Plate Blur | Business |
| 8 | Photo Collage | Personal |
| 9 | Background Removal | Personal |
| 10 | Old Photo Enhancement | Personal |

Priority does not represent a development commitment.

Features may be reordered, postponed, or removed based on actual user behavior, customer feedback, technical feasibility, and commercial opportunity.

## 6. Technical Architecture Principles

### 6.1 Local-First Processing

The preferred approach is to process images locally inside the browser whenever technically feasible.

Benefits:

- Reduced infrastructure costs.
- Improved privacy.
- No mandatory image uploads.
- Reduced backend dependency.
- Greater independence from cloud services.

### 6.2 Browser-Based Technologies

Potential technologies include:

- JavaScript.
- Canvas API.
- Web Workers.
- WebAssembly.
- Browser-compatible machine learning models.

Technology selection must be based on demonstrated requirements rather than speculative architecture.

### 6.3 Performance and Compatibility

Every new feature must be evaluated for:

- Memory consumption.
- Processing time.
- Browser compatibility.
- Image resolution limits.
- Hardware variability.
- User experience.

### 6.4 Preserve Original Files

Original photographs must remain unchanged.

Processing and export operations should generate separate output files.

### 6.5 No Premature Infrastructure

Do not introduce mandatory cloud processing, backend services, databases, or complex infrastructure without validated demand.

## 7. Business Licensing Strategy

The commercial model under consideration consists of three possible levels.

### 7.1 Shotliv Free

Intended for personal use.

Potential characteristics:

- Core image enhancement.
- Basic editing tools.
- Supported export formats.
- Local processing.
- No artificial expiration.

### 7.2 Shotliv Business

Intended for authorized commercial use.

Potential value:

- Commercial usage rights.
- Business photography tools.
- Presets and standardization.
- Productivity improvements.
- Commercial support options.

Pricing, licensing conditions, and feature entitlements require validation.

### 7.3 Shotliv Enterprise

A possible future offering for larger organizations.

Potential capabilities:

- Centralized license administration.
- Multiple teams and business units.
- Shared configurations.
- Usage reporting.
- Integrations and APIs.
- Optional cloud services.

Enterprise development requires demonstrated demand.

## 8. Internationalization

Shotliv is intended to serve a global audience.

Initial language:

- English.

Potential subsequent languages:

- German.
- French.
- Spanish.
- Portuguese.

Localization should be implemented progressively, based on user distribution and market demand.

Initial market exploration may include:

- United States.
- United Kingdom.
- Germany.
- France.

Market selection and advertising investment must be validated with acquisition and conversion data.

## 9. Implementation Governance

Every roadmap feature must pass through the following stages:

1. **Planned:** Feature recorded as a potential product opportunity.
2. **Under Evaluation:** Market need, technical feasibility, and expected value are being assessed.
3. **Approved for Development:** Scope and acceptance criteria are defined and development is authorized.
4. **In Development:** Implementation is underway.
5. **Released:** Feature has been tested and made available.
6. **Deferred / Rejected:** Feature has been postponed or removed.

Before approving development, evaluate:

- Is there a demonstrated user need?
- Does the feature improve the product meaningfully?
- Can it reuse the existing architecture?
- Can it run locally with acceptable performance?
- Does its expected value justify its complexity?
- Does it distract from a more important validated opportunity?

**Guiding principle: Validate the need before creating abstractions, infrastructure, or new capabilities.**

## 10. Out of Scope

Unless separately approved, the following are not part of the current development commitment:

- Mandatory cloud image processing.
- A standalone SaaS platform.
- Centralized enterprise administration.
- Complex AI image generation.
- Advanced facial reconstruction.
- Large-scale image storage services.
- Premature integrations with external business systems.

## 11. Development Governance and MVP Protection

The MVP remains the immediate priority.

No roadmap feature should interrupt MVP completion without a clear and justified reason.

The development sequence is:

1. Complete the MVP.
2. Perform functional and compatibility testing.
3. Prepare a demonstration version.
4. Validate user acceptance.
5. Collect real usage feedback.
6. Prioritize the next development cycle.

The roadmap is a planning instrument, not a commitment to implement every listed feature.

## 12. Long-Term Product Vision

Shotliv aims to become a practical, accessible, browser-based image enhancement platform serving both personal and commercial photography needs.

Its evolution should be guided by three principles:

- **Simplicity:** Deliver useful capabilities without unnecessary complexity.
- **Performance:** Prioritize efficient local image processing.
- **Validation:** Build based on real needs and demonstrated demand.

**SHOTLIV — Better images. Less friction.**
