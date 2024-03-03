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
  {
    _id: "task2",
    title: "Replace Hallway Tiles",
    taskList: "tl1",
    customFields: [
      { id: "cf1", value: "Check tile availability at local store" }, // Notes
      { id: "cf2", value: 2 }, // Importance
    ],
    tags: ["tag2"],
    createdAt: "2023-07-06T09:00:00.000Z",
    updatedAt: "2023-07-06T09:30:00.000Z",
    __v: 0,
  },
  {
    _id: "task3",
    title: "Fix Leaky Kitchen Faucet",
    taskList: "tl1",
    customFields: [
      { id: "cf1", value: "May need new washer" }, // Notes
      { id: "cf2", value: 4 }, // Importance
    ],
    tags: ["tag1"],
    createdAt: "2023-07-06T10:15:30.000Z",
    updatedAt: "2023-07-06T11:00:30.000Z",
    __v: 0,
  },
  {
    _id: "task4",
    title: "Assemble Guest Bedroom Furniture",
    taskList: "tl1",
    customFields: [
      { id: "cf1", value: "Instruction manual in the box" }, // Notes
      { id: "cf2", value: 3 }, // Importance
    ],
    tags: ["tag3"],
    createdAt: "2023-07-06T12:45:30.000Z",
    updatedAt: "2023-07-06T13:30:45.000Z",
    __v: 0,
  },
  {
    _id: "task5",
    title: "Install Living Room Curtains",
    taskList: "tl1",
    customFields: [
      { id: "cf1", value: "Need to confirm measurements" }, // Notes
      { id: "cf2", value: 2 }, // Importance
    ],
    tags: ["tag2", "tag3"],
    createdAt: "2023-07-06T14:00:00.000Z",
    updatedAt: "2023-07-06T14:50:00.000Z",
    __v: 0,
  },
  // Tasks for Task List 2
  {
    _id: "task6",
    title: "Draft Quarterly Report",
    taskList: "tl2",
    customFields: [
      { id: "cf3", value: "2023-08-01" }, // Deadline
      { id: "cf4", value: 3 }, // Priority
    ],
    tags: ["tag4", "tag5"],
    createdAt: "2023-07-06T11:00:00.000Z",
    updatedAt: "2023-07-06T11:30:00.000Z",
    __v: 0,
  },
  {
    _id: "task7",
    title: "Organize Team Building Event",
    taskList: "tl2",
    customFields: [
      { id: "cf3", value: "2023-09-15" }, // Deadline
      { id: "cf4", value: 2 }, // Priority
    ],
    tags: ["tag4", "tag6"],
    createdAt: "2023-07-07T09:00:00.000Z",
    updatedAt: "2023-07-07T10:00:00.000Z",
    __v: 0,
  },
  {
    _id: "task8",
    title: "Update Project Timeline",
    taskList: "tl2",
    customFields: [
      { id: "cf3", value: "2023-07-15" }, // Deadline
      { id: "cf4", value: 1 }, // Priority
    ],
    tags: ["tag4"],
    createdAt: "2023-07-08T14:00:00.000Z",
    updatedAt: "2023-07-08T15:00:00.000Z",
    __v: 0,
  },
  {
    _id: "task9",
    title: "Review Budget Allocation",
    taskList: "tl2",
    customFields: [
      { id: "cf3", value: "2023-07-20" }, // Deadline
      { id: "cf4", value: 3 }, // Priority
    ],
    tags: ["tag4", "tag5"],
    createdAt: "2023-07-09T16:00:00.000Z",
    updatedAt: "2023-07-09T17:00:00.000Z",
    __v: 0,
  },
  {
    _id: "task10",
    title: "Finalize Vendor Contracts",
    taskList: "tl2",
    customFields: [
      { id: "cf3", value: "2023-08-05" }, // Deadline
      { id: "cf4", value: 2 }, // Priority
    ],
    tags: ["tag4", "tag6"],
    createdAt: "2023-07-10T13:00:00.000Z",
    updatedAt: "2023-07-10T14:00:00.000Z",
    __v: 0,
  },
  // Tasks for Task List 3
  {
    _id: "task11",
    title: "Morning Yoga Routine",
    taskList: "tl3",
    customFields: [
      { id: "cf5", value: 20 }, // Progress as a percentage
      { id: "cf6", value: "Feeling more flexible and balanced" }, // Health Notes
    ],
    tags: ["tag7", "tag8"],
    createdAt: "2023-07-11T07:00:00.000Z",
    updatedAt: "2023-07-11T08:00:00.000Z",
    __v: 0,
  },
  {
    _id: "task12",
    title: "Weekly 10k Run",
    taskList: "tl3",
    customFields: [
      { id: "cf5", value: 50 }, // Progress as a percentage
      { id: "cf6", value: "Improved time by 2 minutes" }, // Health Notes
    ],
    tags: ["tag7", "tag9"],
    createdAt: "2023-07-12T06:00:00.000Z",
    updatedAt: "2023-07-12T07:30:00.000Z",
    __v: 0,
  },
  {
    _id: "task13",
    title: "Strength Training Session",
    taskList: "tl3",
    customFields: [
      { id: "cf5", value: 30 }, // Progress as a percentage
      { id: "cf6", value: "Increased weight for all sets" }, // Health Notes
    ],
    tags: ["tag8", "tag9"],
    createdAt: "2023-07-13T17:00:00.000Z",
    updatedAt: "2023-07-13T18:30:00.000Z",
    __v: 0,
  },
  {
    _id: "task14",
    title: "Healthy Meal Prep",
    taskList: "tl3",
    customFields: [
      { id: "cf5", value: 60 }, // Progress as a percentage
      { id: "cf6", value: "Prepared meals with balanced macros" }, // Health Notes
    ],
    tags: ["tag7"],
    createdAt: "2023-07-14T12:00:00.000Z",
    updatedAt: "2023-07-14T13:00:00.000Z",
    __v: 0,
  },
  {
    _id: "task15",
    title: "Hydration Tracking",
    taskList: "tl3",
    customFields: [
      { id: "cf5", value: 80 }, // Progress as a percentage
      { id: "cf6", value: "Drank 3 liters of water daily" }, // Health Notes
    ],
    tags: ["tag7", "tag8"],
    createdAt: "2023-07-15T09:00:00.000Z",
    updatedAt: "2023-07-15T10:30:00.000Z",
    __v: 0,
  },
];