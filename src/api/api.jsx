import axios from "axios";

const api = axios.create({
    baseURL: 'https://be-nc-news-f47c.onrender.com/api'
})

export const getArticles = async () => {
const res = await api.get('/articles')
return res.data
}

export const getArticleByID = async (id) => {
    const res = await api.get(`/articles/${id}`)
    return res.data
}