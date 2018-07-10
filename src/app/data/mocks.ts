// export const USER_DATA = {

//             firstName : "Bill",
//             lastName : "Gates",
//             dob : new Date("Dec 21, 1963"),
//             income : 30000,
//             votes : 14,
//             image : "assets/image/bill.jpg"
// }

import { User } from "../model/User";

export const USER_DATA: User[] = [{

    firstName: "Bill",
    lastName: "Gates",
    dob: new Date("Dec 21, 1963"),
    income: 30000,
    votes: 14,
    isWorking: true,
    image: "assets/image/bill.jpg"
},
{
    firstName: "Albert",
    lastName: "Einstein",
    dob: new Date("March 14, 1879"),
    income: 0,
    votes: 14,
    isWorking: false,
    image: "assets/image/Einstein.jpg"
}
]