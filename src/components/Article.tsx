import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { mainQuestArticles } from '../utils/mainQuests/mainQuests';
import { ArticleType } from '../utils/types';
import { sideQuestArticles } from '../utils/sideQuests/sideQuests';
import styled from 'styled-components';

const Article = () => {
    const [article, setArticle] = useState<ArticleType>(mainQuestArticles[0]);
    const navigate = useNavigate();
    const [searchparams] = useSearchParams();
    const articleId = searchparams.get('id') || '';

    useEffect(() => {
        try {
            let foundArticle;
            switch (articleId.slice(0, 4)) {
                case '3194':
                    foundArticle = mainQuestArticles.find((article) => String(article?.id) === articleId);
                    break;
                case '9945':
                    foundArticle = sideQuestArticles.find((article) => String(article?.id) === articleId);
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
           console.log(error);
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
    }

    h2 {
      font-size: 2em;
      margin-bottom: 10px;
      margin-top: 10px;
    }

    h3 {
      font-size: 1.3em;
    }

    p {
      font-size: 1.1em;
    }

    a {
      color: #007bff;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
    }
    }

    img {
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
    }

`;

