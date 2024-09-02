import React, { useState, useEffect } from 'react';
import { ScrollRestoration, useNavigate, useSearchParams } from 'react-router-dom';
import { mainQuestArticles } from '../utils/mainQuests/mainQuests';
import { ArticleType } from '../utils/types';
import { sideQuestArticles } from '../utils/sideQuests/sideQuests';
import styled from 'styled-components';
import useIsScrolling from '../hooks/useIsScrolling';

const Article = () => {
    const [article, setArticle] = useState<ArticleType>(mainQuestArticles[0]);
    const navigate = useNavigate();
    const [searchparams] = useSearchParams();
    const [ previousDisabled, setPreviousDisabled ] = useState(false)
    const [ nextDisabled, setNextDisabled ] = useState(false)
    const articleId = searchparams.get('id') || '';
    const { resetScroll } = useIsScrolling()

    useEffect(() => {
      resetScroll()
        try {
            let foundArticle;
            switch (articleId.slice(0, 4)) {
                case '3194':
                    foundArticle = mainQuestArticles.find((article) => String(article?.id) === articleId);
                    setNextDisabled(Number(articleId.slice(4)) === mainQuestArticles.length);
                    setPreviousDisabled(Number(articleId.slice(4)) === 1);
                    break;
                case '9945':
                    foundArticle = sideQuestArticles.find((article) => String(article?.id) === articleId);
                    setNextDisabled(Number(articleId.slice(4)) === sideQuestArticles.length);
                    setPreviousDisabled(Number(articleId.slice(4)) === 1);
                    break;
                default:
                    throw new Error('Article not found');
            }
            if (foundArticle) {
                setArticle(foundArticle);
            } else {
                throw new Error('Article not found');
            }
        } catch (error) {
           navigate('/404', {replace: true});
        }
    }, [articleId, navigate]);

    return (
        <ArticleContainer>
            <div className='center title'><img src={article?.primaryImage} alt='primary_image' /></div>
            <h1>{article?.title}</h1>
            {article?.content.map((item, index) => {
              return (
                item
              )
            })}
            <div className='footer'>
              {
                !previousDisabled &&
                <button onClick={() => {navigate(`/blog/article?id=${Number(articleId) - 1}`)}}>
                  <img className='previous arrow' src='static/arrow.png'  alt='previous article' />
                  Previous Article
                </button>
              }
              {
                !nextDisabled && 
                <button onClick={() => {navigate(`/blog/article?id=${Number(articleId) + 1}`)}}>
                  Next Article
                  <img className='next arrow' src='static/arrow.png' alt='next article' />
                </button>
              }
              
            </div>
        </ArticleContainer>
    );
}

export default Article;

const ArticleContainer = styled.article`
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    
    div {
    width: 100%;
    }

    h1 {
      font-size: 2.5em;
      margin-bottom: 20px;
      margin-top: 20px;
      color: #805422;
    }

    h2 {
      font-size: 2em;
      margin-bottom: 10px;
      margin-top: 10px;
      color: #AB957C;
    }

    h3 {
      font-size: 1.3em;
      width: fit-content;
      color: #AB957C;
    }

    p {
      font-size: 1.1em;
    }

    a {
      color: #805422;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }

    img {
    width: fit-content;
    max-width: 100%;
    }

    video {
    }

    .top-left {
    float: left;
    margin-right: 10px;
    margin-bottom: 10px;
    }

    .top-right {
      float: right;
      margin-left: 10px;
      margin-bottom: 10px;
      }

    .up-and-down {
    display: flex;
    flex-direction: column;
    }

    .center {
    display: flex;
    flex-direction: column;
    align-items: center;
    }

    .title {
    margin-top: 6rem;
    width: 100%;
    }

    .icon {
    width: 22px;
    }

    .footer {
    margin: 20px auto 20px auto;
    width: 100%;
    display: flex;
    justify-content: space-between;
    }


    .arrow {
    position: relative;
    top: 3px;
    width: 30px;
    height: 1rem;
    transition: 1s ease all;
    object-fit: cover;
    }

    .previous {
      transform: scaleX(-1);
    }

    button {
    width: fit-content;
    height: 2.5rem;
    background-color: #AB957C;
    border: none;
    cursor: pointer;
      &:hover {
        .previous {
          transform: scaleX(-1) translateX(5px);
        }

        .next {
          transform: translateX(5px);
          }
      }
    }

`;

