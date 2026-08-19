export const metricsData = {
  // Primary performance outcomes
  primary: [
    {
      id: "startup-optimization",
      before: "7.3s",
      after: "1.8s",
      metricLabel: "Application startup optimization",
      category: "Startup",
      description: "Optimized application startup time from 7.3s to 1.8s using caching strategies, lifecycle management, and performance profiling."
    },
    {
      id: "rendering-optimization",
      before: "~15s",
      after: "<1s",
      metricLabel: "List/grid rendering improvement",
      category: "Rendering",
      description: "Improved list and grid rendering performance from ~15s to under 1s using Flutter Sliver widgets, lazy loading, and animation optimizations."
    }
  ],

  // Supporting measured engineering outcomes
  supporting: [
    {
      value: "75%",
      label: "Load time reduction",
      context: "Applied data structures and enhanced API interaction patterns to reduce redundant network calls."
    },
    {
      value: "500+",
      label: "Remote consultations supported monthly",
      context: "Integrated secure payment gateways and third-party video communication services."
    },
    {
      value: "200+",
      label: "Production issues diagnosed/resolved",
      context: "Diagnosed and resolved live production issues through structured root-cause analysis during the Support Engineer period."
    },
    {
      value: "~30%",
      label: "Clinical documentation time reduction",
      context: "Implemented speech-to-text AI solutions for automated clinical summaries."
    },
    {
      value: "40%",
      label: "Local search/retrieval accuracy improvement",
      context: "Designed fuzzy search algorithms using local databases."
    },
    {
      value: "60%",
      label: "Manual administrative effort reduction",
      context: "Engineered document upload, PDF processing, and medical image (DICOM) viewing modules."
    },
    {
      value: "20%",
      label: "Operational efficiency improvement",
      context: "Designed and developed scalable Flutter architecture for a hospital management system using Clean Architecture and MVVM."
    },
    {
      value: "95%",
      label: "On-time sprint delivery",
      context: "Led sprint planning, task tracking, and peer code reviews using Jira in an Agile/Scrum environment."
    },
    {
      value: "99%",
      label: "Observed system availability during the Support Engineer period",
      context: "Provided production support for hospital systems using SQL and SSMS."
    }
  ]
};
