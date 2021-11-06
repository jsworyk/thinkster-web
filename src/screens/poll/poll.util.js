import politics from "../../assets/poll-categories/politics.png";
import entertainment from "../../assets/poll-categories/entertainment.png";
import trivia from "../../assets/poll-categories/trivia.png";
import food from "../../assets/poll-categories/food.png";
import relationships from "../../assets/poll-categories/relationships.png";
import personality from "../../assets/poll-categories/personality.png";

export const getPollCategoryImage = ({ Category }) => {
  switch (Category) {
    case "Politics":
      return politics;
    case "Entertainment":
      return entertainment;
    case "Trivia":
      return trivia;
    case "Food":
      return food;
    case "Relationships":
      return relationships;
    case "Personality":
      return personality;
  }
};
