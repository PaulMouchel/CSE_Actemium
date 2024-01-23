const getFormatedDate = () => {
    const currentTime = new Date()

    // returns the month (from 0 to 11)
    const month = ('0' + (currentTime.getMonth() + 1)).slice(-2)
    // returns the day of the month (from 1 to 31)
    const day = ('0' + currentTime.getDate()).slice(-2)
    // returns the year (four digits)
    const year = currentTime.getFullYear()
    return `${day}.${month}.${year}`
}

export default getFormatedDate