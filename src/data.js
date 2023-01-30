const item = {
  title: "Top",
  link: "",
  children: [
    {
      title: "Child",
      link: "",
      children: [],
    },
    {
      title: "Child2",
      link: "",
      children: [
        {
          title: "Child2 child",
          link: "",
          children: [],
        },
        {
          title: "Child2 child 2",
          link: "",
          children: [
            {
              title: "Child2 child 2 child 1",
              link: "",
              children: [],
            },
            {
              title: "Child2 child 2 chil2 ",
              link: "",
              children: [],
            },
          ],
        },
        {
          title: "Child2 child 3",
          link: "",
          children: [
            {
              title: "Child2 child 3 child2",
              link: "",
              children: [],
            },
          ],
        },
      ],
    },
  ],
};

const item2 = {
  title: "Top2",
  link: "",
  children: [
    {
      title: "Top 2 Child",
      link: "",
      children: [],
    },
  ],
};

export const items = [item, item2];
