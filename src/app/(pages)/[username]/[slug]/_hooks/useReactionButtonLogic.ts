// import { Tables } from "@/types/database.types";
// import { useActionState, useOptimistic, useTransition } from "react";
// import { updateReaction } from "../_actions/updateReactions";

// const useReactionButtonLogic = (
//   reactionCount: number,
//   hasReacted: boolean,
//   contentId: number,
//   reactionType: Tables<"reactions">["reaction_type"]
// ) => {
//   const initialState = {
//     reactionCount: reactionCount,
//     hasReacted: hasReacted,
//   };

//   // トランジション: UI更新を遅延させ、バックグラウンドでレンダリングする
//   const [isPending, startTransition] = useTransition();
//   // アクションステート: アクションの結果に基づいて、状態を更新
//   const [state, reactionsAction] = useActionState(updateReaction, initialState);
//   // 楽観的更新: バックエンドでの処理が完了する前に、UIを更新
//   const [optimisticState, updateOptimistic] = useOptimistic(state);

//   const handleClick = () => {
//     startTransition(() => {
//       updateOptimistic((currentState) => {
//         return {
//           reactionCount: currentState.hasReacted
//             ? currentState.reactionCount - 1
//             : currentState.reactionCount + 1,
//           hasReacted: !currentState.hasReacted,
//         };
//       });
//       reactionsAction({
//         contentId: contentId,
//         reactionType: reactionType,
//       });
//     });
//   };

//   return {
//     isPending,
//     optimisticState,
//     handleClick,
//   };
// };

// export default useReactionButtonLogic;
