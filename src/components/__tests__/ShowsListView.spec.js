import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import ShowsListView from "../ShowsListView.vue";

const props = {
  name: "comedy shows",
  id: "comedyShows",
  shows: [
    {
      id: 79,
      name: "The Goldbergs",
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_portrait/422/1055406.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/422/1055406.jpg",
      },
      rating: {
        average: 7.5,
      },
      summary:
        "<p>Before there were parenting blogs, trophies for showing up and peanut allergies, there was a simpler time called the '80s. For geeky and movie obsessed youngest child Adam, these were his wonder years, and he faced them armed with a video camera to capture all the crazy. <b>The Goldbergs</b> are a loving family like any other -- just with a lot more yelling. Mom Beverly is a classic \"smother,\" an overbearing, overprotective matriarch who loves her delicious kids, but still rules this brood with 100% authority and zero sense of boundaries. Dad Murray is gruff and sometimes oblivious, parenting with half his attention span but all his heart. Sister Erica is popular and terrifying, doing her best to cover up that she's the smartest of the clan. Barry is a passionate dreamer, who maybe dreams a little too big and who always gets the short end of the stick. Adam is the youngest, a camera-wielding future director who's navigating first love, and growing up with his family. Rounding out the family is beloved grandfather Al \"Pops\" Solomon, the wild man of the clan, a shameless Don Juan who's learning as much from his family as he teaches them.</p>",
      genres: ["Comedy", "Family"],
      language: "English",
      premiered: "2013-09-24",
      status: "Running",
      url: "https://www.tvmaze.com/shows/79/the-goldbergs",
    },
    {
      id: 83,
      name: "The Simpsons",
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_portrait/423/1058261.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/423/1058261.jpg",
      },
      rating: {
        average: 8.1,
      },
      summary:
        "<p><b>The Simpsons</b> is the longest running scripted show in US television history. It captures the adventures of Homer, Marge, Maggie, Bart and Lisa who are living in a fictional town called Springfield.</p>",
      genres: ["Comedy", "Family"],
      language: "English",
      premiered: "1989-12-17",
      status: "Running",
      url: "https://www.tvmaze.com/shows/83/the-simpsons",
    },
    {
      id: 84,
      name: "Family Guy",
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_portrait/423/1058269.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/423/1058269.jpg",
      },
      rating: {
        average: 7.6,
      },
      summary:
        "<p><b>Family Guy</b> follows Peter Griffin the endearingly ignorant dad, and his hilariously offbeat family of middle-class New Englanders in Quahog, RI. Lois is Peter's wife, a stay-at-home mom with no patience for her family's antics. Then there are their kids: 18-year-old Meg is an outcast at school and the Griffin family punching bag; 13-year-old Chris is a socially awkward teen who doesn't have a clue about the opposite sex; and one-year-old Stewie is a diabolically clever baby whose burgeoning sexuality is very much a work in progress. Rounding out the Griffin household is Brian the family dog and a ladies' man who is one step away from AA.</p>",
      genres: ["Comedy", "Family"],
      language: "English",
      premiered: "1999-01-31",
      status: "Running",
      url: "https://www.tvmaze.com/shows/84/family-guy",
    },
    {
      id: 107,
      name: "Bob's Burgers",
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_portrait/423/1058267.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/423/1058267.jpg",
      },
      rating: {
        average: 8,
      },
      summary:
        "<p>The series follows Bob who runs <b>Bob's Burgers</b>, with the help of his wife and their three kids. Bob has big ideas about burgers, but the rest of the clan falls short on service. Despite the greasy counters and lousy location, the Belchers are determined to make every \"Grand Re-Re-Re-opening\" a success. Bob's wife, Linda, stands by her man and often does so by bursting into song. Their eldest daughter, 13-year-old Tina has a slight obsession with boys and zombies. Middle child Gene is an aspiring musician with a thirst for life. Louise is the bunny ears-wearing youngest daughter with an off-kilter sense of humor that makes her somewhat of a liability in the kitchen – and with the public.</p>",
      genres: ["Comedy", "Family"],
      language: "English",
      premiered: "2011-01-09",
      status: "Running",
      url: "https://www.tvmaze.com/shows/107/bobs-burgers",
    },
    {
      id: 215,
      name: "American Dad!",
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_portrait/389/973823.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/389/973823.jpg",
      },
      rating: {
        average: 7.5,
      },
      summary:
        "<p>In <b>American Dad!</b>, Stan Smith leads the all-American family in this animated sitcom filled with wild and crazy extremes. Everyday life is taken to the limit as Stan applies the same drastic measures used in his job at the CIA to his home life. Driven by machismo and the American dream, he often is blind to how horribly he fails at his attempts. This father might not know best, but he never stops trying.</p>",
      genres: ["Comedy", "Family"],
      language: "English",
      premiered: "2005-02-06",
      status: "Running",
      url: "https://www.tvmaze.com/shows/215/american-dad",
    },
    {
      id: 216,
      name: "Rick and Morty",
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_portrait/423/1059147.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/423/1059147.jpg",
      },
      rating: {
        average: 8.9,
      },
      summary:
        "<p>Rick is a mentally gifted, but sociopathic and alcoholic scientist and a grandfather to Morty; an awkward, impressionable, and somewhat spineless teenage boy. Rick moves into the family home of Morty, where he immediately becomes a bad influence.</p>",
      genres: ["Comedy", "Adventure", "Science-Fiction"],
      language: "English",
      premiered: "2013-12-02",
      status: "Running",
      url: "https://www.tvmaze.com/shows/216/rick-and-morty",
    },
    {
      id: 263,
      name: "Last Week Tonight with John Oliver",
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_portrait/392/980542.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/392/980542.jpg",
      },
      rating: {
        average: 7.9,
      },
      summary:
        "<p>On <b>Last Week Tonight with John Oliver</b>, John Oliver presents a satirical look at the week in news, politics and current events.</p>",
      genres: ["Comedy"],
      language: "English",
      premiered: "2014-04-27",
      status: "Running",
      url: "https://www.tvmaze.com/shows/263/last-week-tonight-with-john-oliver",
    },
    {
      id: 281,
      name: "Mock the Week",
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_portrait/61/154228.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/61/154228.jpg",
      },
      rating: {
        average: 8,
      },
      summary:
        "<p>Comedy show combining the best elements of panel show, stand-up and improvised games with two teams of comedians taking a satirical swipe at the news and world events.</p>",
      genres: ["Comedy"],
      language: "English",
      premiered: "2005-06-05",
      status: "Running",
      url: "https://www.tvmaze.com/shows/281/mock-the-week",
    },
    {
      id: 315,
      name: "Archer",
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_portrait/202/507118.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/202/507118.jpg",
      },
      rating: {
        average: 8.5,
      },
      summary:
        "<p><b>Archer</b> is an animated, half-hour comedy set at the International Secret Intelligence Service, a spy agency where espionage and global crises are merely opportunities for its highly trained employees to confuse, undermine, betray and royally screw each other.</p>",
      genres: ["Comedy", "Action", "Adult"],
      language: "English",
      premiered: "2009-09-17",
      status: "Running",
      url: "https://www.tvmaze.com/shows/315/archer",
    },
    {
      id: 327,
      name: "Inside Amy Schumer",
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_portrait/423/1057529.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/423/1057529.jpg",
      },
      rating: {
        average: 6.8,
      },
      summary:
        "<p><b>Inside Amy Schumer</b> is the new series featuring Schumer's provocative and hilariously wicked mind, as she explores topics revolving around sex, relationships, and the general clusterf*ck that is life through a series of scripted vignettes, stand-up comedy, and man-on-the-street interviews.</p>",
      genres: ["Comedy"],
      language: "English",
      premiered: "2013-04-30",
      status: "Running",
      url: "https://www.tvmaze.com/shows/327/inside-amy-schumer",
    },
  ],
};

describe("ShowsListView", () => {
  it("renders all items", () => {
    const wrapper = mount(ShowsListView, { props });
    const lengthOfRenderedItems = [...wrapper.findAll(".shows-list__list-item")]
      .length;
    expect(lengthOfRenderedItems).toEqual(10);
  });
  it("renders titles", () => {
    const wrapper = mount(ShowsListView, { props });
    const showTitles = [...wrapper.findAll(".shows-list__show-name")]
      .map((sh) => sh.text())
      .join(", ");
    expect(showTitles).toEqual(props.shows.map((sh) => sh.name).join(", "));
  });
  it("renders imdb scores", () => {
    const wrapper = mount(ShowsListView, { props });
    const showTitles = [...wrapper.findAll(".shows-list__list-item-imdb")].map(
      (sh) => sh.text()
    );
    expect(showTitles).toEqual(props.shows.map((sh) => `${sh.rating.average}`));
  });
});
