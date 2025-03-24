// "use server";

// import { supabase } from "@/lib/supabaseClient";
// import { Tables } from "@/types/database.types";
// import { getUserToken, setUserToken } from "@/utils/userToken";

// type ReactionData = {
//   contentId: number;
//   reactionType: Tables<"reactions">["reaction_type"];
// };

// type prevState = {
//   reactionCount: number;
//   hasReacted: boolean;
// };

// export const updateReaction = async (
//   prevState: prevState,
//   reactiondata: ReactionData
// ) => {
//   let userToken = await getUserToken();

//   if (!userToken) {
//     userToken = await setUserToken();
//   }

//   if (prevState.hasReacted) {
//     // リアクションを削除
//     await supabase
//       .from("reactions")
//       .delete()
//       .eq("content_id", reactiondata.contentId)
//       .eq("reaction_type", reactiondata.reactionType)
//       .eq("user_token", userToken);

//     return {
//       reactionCount: prevState.reactionCount - 1,
//       hasReacted: !prevState.hasReacted,
//     };
//   } else {
//     // リアクションを追加
//     await supabase.from("reactions").insert({
//       user_token: userToken,
//       content_id: reactiondata.contentId,
//       reaction_type: reactiondata.reactionType,
//     });

//     return {
//       reactionCount: prevState.reactionCount + 1,
//       hasReacted: !prevState.hasReacted,
//     };
//   }
// };
