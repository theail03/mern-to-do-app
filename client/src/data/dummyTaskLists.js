export const dummyTaskLists = [
  // Task List 1
  {
    _id: "tl1",
    title: "Home Renovation",
    user: "user1",
    customFields: [
      {
        id: "cf1",
        name: "Notes",
        type: "string",
      },
      {
        id: "cf2",
        name: "Importance",
        type: "integer",
        min: 1,
        max: 5,
      },
    ],
    tags: [
      { id: "tag1", tag: "DIY" },
      { id: "tag2", tag: "Renovation" },
      { id: "tag3", tag: "Budget" },
    ],
    createdAt: "2023-07-05T21:22:36.967Z",
    updatedAt: "2023-07-05T21:30:12.485Z",
    __v: 0,
  },
  // Task List 2
  {
    _id: "tl2",
    title: "Work Project",
    user: "user2",
    customFields: [
      {
        id: "cf3",
        name: "Deadline",
        type: "string",
      },
      {
        id: "cf4",
        name: "Priority",
        type: "integer",
        min: 1,
        max: 3,
      },
    ],
    tags: [
      { id: "tag4", tag: "Work" },
      { id: "tag5", tag: "Urgent" },
      { id: "tag6", tag: "Team" },
    ],
    createdAt: "2023-07-06T09:15:22.123Z",
    updatedAt: "2023-07-06T10:00:45.567Z",
    __v: 0,
  },
  // Task List 3
  {
    _id: "tl3",
    title: "Fitness Goals",
    user: "user3",
    customFields: [
      {
        id: "cf5",
        name: "Progress",
        type: "integer",
        min: 0,
        max: 100,
      },
      {
        id: "cf6",
        name: "Health Notes",
        type: "string",
      },
    ],
    tags: [
      { id: "tag7", tag: "Health" },
      { id: "tag8", tag: "Fitness" },
      { id: "tag9", tag: "Gym" },
    ],
    createdAt: "2023-07-07T11:30:00.000Z",
    updatedAt: "2023-07-07T12:45:30.678Z",
    __v: 0,
  },
];