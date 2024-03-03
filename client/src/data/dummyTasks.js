export const dummyTasks = [
  // Tasks for Task List 1
  {
    _id: "task1",
    title: "Paint Living Room",
    taskList: "tl1",
    customFields: [
      { id: "cf1", value: "Choose a vibrant color" }, // Notes
      { id: "cf2", value: 3 }, // Importance
    ],
    tags: ["tag1", "tag2"],
    createdAt: "2023-07-05T21:50:29.769Z",
    updatedAt: "2023-07-05T21:50:29.769Z",
    __v: 0,
  },
  // ... More tasks for Task List 1
  // Tasks for Task List 2
  {
    _id: "task3",
    title: "Prepare Project Presentation",
    taskList: "tl2",
    customFields: [
      { id: "cf3", value: "2023-07-10" }, // Deadline
      { id: "cf4", value: 2 }, // Priority
    ],
    tags: ["tag4", "tag5"],
    createdAt: "2023-07-06T09:30:15.123Z",
    updatedAt: "2023-07-06T10:05:45.567Z",
    __v: 0,
  },
  // ... More tasks for Task List 2
  // Tasks for Task List 3
  {
    _id: "task5",
    title: "Run 5K",
    taskList: "tl3",
    customFields: [
      { id: "cf5", value: 50 }, // Progress
      { id: "cf6", value: "Feeling great after the run!" }, // Health Notes
    ],
    tags: ["tag7", "tag8"],
    createdAt: "2023-07-07T12:00:00.000Z",
    updatedAt: "2023-07-07T12:50:30.678Z",
    __v: 0,
  },
  // ... More tasks for Task List 3
  // ... Additional tasks for additional task lists
];