export const openSourceData = {
  package: {
    name: "dicom_viewer",
    version: "v0.3.0",
    license: "MIT",
    status: "Published Package",
    tagline: "A pure-Dart DICOM viewer for Flutter, designed for cross-platform medical image handling without native or FFI dependencies.",
    repoUrl: "https://github.com/adhilkrishnag/dicom_viewer",
    pubUrl: "https://pub.dev/packages/dicom_viewer",
    platforms: ["Android", "iOS", "macOS", "Windows", "Linux", "Web (CanvasKit & Skwasm)"],
    language: "Dart",
    coreMotivation: "Implemented in pure Dart to parse and render supported DICOM data across Flutter mobile, desktop, and web platforms without native or FFI dependencies."
  },

  // The 6 verified pipeline stages (concise for scanning)
  pipelineStages: [
    {
      step: "01",
      name: "DICOM File Input",
      detail: "Reads byte buffer, verifies 128-byte preamble and 'DICM' prefix per PS3.10 standard.",
      impl: "TypedData / ByteData"
    },
    {
      step: "02",
      name: "Dataset Parsing",
      detail: "Parses Explicit and Implicit VR data elements, extracting dimensions, transfer syntax, and rescale parameters.",
      impl: "DicomDataset"
    },
    {
      step: "03",
      name: "Pixel Data",
      detail: "Extracts uncompressed 8/16-bit arrays or encapsulated pixel data fragments from tag (7FE0,0010).",
      impl: "PixelDataDecoder"
    },
    {
      step: "04",
      name: "RLE Decompression",
      detail: "Decompresses PackBits run-length encoded byte-planes (1.2.840.10008.1.2.5) into pixel buffers.",
      impl: "RleDecoder"
    },
    {
      step: "05",
      name: "VOI / LUT",
      detail: "Applies linear Window Center (WC) / Window Width (WW) contrast mapping or PALETTE COLOR lookup tables.",
      impl: "Windowing & PaletteColor"
    },
    {
      step: "06",
      name: "Flutter Rendering",
      detail: "Builds RGBA pixel buffer and renders to ui.Image via ui.decodeImageFromPixels with aspect ratio handling.",
      impl: "DicomRenderer & Widget"
    }
  ],

  technicalCapabilities: [
    {
      title: "Pure Dart Implementation",
      desc: "Zero native/FFI dependencies. Runs across iOS, Android, macOS, Windows, Linux, and Web."
    },
    {
      title: "Standards-Based Parsing",
      desc: "DICOM PS3.10 / PS3.5 parsing across Explicit VR Little/Big Endian and Implicit VR Little Endian."
    },
    {
      title: "RLE Lossless Decompression",
      desc: "PackBits RLE support for 8-bit, 16-bit MSB/LSB, and RGB pixel formats."
    },
    {
      title: "Linear VOI Windowing",
      desc: "Window Center (WC) / Window Width (WW) processing and Rescale Slope / Intercept transformations."
    },
    {
      title: "PALETTE COLOR LUTs",
      desc: "8-bit and 16-bit Red, Green, and Blue lookup table support where verified."
    },
    {
      title: "Multi-Frame Navigation",
      desc: "Frame navigation and cine playback functionality with pixel spacing aspect ratio handling."
    }
  ]
};
