import {$host} from "./index"

export const fetchFaqsApi = async () => {
    const {data} = await $host.get('faqs/')
    return data
}

export const fetchFaqApi = async (faq_slug) => {
    const {data} = await $host.get(`faqs/${faq_slug}/`)
    return data
}