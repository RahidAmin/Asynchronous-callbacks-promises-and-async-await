
///-------------Callback--------------

// const takeOrder = (customer, Callback) => {
//     console.log(`Take Order for customer ${customer}`);
//     Callback(customer);
// }

// const processedOrder = (customer, Callback) => {
//     setTimeout(() => {
//         console.log('Cooking Completed');
//         console.log(`Order processed for ${customer}`);

//         Callback(customer);
//     }, 3000)
// }


// const completeOrder = (customer) => {
//     console.log(`Complete order for ${customer}`)
// }

// takeOrder('customer 1', (customer) => {
//     processedOrder(customer, (customer) => {
//         completeOrder(customer);
//     })
// })
// console.log('hello world')


////------Promise-------------

// const hasMeeting = false;

// const meeting = new Promise((resolve, reject) => {

//     if (!hasMeeting) {
//         const meetingDetails = {
//             name: 'Technical meeting',
//             location: 'Gulshan',
//             time: '10:00Am'
//         }
//         resolve(meetingDetails)
//     }
//     else {
//         reject(new Error('Meeting has Already Schedule'));

//     }

// })

// const addToCalender = (meetingDetails) => {
//     return new Promise((resolve, reject) => {
//         const calender = `${meetingDetails.name} has been scheduled in ${meetingDetails.location} at ${meetingDetails.time}`;
//         resolve(calender);
//     }
//     )

// }
// const addToCalender = (meetingDetails) => {


//     const calender = `${meetingDetails.name} has been scheduled in ${meetingDetails.location} at ${meetingDetails.time}`;
//     return Promise.resolve(calender);

// }


// meeting.then(addToCalender).then((res) => console.log(res)).catch((err) => console.log(err.message))

// console.log('hello')

// const promise1 = Promise.resolve('This is Promise 1');

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('This is promise 2 using setTimeOut')
//     }, 4000)
// })

// Promise.all([promise1, promise2]).then(res => {
//     console.log(res)
// }
// )

////-------------async function and await---------

async function friendlyFunction() {
    return 'hello async';
}

function friendlyFunction1() {
    return Promise.resolve('hello async1')
}

console.log(friendlyFunction())
console.log(friendlyFunction1());



const hasMeeting = true;

const meeting = new Promise((resolve, reject) => {

    if (!hasMeeting) {
        const meetingDetails = {
            name: 'Technical meeting',
            location: 'Gulshan',
            time: '10:00Am'
        }
        resolve(meetingDetails)
    }
    else {
        reject(new Error('Meeting has Already Schedule'));

    }

})

const addToCalender = (meetingDetails) => {
    return new Promise((resolve, reject) => {
        const calender = `${meetingDetails.name} has been scheduled in ${meetingDetails.location} at ${meetingDetails.time}`;
        resolve(calender);
    }
    )

}



async function myMeeting() {

    try {
        const meetingDetails = await meeting;
        const calender = await addToCalender(meetingDetails);
        console.log(calender);
    } catch {
        console.log('Something wrong happend')
    }

}
myMeeting();