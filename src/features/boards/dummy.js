const boards = [
  {
    id: 9,
    name: "building kanban project",
    description: "",
    creator: "belsman",
    lists: [
      {
        id: 22,
        name: "to-do",
        order: 0,
        creator: "belsman",
        board: 9,
        cardsOrder: [2, 1, 3],
        cards: [
          {
            id: 1,
            title: "task one",
            description: "",
            assigned: null,
            board: 9,
            list: 22,
            started: null,
            completed: null,
            creator: "belsman"
          },
          {
            id: 2,
            title: "task two",
            description: "",
            assigned: null,
            board: 9,
            list: 22,
            started: null,
            completed: null,
            creator: "belsman"
          },
          {
            id: 3,
            title: "task three",
            description: "",
            assigned: null,
            board: 9,
            list: 22,
            started: null,
            completed: null,
            creator: "belsman",
          }
        ]
      },
      {
        id: 23,
        name: "doing",
        order: 0,
        creator: "belsman",
        board: 9,
        cardsOrder: [5, 4],
        cards: [
          {
            id: 4,
            title: "task progressing one",
            description: "",
            assigned: null,
            board: 9,
            list: 23,
            started: null,
            completed: null,
            creator: "belsman",
          },
          {
            id: 5,
            title: "task progressing two",
            description: "",
            assigned: null,
            board: 9,
            list: 23,
            started: null,
            completed: null,
            creator: "belsman",
          }
        ]
      },
      {
        id: 24,
        name: "done",
        order: 0,
        creator: "belsman",
        board: 9,
        cardsOrder: [6, 7],
        cards: [
          {
            id: 6,
            title: "done this one",
            description: "",
            assigned: null,
            board: 9,
            list: 24,
            started: null,
            completed: null,
            creator: "belsman",
          },
          {
            id: 7,
            title: "done this too",
            description: "",
            assigned: null,
            board: 9,
            list: 24,
            started: null,
            completed: null,
            creator: "belsman",
          }
        ]
      }
    ]
  },

];

export default boards;
