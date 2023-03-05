import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";
import type { Comment, User } from "../models";
import {
  getCommentsApi,
  getUserApi,
  createCommentApi,
  updateCommentApi,
} from "@discussions/services";

interface State {
  comments: Comment[];
  user: User;
}

export const useCommentStore = defineStore("Comment", () => {
  const state = reactive<State>({
    comments: [
      {
        _id: "",
        createdAt: "",
        updatedAt: "",
        user: {
          _id: "",
          fName: "",
          lName: "",
          avatar: "",
        },
        text: "",
        likes: 1,
        isLike: false,
        replies: [
          {
            _id: "",
            createdAt: "",
            updatedAt: "",
            user: {
              _id: "",
              fName: "",
              lName: "",
              avatar: "",
            },
            text: "",
            likes: 1,
            isLike: false,
          },
        ],
      },
    ],
    user: {
      _id: "",
      fName: "",
      lName: "",
      avatar: "",
    },
  });

  const getCommentsStore = async () => {
    const { data } = await getCommentsApi();
    state.comments = data;
  };

  const getUserStore = async ({
    phone,
    password,
  }: {
    phone: string;
    password: string;
  }) => {
    const { data } = await getUserApi({
      phone: phone,
      password: password,
    });
    await Object.assign(state.user, data.data);

    // Object.assign(state.comments, data.data);
  };

  const addCommentStore = async ({ text }: { text: string }) => {
    await createCommentApi({ text: text });
    await getCommentsStore();
  };

  const updateCommentStore = async ({
    commentId,
    obj,
  }: {
    commentId: string;
    obj: any;
  }) => {
    await updateCommentApi({ commentId: commentId, obj: obj });
    await getCommentsStore();
  };

  return {
    state,
    getCommentsStore,
    getUserStore,
    addCommentStore,
    updateCommentStore,
  };
});
