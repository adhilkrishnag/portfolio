export const principlesData = {
  principles: [
    {
      number: "01",
      title: "Architecture",
      summary: "Clean Architecture, MVVM, SOLID, maintainability.",
      description: "Structuring applications with clear boundaries between UI views, ViewModels/Blocs, and data sources to ensure long-term maintainability."
    },
    {
      number: "02",
      title: "Performance",
      summary: "Profiling, caching, Slivers, lazy loading, API optimization.",
      description: "Using performance profiling to identify bottlenecks, applying viewport lazy loading, caching strategies, and data structure optimizations."
    },
    {
      number: "03",
      title: "Reliability",
      summary: "Production support and root-cause analysis.",
      description: "Diagnosing production issues through systematic root-cause analysis and addressing root failure modes."
    },
    {
      number: "04",
      title: "Testing",
      summary: "Unit, widget, and integration testing.",
      description: "Employing unit testing, widget testing, and integration testing alongside secure coding practices for clinical and compliance requirements."
    },
    {
      number: "05",
      title: "Delivery",
      summary: "Sprint planning, Jira, peer code reviews, cross-platform deployment.",
      description: "Collaborating in Agile/Scrum sprint environments, tracking tasks with Jira, conducting peer reviews, and owning cross-platform deployment."
    }
  ],

  lifecycle: [
    { step: 1, name: "Understand" },
    { step: 2, name: "Design" },
    { step: 3, name: "Implement" },
    { step: 4, name: "Test" },
    { step: 5, name: "Optimize" },
    { step: 6, name: "Review" },
    { step: 7, name: "Deploy" }
  ],

  lifecycleCopy: "Experience owning features across development, testing, debugging, performance optimization, code review, and cross-platform deployment."
};
