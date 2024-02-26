import React from 'react'
import { useEffect, useState } from 'react';



const News = () => {
  const [articles, setArticles] = useState([])
  const [search ,setSearch] = useState("india")

  useEffect(()=>{
    fetch(`https://newsapi.org/v2/everything?q=${search}&from=2024-01-26&apiKey=f330845e4e774ac9a206f58674b9e208`)
    .then((res)=>res.json())
    .then((news)=>{
      setArticles(news.articles);
      console.log(news.articles)
    })
    .catch((error)=>{
      console.log(error)
    })
  },[search])
    // console.log(article)
  return (
    <>
    <header>
  <div className='header'>
      <div className='content'>
      <h1>Short News For You</h1>
      <input type='text' placeholder='Search New' onChange={(e)=>{
        
        
        
      if(e.target.value!=="")
      {
        setSearch(e.target.value)
      }
      else{
        setSearch("india")
      }}}/>
      </div>
    </div>
    </header>
      <section className='new_articles'>
        {
          articles &&
          articles.map((article)=>{
            return (
              <>
              <div className='new_app'>
                <div className='img-new'>
                  <img src={article.urlToImage} />

              </div>
                <h1>{article.title?.substring(0,25)}</h1>
                <p>{article.description?.substring(0,100).concat(".....")}<a href={article.url} target='_blank'>Read More</a></p>
                
                
          </div>
              </>
            )
          })
        
          
        }
     
      
      </section>
    </>
  )
}

export default News
