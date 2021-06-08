function dayMatch() {
    const myDaysArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day1 = "";
    let day2 = "";

    function getDayIndex(randomDate) {
        let date = new Date(randomDate);
        let day = date.getDay();
        return day
    }

    function getDay1(randomDay) {
        day1 = myDaysArr[getDayIndex(randomDay)]
        return day1
    }

    function getDay2(randomDay) {
        day2 = myDaysArr[getDayIndex(randomDay)]
        return day2
    }

    function getColor(randomDay, randomDate) {
        if (getDay1(randomDay) !== getDay2(randomDate)) {
            return "blue"
        } else if (getDay1(randomDay) === getDay2(randomDate)) {
            return "green"
        }
    }

    return {
        getDayIndex,
        getDay1,
        getDay2,
        getColor
    }
}