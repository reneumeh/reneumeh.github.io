import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { mainQuestArticles } from '../utils/mainQuests/mainQuests';
import { ArticleType } from '../utils/types';
import { sideQuests } from '../utils/sideQuests/sideQuests';
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
                    foundArticle = sideQuests.find((article) => String(article?.id) === articleId);
                    break;
                default:
                    throw new Error('Article not found');
            }
            if (foundArticle) {
                setArticle(foundArticle);
            } else {
                throw new Error('Article not found');
            }
        } catch {
            navigate('/../../PageNotFound');
        }
    }, [articleId, navigate]);

    return (
        <ArticleContainer>
            <img className='center' src={article?.primaryImage} alt='primary_image' />
            {article?.title}
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
    
    h1 {
      font-size: 2.5em;
      margin-bottom: 20px;
    }

    h2 {
      font-size: 1.75em;
      margin-bottom: 10px;
    }

    h3 {
      font-size: 1.5em;
    }

    p {
      font-size: 1em;
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

    .side-by-side {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    }

    .up-and-down {
    display: flex;
    flex-direction: column;
    }

    .center {
    margin: inherit auto;
    }

`;

