import { ChangeEventHandler, useEffect, useState } from 'react'

export default function useDelayInput(delay: number = 1000) {
    const [article, setArticle] = useState({
        url: '',
        summary: '',
    })

    let inputtimer = setTimeout(() => { }, delay)

    const handelInput: ChangeEventHandler<HTMLInputElement> = (e: React.ChangeEvent<HTMLInputElement>) => {
        clearTimeout(inputtimer)
        inputtimer = setTimeout(() => setArticle({ ...article, url: e?.target?.value }), delay)
    }
    return {article, handelInput,setArticle}
}
