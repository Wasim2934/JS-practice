const fetchUser = async () => {
    let data = await fetch('https://jsonplaceholder.typicode.com/users')
    let res = await data.json()
    
    res.map((item) => {
        console.log(item.username);
    })

}

fetchUser()