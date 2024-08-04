console.log('I dey work ooo!');

const database = [
    {
        username: 'mobs',
        password: 'balogs'
    }, 
    {
        username: 'chromes',
        password: 'balls'
    }, 
    {
        username: 'pitzer',
        password: '123345'
    }, {
        username: 'ade',
        password: 'poms'
    }, 
    {
        username: 'diddy',
        password: 'comby'
    }, 
    {
        username: 'schlupp',
        password: 'peru'
    }, 
]

const timeline = [
    {
        username: 'toms',
        post: ' This is a good place to have fun!'
    },

    {
        username: 'josh',
        post: 'Happy Birthday to Mobs!'
    },
    {
        username: 'Mobs',
        post: ' Thoday is my birthday!'
    }
]

const userNamePrompt = prompt('Enter Username');
const passwordPrompt = prompt('Enter password');


// Single user example
// function access(username, password) {
//     if(username === database[0].username && password === database[0].password) {
//         alert('Access Granted!')
//         console.log(timeline);
//     } else {
//         alert('Wrong Username or Password!!')
//     }
// }

// access(userNamePrompt, passwordPrompt);

// Multiple Users

const userValidation = function(username, password) {
    for(let i = 0; i < database.length; i++){
        if(database[i].username === username && database[i].password === password) return true;
    }

    return false;
}


function access(username, password) {
    if(userValidation(username, password)){
        alert('Access Granted!!!');
        console.log(timeline);
    } else {
            alert('Wrong username or password!!!')
        }
}

access(userNamePrompt, passwordPrompt);

// Homework
// Pracitce study with the video
