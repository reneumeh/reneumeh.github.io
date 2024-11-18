
import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { mainQuestArticles } from '../config/mainQuests/mainQuests';
import { ArticleType } from '../utils/types';
import { sideQuestArticles } from '../config/sideQuests/sideQuests';
import styled from 'styled-components';
import useIsScrolling from '../hooks/useIsScrolling';
import { PALETTE } from '../utils/theme';


const Article = () => {
    const [article, setArticle] = useState<ArticleType>(mainQuestArticles[0]);
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [previousDisabled, setPreviousDisabled] = useState(false);
    const [nextDisabled, setNextDisabled] = useState(false);
    const articleId = searchParams.get('id') || '';
    const { resetScroll } = useIsScrolling();

    useEffect(() => {
        try {
            let foundArticle;
            switch (articleId.slice(0, 4)) {
                case '3194':
                    foundArticle = mainQuestArticles.find(article => String(article?.id) === articleId);
                    setNextDisabled(Number(articleId.slice(4)) === mainQuestArticles.length);
                    setPreviousDisabled(Number(articleId.slice(4)) === 1);
                    break;
                case '9945':
                    foundArticle = sideQuestArticles.find(article => String(article?.id) === articleId);
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
            console.log(articleId)
            navigate('/404', { replace: true });
        }
    }, [articleId, navigate]);

  useEffect(() => {
      resetScroll(); 
  }, [articleId, resetScroll]);

    const navigateToArticle = (step: number) => {
        const articleArray = articleId.startsWith('3194') ? mainQuestArticles : sideQuestArticles;
        const currentIndex = articleArray.findIndex(article => article.id === Number(articleId));
        const newIndex = currentIndex + step;

        if (newIndex >= 0 && newIndex < articleArray.length) {
            navigate(`/blog/article?id=${articleArray[newIndex].id}`);
        }
    };

    return (
        <ArticleContainer>
            <div className="center title">
                <img src={article?.primaryImage} alt="primary_image" style={{ minWidth: 'min(100%, 800px)' }}/>
            </div>
            <h1>{article?.title}</h1>
            {article?.content.map((item, index) => {
              return (
                <div key={index}>{item}</div>
              )
            })}
            <div className="footer">
                {!previousDisabled && (
                    <button onClick={() => navigateToArticle(-1)}>
                        <img className="previous arrow" src="/static/arrow.png" alt="previous article" />
                        Previous Article
                    </button>
                )}
                {!nextDisabled && (
                    <button onClick={() => navigateToArticle(1)}>
                        Next Article
                        <img className="next arrow" src="/static/arrow.png" alt="next article" />
                    </button>
                )}
            </div>
        </ArticleContainer>
    );
};

export default Article;

const ArticleContainer = styled.article`
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: ${PALETTE.BACKGROUND};
    font-family: League-Spartan-minor;
    @keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
    animation-duration: 1s;
    animation-fill-mode: both;
    opacity: 0;
    animation-name: fadeIn;

    div {
        width: 100%;
    }

    .flex {
        display: flex;
        gap: 1rem;
    }

    .margin-bottom {
        margin-bottom: 1rem;
    }

    h1 {
        font-size: 2.5em;
        margin-bottom: 20px;
        margin-top: 20px;
        color: ${PALETTE.BLACK};
    }

    h2 {
        font-size: 2em;
        margin-bottom: 10px;
        margin-top: 10px;
        color: ${PALETTE.PRIMARY.DARK};
    }

    h3 {
        font-size: 1.3em;
        width: fit-content;
        color: ${PALETTE.PRIMARY.DEFAULT};
    }

    p {
        font-size: 1.1em;
    }

    a {
        color: ${PALETTE.PRIMARY.DARK};
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }

    img {
        width: fit-content;
        max-width: 100%;
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

    .round {
        border-radius: 50%;
    }

    .center {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .title {
        margin-top: 7vw;
        width: 100%;
    }

    .icon {
        width: 22px;
    }

    .footer {
        margin: 20px auto;
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    .arrow {
        position: relative;
        top: 3px;
        width: 30px;
        height: 1rem;
        transition: transform 1s ease;
        object-fit: cover;
    }

    .previous {
        transform: scaleX(-1);
        transition: transform 1s ease;
    }

    .next {
        transition: transform 1s ease;
    }

    button {
        width: fit-content;
        height: 2.5rem;
        background-color: ${PALETTE.PRIMARY.DEFAULT};
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
