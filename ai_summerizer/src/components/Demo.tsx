import React, { useEffect, useState } from 'react'
import {
  linkIcon,
  loader,
  copy,
  logo,
  tick
} from '../assets';
import useDelayInput from '../utility/useDelayInput';
import { useLazyGetSummeryQuery } from '../services/article';
// @ts-ignore
export default function Demo() {
  const [getsummery, { error, isFetching }] = useLazyGetSummeryQuery();
  const [allArticles, setAllArticles] = useState([])
  const { article, handelInput, setArticle } = useDelayInput();
  async function handleSumbit(e: InputEvent) {
    e.preventDefault();
    const { data } = await getsummery({ articleUrl: article.url });
    console.error(data)
    if (data.summary) {
      const newArticle = { ...article, summary: data.summary }
      setArticle(newArticle)
      setAllArticles(prevstate => [...prevstate, newArticle]);
    }

  }
  console.error(article)
  return (
    <section
      className='mt-16 w-full max-w-xl'>
      <div
        className='flex flex-col w-full gap-2'>
        <form className='relative flex justify-center items-center' action=""
          onSubmit={handleSumbit}>
          <img src={linkIcon} alt="" className='absolute left-0 my-2 ml-3 w-5' />
          <input type="url" placeholder='Enter a URL' onChange={handelInput}
            className='url_input peer'
            required />
          <button
            type='submit'
            className='submit_btn
          peer-focus:border-gray-700
          peer-focus:text-gray-700'
          >
            &#2934;
          </button>
        </form>
        <div
          className='flex flex-col gap-1 max-h-60
        overflow-y-auto'>
          {allArticles.map((item, index) => (
            <div
              key={`link-${index}`}
              onClick={() => { }}
              className='link_card'>
              <div
                className='copy_btn'
                onClick={() => navigator.clipboard.writeText(item.url)}>
                <img src={copy} alt=""
                  className='w-[40%] h-[40%] object-contain' />
              </div>
              <p
                className='flex-1 font-medium text-blue-600 text-sm truncate'>
                {item.url}
              </p>

            </div>
          ))}

        </div>
      </div>
      <div
        className=' flex my-10 max-w-full justify-center items-center'>
        {
          isFetching ?
            <img src={loader} alt="" className='w-20 h-20 object-contain' />
            :
            error ?
              <p
                className='font-inter font-bold text-black text-center'>
                zarp error khordim!
              </p>
              // <span></span>
              :
              (article.summary &&
                (
                  <div
                    className='flex flex-col gap-3'>
                    <h2
                      className='font-bold text-gray-600 text-xl'>
                      Article <span className='blue_gradient'>Summary</span>
                    </h2>
                    <div
                      className='summary_box'>
                      <p>
                        {article.summary}
                      </p>

                    </div>
                  </div>)
              )}

      </div>
    </section>
  )
}
