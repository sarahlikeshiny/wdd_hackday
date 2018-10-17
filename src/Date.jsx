import React from 'react';


class EntryDate extends React.Component {

    humanReadbleDate() {
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1; //January is 0!

        const yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        const weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";

        const day = weekday[today.getDay()];
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const month = monthNames[today.getMonth()]
        const hours = today.getHours();
        const minutes = today.getMinutes();

        return today = `${day} ${dd} ${month} ${yyyy} ${hours}.${minutes}`;
    }

    render() {
        return (
            <h1>{this.humanReadbleDate()}</h1>
        )
    }
}

export default EntryDate;