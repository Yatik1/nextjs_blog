const getData = async () => {
    const res = await fetch("https://blogbud.vercel.app/api/blog")
    return res.json()
}

export default getData
