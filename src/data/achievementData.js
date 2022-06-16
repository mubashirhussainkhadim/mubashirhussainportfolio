
import two from "../assets/achevements/2.jpg"
import three from "../assets/achevements/3.jpg"
import one from "../assets/achevements/1.jpg"

export const achievementData = {
    bio : "You are not here merely to make a living. You are here in order to enable the world to live more amply, with greater vision, with a finer spirit of hope and achievement. You are here to enrich the world, and you impoverish yourself if you forget the errand.",
    achievements : [
        {
            id : 1,
            title : 'React - The Complete Guide (incl Hooks, React Router, Redux)',
            details : 'Dive in and Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js.',
            date : 'June 5, 2022',
            field : 'Web Development',
            image : one
        },
        {
            id : 2,
            title : 'Ethereum Smart Contract Programming 201',
            details : "This course is our advanced solidity course..",
            date : 'April 20, 2022',
            field : 'BLOCKCHAIN',
            image : two
        },
        {
            id : 3,
            title : 'Ethereum dApp Programming',
            details : 'This course will teach you everything you need to create and deploy your own dApps - the backbone of Web3.',
            date : 'May 27, 2022',
            field : 'Blockchain',
            image : three
        }

    ]
}


// Do not remove any fields.
// Leave it blank instead as shown below.

/*

export const achievementData = {
    bio : "",
    achievements : []
}

*/
