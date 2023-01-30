const item = {
  title: "1",
  link: "",
  children: [
    {
      title: "1.1",
      link: "",
      children: [],
    },
    {
      title: "1.2",
      link: "",
      children: [
        {
          title: "1.2.1",
          link: "",
          children: [],
        },
        {
          title: "1.2.2 (childs as row = no more sub menus)",
          link: "",
          children: [
            {
              title: "1.2.2.1",
              link: "",
              children: [],
            },
            {
              title: "1.2.2.2",
              link: "",
              children: [],
            },
          ],
        },
        {
          title: "1.2.3",
          link: "",
          children: [
            {
              title: "1.2.3.1",
              link: "",
              children: [],
            },
          ],
        },
        {
          title: "1.2.4 (childs as column = more sub menus)",
          link: "",
          children: [
            {
              title: "1.2.4.1",
              link: "",
              children: [],
            },
            {
              title: "1.2.4.2",
              link: "",
              children: [
                {
                  title: "1.2.4.2.1",
                  link: "",
                  children: [],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

const item2 = {
  title: "2",
  link: "",
  children: [
    {
      title: "2.1",
      link: "",
      children: [],
    },
  ],
};

export const items = [item, item2];
