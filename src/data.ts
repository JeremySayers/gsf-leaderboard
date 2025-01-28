interface DataItem {
  value: string;
  title: string;
  text: string;
  unlockTime: string;
  requirments: string[];
  incomplete: string[];
  done: string[];
}

const data: DataItem[] = [
  {
    value: "a",
    title: "Happy Plains",
    text: "The Happy Plains gate unlocks the ability to progress through the campaign, do white maps, and outside map activities up to area level 72.",
    unlockTime: "unlocked",
    requirments: ["Kill Kitava Solo", "Complete a T5 White Map"],
    incomplete: [],
    done: [
      "KryKanos",
      "Alex",
      "Jooblee",
      "izPanda",
      "Lion",
      "Switcharoo",
      "Caldrek",
    ],
  },
  {
    value: "b",
    title: "Electric Slide",
    text: "The Electric Slide gate unlocks the ability to do yellow maps and outsite activities up to area level 78.",
    unlockTime: "unlocked",
    requirments: ["Complete a T10 Yellow Map"],
    incomplete: [],
    done: [
      "KryKanos",
      "Jooblee",
      "Lion",
      "Switcharoo",
      "Alex",
      "izPanda",
      "Caldrek",
    ],
  },
  {
    value: "c",
    title: "Crimson",
    text: "The Crimson gate unlocks the ability to do red maps and all outsite activities.",
    unlockTime: "unlocked",
    requirments: ["Complete a T16 Red Map"],
    incomplete: ["Switcharoo", "Lion", "izPanda", "Caldrek", "KryKanos"],
    done: ["Alex", "Jooblee"],
  },
  {
    value: "d",
    title: "Dino World",
    text: "The Dino World gate unlocks the ability to take on the first voidstone boss, The Searing Exarch.",
    unlockTime: "unlocked",
    requirments: ["Kill the quest version of the Searing Exarch."],
    incomplete: ["Switcharoo", "Lion", "izPanda", "Caldrek", "KryKanos"],
    done: ["Jooblee", "Alex"],
  },
  {
    value: "e",
    title: "Squid Land",
    text: "The Squid Land gate unlocks the ability to take on the second voidstone boss, The Eater of Worlds.",
    unlockTime: "2025-01-28T18:00:00",
    requirments: ["Kill the quest version of the Eater of Worlds."],
    incomplete: [
      "Switcharoo",
      "Jooblee",
      "Alex",
      "Lion",
      "izPanda",
      "Caldrek",
      "KryKanos",
    ],
    done: [],
  },
  {
    value: "f",
    title: "Brain",
    text: "The Brain gate unlocks the abiliity to take on Maven herself directly. (Note that the invitations leading up to her are only gated by the map gates).",
    unlockTime: "2025-01-29T18:00:00",
    requirments: ["Kill the Maven."],
    incomplete: [
      "Switcharoo",
      "Jooblee",
      "Alex",
      "Lion",
      "izPanda",
      "Caldrek",
      "KryKanos",
    ],
    done: [],
  },
  {
    value: "g",
    title: "Even Squidlier",
    text: "The Even Squidlier gate allows you to take on the last voidstone boss, Uber Elder. ",
    unlockTime: "2025-01-30T18:00:00",
    requirments: ["Kill Uber Elder"],
    incomplete: [
      "Switcharoo",
      "Jooblee",
      "Alex",
      "Lion",
      "izPanda",
      "Caldrek",
      "KryKanos",
    ],
    done: [],
  },
];

export default data;
