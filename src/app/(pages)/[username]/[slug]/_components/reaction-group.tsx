import { Tables } from "@/types/database.types";
// import { fetchReactions } from "../_utils/fetchReactions";
import ReactionButton from "./reaction-button";

const REACTION_TYPES: Tables<"reactions">["reaction_type"][] = [
  "like",
  "interest",
  "heart",
  "check",
  "memo",
];

const ReactionGroup = ({ contentId }: { contentId: number }) => {
  return (
    <div className="flex items-center space-x-2 text-muted-foreground">
      {REACTION_TYPES.map(async (reactionType) => {
        // const { reactionCount, hasReacted } = await fetchReactions(
        //   contentId,
        //   reactionType
        // );
        return (
          <ReactionButton
            key={reactionType}
            contentId={contentId}
            reactionType={reactionType}
            reactionCount={1}
            hasReacted={false}
          />
        );
      })}
    </div>
  );
};

export default ReactionGroup;
