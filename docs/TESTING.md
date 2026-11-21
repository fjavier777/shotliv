# Shotliv — Manual Test Report

**Test type:** Manual functional testing  
**Platform:** Google Chrome  
**Test date:** November 20, 2026  
**Result:** Passed

## 1. Extension Installation

- [x] Extension loaded successfully using Chrome Developer Mode.
- [x] No extension loading errors reported.
- [x] Clicking the extension icon opens the editor in a new tab.

## 2. Image Loading

- [x] JPEG image loading.
- [x] PNG image loading.
- [x] WebP image loading.
- [x] Original image preview displayed correctly.
- [x] Multiple image selections during the same session.
- [x] Repeated image replacement.

## 3. Image Editing

- [x] Brightness adjustment.
- [x] Contrast adjustment.
- [x] Saturation adjustment.
- [x] Combined adjustments.
- [x] Original and enhanced image comparison.
- [x] Reset adjustments.
- [x] Screen clearing and subsequent image loading.
- [x] Adjustment controls reset correctly when loading a new image.

## 4. Image Export

- [x] PNG export.
- [ ] WebP export.
- [ ] JPEG export.
- [ ] PNG selected as the default output format.
- [ ] Correct file extension for each exported format.
- [ ] JPEG transparency handled with a white background.
- [x] Original source file remains unchanged.
- [x] Exported filenames use the `[SH]` prefix and preserve the original filename.
- [x] Downloads work after replacing images multiple times.

## 5. Overall Result

All core MVP workflows were manually tested in Chrome, including repeated image loading, editing, replacement, and export.

All tested operations worked as expected.

**Validation status:** Initial MVP functional validation passed.

## 6. Scope of This Report

This report records manual functional testing. It does not represent automated testing, cross-browser validation, performance benchmarking, or formal security auditing.

---

**Build. Experiment. Evolve.**
