const seedTools = require("./models/Tool");

seedTools.bulkCreate([
  {
    title: "Dashboards Maker",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    title: "Query Executor",
    image:
      "https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    title: "Data Flow",
    image:
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]);
