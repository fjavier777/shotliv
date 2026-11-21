# SHOTLIV — Commercial Features Roadmap
## Post-MVP Product Evolution & Business Licensing Specification

**Status:** Proposed — Pending MVP Acceptance  
**Product:** Shotliv Chrome Extension  
**Document Type:** Product Evolution & Technical Foundation  
**Target Markets:** Global — Automotive and Real Estate  
**Primary Languages:** English, with progressive multilingual support

---

## 1. Strategic Objective

After the MVP is completed, tested, and accepted, Shotliv will evolve from an image enhancement tool into a commercial image preparation solution for automotive dealerships and real estate businesses.

The product will maintain a free version for personal use while introducing business-oriented capabilities and commercial licensing.

The primary objective is to enable businesses to prepare, standardize, brand, and distribute commercial photographs directly through the Chrome extension.

**Core principle:**

Free to use. Built for business.

The initial commercial evolution must not require a SaaS infrastructure or cloud-based image processing.

---

## 2. Product Strategy

### 2.1 Shotliv Free

The free version will remain available for personal use.

Core capabilities:

- Image enhancement.
- Image adjustments.
- PNG, JPG, and WEBP export.
- Sequential image editing.
- Batch processing, subject to technical validation.
- Local image processing.

### 2.2 Shotliv Business

The Business offering will introduce capabilities designed for professional image production.

Target customers:

- Automotive dealerships.
- Used-car dealerships.
- Real estate agencies.
- Independent real estate professionals.
- Property management companies.

Business licensing will authorize commercial use and provide access to business-oriented capabilities and support.

### 2.3 Future Shotliv Enterprise

A potential future offering for larger organizations.

Possible capabilities:

- Centralized license management.
- Multiple teams and locations.
- Organization-wide presets.
- Centralized configuration.
- Advanced reporting.
- Integrations and APIs.

Enterprise development is outside the initial post-MVP scope.

---

## 3. Commercial Features

### Feature FR-01 — Batch Image Processing

**Objective:** Enable users to process multiple photographs in a single operation.

Requirements:

- Select multiple images at once.
- Process images sequentially through a controlled queue.
- Apply the same editing parameters to all selected images.
- Display processing progress.
- Display successful and failed operations.
- Allow individual failed images to be processed again.
- Preserve the original files.
- Export processed images using the supported formats.

**Initial performance target:** 30 images per batch.

**Future performance target:** 50 images per batch, subject to memory and performance testing.

The system must avoid loading unnecessary full-resolution image data into memory simultaneously.

### Feature FR-02 — Automatic License Plate Blur

**Objective:** Protect vehicle identification information in commercial photographs.

Requirements:

- Automatically detect vehicle license plates.
- Apply configurable blur or pixelation.
- Allow the user to enable or disable the feature.
- Configure blur intensity.
- Apply the operation across an entire batch.
- Allow manual correction when automatic detection fails.
- Preserve the original image.

Technical considerations:

- Evaluate browser-compatible computer vision solutions.
- Prefer local processing.
- Evaluate model size, execution speed, memory consumption, and detection accuracy.
- Test different vehicle angles, lighting conditions, distances, and resolutions.

Automatic detection must not be considered reliable without appropriate validation.

### Feature FR-03 — WhatsApp Contact Banner

**Objective:** Add commercial contact information to vehicle photographs.

Requirements:

- Configure WhatsApp phone number.
- Configure seller name.
- Configure optional contact message.
- Customize banner position.
- Customize background color and typography.
- Configure banner dimensions.
- Generate an optional WhatsApp QR Code.
- Apply the same banner to multiple photographs.
- Preserve configuration for subsequent batches.

The banner must remain visually consistent across different image dimensions.

### Feature FR-04 — Business Logo Watermark

**Objective:** Allow companies to identify their photographs using their own visual identity.

Requirements:

- Upload a company logo.
- Support transparent PNG files.
- Configure watermark position.
- Configure watermark size.
- Configure transparency.
- Configure margins.
- Apply the watermark to individual images or entire batches.
- Preserve watermark settings between sessions.

The original uploaded logo must remain unchanged.

### Feature FR-05 — Business Presets

**Objective:** Allow businesses to reuse standardized image preparation configurations.

Examples:

- DEALERSHIP STANDARD
- DEALERSHIP PREMIUM
- REAL ESTATE STANDARD
- REAL ESTATE PREMIUM

A preset may include:

- Image enhancement parameters.
- Export format.
- Watermark configuration.
- Contact banner configuration.
- License plate blur settings.

Requirements:

- Create and edit presets.
- Select an existing preset.
- Apply presets to batch processing.
- Preserve user-selected settings.
- Allow adjustments after selecting a preset.

Presets should initially be stored locally.

---

## 4. User Experience

The commercial features should integrate naturally into the existing Shotliv editor.

Proposed organization:

### Image Editing
- Enhancement.
- Adjustments.
- Export settings.

### Commercial Branding
- Company logo.
- Watermark.
- Contact banner.
- WhatsApp configuration.

### Privacy
- License plate detection.
- Blur intensity.
- Manual correction.

### Batch Processing
- Image selection.
- Selected preset.
- Processing queue.
- Progress.
- Results and error reporting.

The interface must remain lightweight and intuitive.

Do not introduce unnecessary navigation, configuration screens, or additional complexity.

---

## 5. Technical Architecture Principles

The initial commercial evolution must preserve the existing Chrome extension architecture.

Mandatory principles:

1. Local image processing whenever technically feasible.
2. No mandatory backend for the initial commercial features.
3. No mandatory cloud image storage.
4. No unnecessary third-party dependencies.
5. Controlled memory consumption.
6. Sequential batch processing.
7. Preserve original image files.
8. Maintain compatibility with existing export formats.
9. Keep features modular and independently testable.
10. Avoid premature abstraction and infrastructure.

### Storage

Evaluate Chrome extension storage according to the type and size of information.

Potential uses:

- `chrome.storage.local`: preferences and configurations.
- IndexedDB: larger structured local data, if required.
- In-memory processing: temporary image data.

Company logos and presets should be handled without unnecessarily increasing storage usage.

### Privacy

The extension should clearly communicate which operations happen locally.

No photographs should be transmitted to external servers without explicit user awareness and consent.

---

## 6. Business Licensing Strategy

The proposed commercial model is based on business licenses rather than mandatory individual subscriptions.

Potential licensing structure:

- Business Solo — one authorized user.
- Business Team — multiple authorized users.
- Business Pro — larger operational teams.
- Business Company — larger organizations.

Pricing, licensing enforcement, and commercial terms will be defined after market validation.

The initial licensing implementation should be as simple as possible.

Do not develop centralized license infrastructure until the commercial model and actual customer requirements justify it.

---

## 7. Internationalization

Shotliv will maintain an international product strategy.

Initial markets:

1. United States.
2. United Kingdom.
3. Germany.
4. France.

Language priorities:

- English — initial product language.
- German.
- French.
- Spanish.
- Portuguese.

Internationalization should be implemented progressively, without duplicating business logic or creating separate product versions.

---

## 8. Implementation Roadmap

Development must begin only after MVP acceptance.

### Phase 1 — Batch Processing

- Complete batch selection.
- Implement processing queue.
- Preserve editing parameters.
- Implement progress reporting.
- Validate memory consumption.
- Test 30-image batches.

### Phase 2 — Business Branding

- Implement logo upload.
- Implement watermark configuration.
- Implement WhatsApp banner.
- Implement QR Code generation.
- Validate batch application.

### Phase 3 — Vehicle Privacy

- Evaluate computer vision libraries.
- Select a suitable local detection solution.
- Implement automatic license plate detection.
- Implement blur and pixelation.
- Implement manual correction.
- Validate detection accuracy.

### Phase 4 — Business Presets

- Implement preset creation.
- Implement preset editing.
- Implement local persistence.
- Integrate presets with batch processing.

### Phase 5 — Business Licensing

- Define commercial licensing terms.
- Validate pricing.
- Implement the minimum viable licensing mechanism.
- Prepare commercial onboarding.
- Launch the Business offering.

### Phase 6 — Enterprise Evaluation

Evaluate centralized administration, multiple teams, cloud processing, and integrations only when supported by real customer demand.

---

## 9. Acceptance Criteria

Each commercial feature must be independently tested.

General acceptance criteria:

- No regression in existing MVP functionality.
- No modification of original photographs.
- Correct export in supported formats.
- Consistent results across different image dimensions.
- Controlled memory consumption.
- Clear error handling.
- Correct persistence of user configurations.
- Compatibility with batch processing.
- Acceptable performance on representative computers.
- No unnecessary network transmission of image data.

Additional acceptance criteria must be defined for each feature before implementation.

---

## 10. Explicitly Out of Scope

The following items must not be introduced automatically during the initial commercial evolution:

- Mandatory cloud image processing.
- Cloud image storage.
- Full SaaS architecture.
- Multi-tenant infrastructure.
- Advanced team administration.
- Complex subscription management.
- Artificial intelligence services requiring paid API calls.
- Unvalidated enterprise integrations.
- Unnecessary blockchain or distributed infrastructure.

Any new capability must be justified by validated user needs.

---

## 11. Product Development Governance

The MVP remains the immediate priority.

This document establishes a future direction and does not authorize immediate implementation.

Before each development phase:

1. Validate the underlying business need.
2. Define the minimum implementation scope.
3. Evaluate technical complexity.
4. Estimate performance impact.
5. Define acceptance criteria.
6. Implement only the approved scope.
7. Test before moving forward.

**Development principle:**

Validate the need before creating abstractions, infrastructure, or new capabilities.

---

## 12. Long-Term Product Vision

Shotliv aims to become an accessible image preparation solution for individuals and a practical commercial productivity tool for businesses.

The Chrome extension will remain the initial distribution channel and primary editing environment.

Business licensing will provide the first commercial revenue model.

SaaS capabilities will be considered later, based on actual demand for centralized management, collaboration, and larger-scale operations.

**SHOTLIV**

*Professional image preparation, accessible to everyone.*

**Build. Measure. Evolve.**
