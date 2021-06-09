const weekdays = document.querySelector(".weekdays");
const date1 = document.querySelector("#date1");
const date2 = document.querySelector("#date2");

const daysTemp = document.querySelector(".textTemplate").innerHTML;
const tempCompile = Handlebars.compile(daysTemp);

const myDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

weekdays.innerHTML = tempCompile({ days: myDays });

let matchInst = dayMatch()

let days = weekdays.children

date1.addEventListener("change", function (e) {
    let day1 = matchInst.getDayIndex(e.target.value)

    for (let i = 0; i < days.length; i++) {
        let dayItem = days[i];
        dayItem.classList.remove("blockColor1");
        dayItem.classList.remove("dayMatch");

        let targetDay = days[day1];
        if (targetDay.classList.contains("blockColor2")) {
            targetDay.classList.add("blockColor1");
            targetDay.classList.add("dayMatch");
        } else {
            targetDay.classList.add("blockColor1");
        }
    }
})


date2.addEventListener("change", function (e) {
    let day2 = matchInst.getDayIndex(e.target.value)

    for (let i = 0; i < days.length; i++) {
        let dayItem2 = days[i];
        dayItem2.classList.remove("blockColor2");
        dayItem2.classList.remove("dayMatch");

        let targetDay2 = days[day2];
        if (targetDay2.classList.contains("blockColor1")) {
            targetDay2.classList.add("blockColor2")
            targetDay2.classList.add("dayMatch")
        } else {
            targetDay2.classList.add("blockColor2")
        }
    }
})

