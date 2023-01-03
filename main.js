const users = {
    1: {
        name: prompt(`1-Foydanauvching ismini kiriting`),
        age: prompt(`1-Foydanauvching yoshini kiriting`)
    },
    2: {
        name: prompt(`2-Foydanauvching ismini kiriting`),
        age: prompt(`2-Foydanauvching yoshini kiriting`)
    },
    3: {
        name: prompt(`3-Foydanauvching ismini kiriting`),
        age: prompt(`3-Foydanauvching yoshini kiriting`)
    },
    4: {
        name: prompt(`4-Foydanauvching ismini kiriting`),
        age: prompt(`4-Foydanauvching yoshini kiriting`)
    }
}
for (const key in users) {
    for (const key2 in users[key]) {
        let user1 = `Foydanauvchi 1  \nsiznig ismingiz ${users[1].name} \nsizning yoshingiz ${users[1].age}`
        let user2 = `\nFoydanauvchi 2  \nsiznig ismingiz ${users[2].name} \nsizning yoshingiz ${users[2].age}`
        let user3 = `\nFoydanauvchi 3  \nsiznig ismingiz ${users[3].name} \nsizning yoshingiz ${users[3].age}`
        let user4 = `\nFoydanauvchi 4  \nsiznig ismingiz ${users[4].name} \nsizning yoshingiz ${users[4].age}`
        console.log(user1,user2,user3,user4)
    }
}


console.log(users)


