import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";
import type { Comment, User } from "../models";
import { getCommentsApi, getUserApi } from "@discussions/services";

interface State {
  comments: Comment[];
  user: User;
}

export const useDiscussionStore = defineStore("Comment", () => {
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
    console.log(data);

    Object.assign(state.comments, data.data);
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
    Object.assign(state.user, data.data);

    // Object.assign(state.comments, data.data);
  };

  return { state, getCommentsStore, getUserStore };
});
