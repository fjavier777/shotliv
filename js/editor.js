
const imageInput = document.getElementById("image-input");
const originalPreview = document.getElementById("original-preview");
const originalPlaceholder = document.getElementById("original-placeholder");
const editedPlaceholder = document.getElementById("edited-placeholder");
const canvas = document.getElementById("edited-preview");
const context = canvas.getContext("2d");

const statusMessage = document.getElementById("status-message");

const brightnessInput = document.getElementById("brightness");
const contrastInput = document.getElementById("contrast");
const saturationInput = document.getElementById("saturation");

const brightnessValue = document.getElementById("brightness-value");
const contrastValue = document.getElementById("contrast-value");
const saturationValue = document.getElementById("saturation-value");

const resetButton = document.getElementById("reset-button");
const downloadButton = document.getElementById("download-button");
const outputFormat = document.getElementById("output-format");

const DEFAULT_ADJUSTMENT = 100;
const SUPPORTED_TYPES = ["image/jpeg", "image/png", "image/webp"];

let originalImage = null;
let originalFileName = "shotliv-image";
let currentObjectUrl = null;

function setControlsEnabled(enabled) {
  brightnessInput.disabled = !enabled;
  contrastInput.disabled = !enabled;
  saturationInput.disabled = !enabled;
  resetButton.disabled = !enabled;
  downloadButton.disabled = !enabled;
  outputFormat.disabled = !enabled;
}

function updateAdjustmentLabels() {
  brightnessValue.textContent = `${brightnessInput.value}%`;
  contrastValue.textContent = `${contrastInput.value}%`;
  saturationValue.textContent = `${saturationInput.value}%`;
}

function renderImage() {
  if (!originalImage) return;

  const brightness = brightnessInput.value;
  const contrast = contrastInput.value;
  const saturation = saturationInput.value;

  context.clearRect(0, 0, canvas.width, canvas.height);

  context.filter = [
    `brightness(${brightness}%)`,
    `contrast(${contrast}%)`,
    `saturate(${saturation}%)`
  ].join(" ");

  context.drawImage(originalImage, 0, 0);

  context.filter = "none";

  updateAdjustmentLabels();
}

function resetAdjustments() {
  brightnessInput.value = DEFAULT_ADJUSTMENT;
  contrastInput.value = DEFAULT_ADJUSTMENT;
  saturationInput.value = DEFAULT_ADJUSTMENT;

  renderImage();
  statusMessage.textContent = "Adjustments have been reset.";
}

function loadImage(file) {
  if (!SUPPORTED_TYPES.includes(file.type)) {
    statusMessage.textContent = "Unsupported format. Please select a JPEG, PNG, or WebP image.";
    return;
  }

  if (currentObjectUrl) {
    URL.revokeObjectURL(currentObjectUrl);
  }

  currentObjectUrl = URL.createObjectURL(file);

  const image = new Image();

  image.onload = () => {
    originalImage = image;
    originalFileName = file.name.replace(/\.[^.]+$/, "") || "shotliv-image";

    originalPreview.src = currentObjectUrl;
    originalPreview.hidden = false;
    originalPlaceholder.hidden = true;
    editedPlaceholder.hidden = true;

    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;

    resetAdjustments();
    setControlsEnabled(true);

    statusMessage.textContent = "Image loaded successfully.";
  };

  image.onerror = () => {
    URL.revokeObjectURL(currentObjectUrl);
    currentObjectUrl = null;
    originalImage = null;

    originalPreview.hidden = true;
    originalPlaceholder.hidden = false;
    editedPlaceholder.hidden = false;

    canvas.width = 0;
    canvas.height = 0;

    setControlsEnabled(false);
    statusMessage.textContent = "Unable to read this image. Please try another file.";
  };

  image.src = currentObjectUrl;
}


function downloadImage() {
  if (!originalImage) return;

  const format = outputFormat.value;
  const extensions = {
    "image/png": "png",
    "image/webp": "webp",
    "image/jpeg": "jpg"
  };

  let exportCanvas = canvas;

  if (format === "image/jpeg") {
    exportCanvas = document.createElement("canvas");
    exportCanvas.width = canvas.width;
    exportCanvas.height = canvas.height;

    const exportContext = exportCanvas.getContext("2d");
    exportContext.fillStyle = "#ffffff";
    exportContext.fillRect(0, 0, exportCanvas.width, exportCanvas.height);
    exportContext.drawImage(canvas, 0, 0);
  }

  const quality = format === "image/png" ? undefined : 0.92;

  exportCanvas.toBlob((blob) => {
    if (!blob) {
      statusMessage.textContent = "Unable to export the image. Please try again.";
      return;
    }

    const extension = extensions[blob.type] || extensions[format];
    const downloadUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = downloadUrl;
    link.download = `${originalFileName}-enhanced.${extension}`;

    document.body.appendChild(link);
    link.click();
    link.remove();

    window.setTimeout(() => {
      URL.revokeObjectURL(downloadUrl);
    }, 1000);

    statusMessage.textContent = "Your enhanced image has been downloaded.";
  }, format, quality);
}

imageInput.addEventListener("change", (event) => {
  const file = event.target.files[0];

  if (file) {
    loadImage(file);
  }
});

brightnessInput.addEventListener("input", renderImage);
contrastInput.addEventListener("input", renderImage);
saturationInput.addEventListener("input", renderImage);

resetButton.addEventListener("click", resetAdjustments);
downloadButton.addEventListener("click", downloadImage);

setControlsEnabled(false);
updateAdjustmentLabels();
