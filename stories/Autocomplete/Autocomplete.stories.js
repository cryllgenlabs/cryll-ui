import Autocomplete from "./Autocomplete";

export default {
  component: Autocomplete,
  title: "Components/Autocomplete",
  tags: ["autodocs"],
};

export const Default = {
  args: {
    placeholder: "Harry Potter",
    search: (value) => {
      alert(value);
    },
  },
};
