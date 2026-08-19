export const githubData = {
  // Static build-time baseline metadata (renders with zero layout shift, works 100% offline)
  staticBaseline: {
    repoName: "adhilkrishnag/dicom_viewer",
    url: "https://github.com/adhilkrishnag/dicom_viewer",
    pubUrl: "https://pub.dev/packages/dicom_viewer",
    language: "Dart",
    license: "MIT",
    version: "v0.3.0",
    stars: null,
    forks: null,
    label: "Repository metadata · Updated from GitHub"
  },

  // Reads static build-time JSON without making any direct browser API calls
  async getRepoMetadata() {
    try {
      const res = await fetch("data/github-metadata.json");
      if (res.ok) {
        const json = await res.json();
        return { ...this.staticBaseline, ...json };
      }
    } catch (_) {}
    return this.staticBaseline;
  }
};
