import moment from "moment";
export const useClassName = ({ name }: { name: string }) => {
    return `dnj-${name}`;
}
export const getDateDusration = ({ timeStamp }: { timeStamp: number }) => {
    var dateString = moment(timeStamp, "YYYY/MM/DD");
    return moment(dateString).fromNow()
}
export const getDiscussionsApi = () => {
    return [
        {
            id: 3,
            date: 1657430569,
            user: {
                name: "Bessie Cooper",
                avatar: "https://www.godaddy.com/garage/wp-content/uploads/judith-kallos-BW-NEW-150x150.jpg"
            },
            text: "I think for our second compaign we can try to target a different audience. How does it sound for you?",
            likes: 2,
            iLikedIt: false,
            replies: [
                {
                    id: 5,
                    date: 1670653369,
                    user: {
                        name: "Marvin McKinney",
                        avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                    },
                    text: "Yes, that sounds good! I can think about this tomorrow. Then do we plan to start that compaign?",
                    likes: 3,
                    iLikedIt: true,
                },
                {
                    id: 6,
                    date: 1674838706,
                    user: {
                        name: "Bessie Cooper",
                        avatar: "https://www.godaddy.com/garage/wp-content/uploads/judith-kallos-BW-NEW-150x150.jpg",
                    },
                    text: "We plan to run the compaign on Friday - as far as I know. Do you think you will get this done by Thursday @Marvin?",
                    likes: 0,
                    iLikedIt: false,
                }
            ]
        },
        {
            id: 2,
            date: 1672554169,
            user: {
                name: "Marvin McKinney",
                avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
            },
            text: "The first compaign went smoothly. Please make sure to see all attachments with the results to understand the flow.",
            likes: 2,
            iLikedIt: false,
            replies: []
        },
        {
            id: 1,
            date: 1672726969,
            user: {
                name: "Savannah Nguyen"
            },
            text: "We have just published the first campaign. Let's see the results in the 5 days and we will iterate on this.",
            likes: 50,
            iLikedIt: true,
            replies: []
        }
    ]
}