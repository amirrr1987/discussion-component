import moment from "moment";

export const useClassName = ({ name }: { name: string }) => {
    return `dnj-${name}`;
}

export const getDateDusration = ({ timeStamp }: { timeStamp: number }) => {
    var dateString = moment.unix(timeStamp).format("YYYY/MM/DD");



    return moment(dateString).fromNow()

}