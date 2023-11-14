import Detail from "./Detail";

export default {
  title: "Components/Detail",
  component: Detail,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    // title = "Pulp Fiction",
    // badge = "7.2",
    // description = "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra",
    // imageLink = "https=//picsum.photos/200/300",
    // secondaryTitle = "1994",
    // tags = [],
    title: {
      control: "text",
    },
    badge: {
      control: "text",
    },
    description: {
      control: "text",
    },
    imageLink: {
      control: "text",
    },
    secondaryTitle: {
      control: "text",
    },
    tags: {
      control: "text",
    },
  },
};

export const Default = {
  args: {
    title: "Pulp Fiction",
    badge: "7.2",
    description:
      "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra",
    imageLink: "https://picsum.photos/200/300",
    secondaryTitle: "1994",
    tags: [],
  },
};
