// api - https://dog.ceo/api/breed/hound/images/random

const fs = require("fs");
const superagent = require("superagent");

// we will use superagent to fetch the data from API bcz, it provides some advanatges

// fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
//     console.log(`Breed: ${data}`);

//     // http get request
//     superagent
//         .get(`https://dog.ceo/api/breed/${data}/images/random`)
//         .end((err, res) => {
//             if (err) return console.log(err.message);

//             console.log(res.body.message);

//             fs.writeFile("dog-img.txt", res.body.message, (err) => {
//                 console.log("Random dog image saved to file");
//             });
//         });
// });

// promises -----------------------

// const readFilePro = (file) => {
//     return new Promise((res, rej) => {
//         // executor function
//         fs.readFile(file, (err, data) => {
//             if (err) reject("file not found😕");
//             // when we successfuly consumed the data
//             res(data);
//         });
//     });
// };

// const writeFilePro = (file, data) => {
//     return new Promise((res, rej) => {
//         fs.writeFile(file, data, (err) => {
//             if (err) rej(err.message);
//             res("success");
//         });
//     });
// };

// readFilePro(`${__dirname}/dog.txt`)
//     .then((data) => {
//         console.log(`breed: ${data}`);
//         return superagent.get(
//             `https://dog.ceo/api/breed/${data}/images/random`,
//         );
//     })
//     .then((res) => {
//         console.log(res.body.message);
//         return writeFilePro("dog-img.txt", res.body.message);
//     })
//     .then((msg) => {
//         console.log(msg);
//     })
//     .catch((err) => err.message);

// Async - Await ----------------------->

const readFilePro = (file) => {
    return new Promise((res, rej) => {
        // executor function
        fs.readFile(file, (err, data) => {
            if (err) reject("file not found😕");
            // when we successfuly consumed the data
            res(data);
        });
    });
};

const writeFilePro = (file, data) => {
    return new Promise((res, rej) => {
        fs.writeFile(file, data, (err) => {
            if (err) rej(err.message);
            res("success");
        });
    });
};

/*
const getDogPic = async () => {
    try {
        const data = await readFilePro(`${__dirname}/dog.txt`);
        console.log(`Breed: ${data}`);

        const res = await superagent.get(
            `https://dog.ceo/api/breed/${data}/images/random`,
        );
        console.log(res.body.message);

        const msg = await writeFilePro("dog-img.txt", res.body.message);

        console.log(msg);
    } catch (err) {
        console.error(err);
        throw err;
    }
    return "2: Ready🐶";
};

// using IIFE(Immediatly Invoked Function Expression )
(async () => {
    try {
        const x = await getDogPic();
        console.log(x);
    } catch (err) {
        console.log("ERROR💥💥");
    }
})();
*/

// using promise
/*
getDogPic()
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log("ERROR💥💥");
    });
*/

const getDogpic = async () => {
    try {
        const data = await readFilePro(`${__dirname}/dog.txt`);

        // now instead of doing this
        /*
        const res1 = await superagent.get(
            `https://dog.ceo/api/breed/${data}/images/random`,
        );
        const res2 = await superagent.get(
            `https://dog.ceo/api/breed/${data}/images/random`,
        );
    
        const res3 = await superagent.get(
            `https://dog.ceo/api/breed/${data}/images/random`,
        );
        */

        // this wont listen all the promises at same time isntead it will first listen for the first and then second and after that third

        // stores all the promise to an array;
        const res1Pro = superagent.get(
            `https://dog.ceo/api/breed/${data}/images/random`,
        );

        const res2Pro = superagent.get(
            `https://dog.ceo/api/breed/${data}/images/random`,
        );

        const res3Pro = superagent.get(
            `https://dog.ceo/api/breed/${data}/images/random`,
        );

        const all = await promise.all([res1Pro, res2Pro, res3Pro]);
        const imgs = all.map((res) => res.body.message);
        console.log(imgs);

        const msg = await writeFilePro("dog-img.txt", imgs.join("\n"));

        console.log(msg);
    } catch (err) {
        console.log(err);
        throw error;
    }
};
