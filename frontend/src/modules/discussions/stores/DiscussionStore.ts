import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import type { IProps, IDiscussion } from '../models'

interface State {
  iDiscussion: IDiscussion,
  comments: IDiscussion[]
}

export const useDiscussionStore = defineStore('Discussion', () => {

  const iDiscussion = reactive<IDiscussion>({
    id: 1,
    date: 1,
    user: {
      name: 'Amir Maghami',
      avatar: ''
    },
    text: '',
    likes: 1,
    iLikedIt: false,
    replies: []
  })

  const comments = reactive<IDiscussion[]>([
      {
        id: 1,
        date: 1657430563239,
        user: {
          name: 'Amir Maghami',
          avatar: ''
        },
        text: 'To run the app in development mode, open http://localhost:3000 in your browser. You should see the sample TypeScript app running',
        likes: 1,
        iLikedIt: false,
        replies: []
      },
      {
        id: 2,
        date: 1657430563239,
        user: {
          name: 'Sama Maghami',
          avatar: ''
        },
        text: 'Writing function or class components in a React/TypeScript app often requires you to define the type of props passed to them. It enforces type checking so that the code adheres to the defined contract. This guide will cover how to strongly type the props in a function component with the TypeScript interface.',
        likes: 1,
        iLikedIt: false,
        replies: [
          {
            id: 1,
            date: 1657430563239,
            user: {
              name: 'Amir Maghami',
              avatar: ''
            },
            text: 'To run the app in development mode, open http://localhost:3000 in your browser. You should see the sample TypeScript app running',
            likes: 1,
            iLikedIt: false,
          }
        ]
      },
      {
        id: 3,
        date: 1657430563239,
        user: {
          name: 'Zara Maghami',
          avatar: ''
        },
        text: 'including the amount budgeted, amount spent, and amount remaining in a category. There could be one or more budgets to display in the table. You will create a function component to achieve this.',
        likes: 1,
        iLikedIt: false,
        replies: []
      },
    ])

  const state = reactive<State>({
    iDiscussion,
    comments
  })
  

  const pushToComments = ({userComment}:{userComment: string}) => {

    const getId = () => {
      return comments.length + 1
    }
    const obj = {
      id: getId(),
      date: Date.now(),
      user: {
        name: 'Amir Maghami',
        avatar: ''
      },
      text: userComment,
      likes: 0,
      iLikedIt: false,
      replies: []
    }

    let temp: any = {};
    Object.assign(temp, obj)
    if (userComment.length > 0) {
      comments.push(temp)
      userComment = ''
      temp = {}
    }

  }



  return { state, pushToComments }
})
