/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { QuestionList } from './QuestionList';
import { getUnansweredQuestions } from './QuestionsData';
import { Page } from './Page';
import { PageTitle } from './PageTitle';
import { PrimaryButton } from './Styles';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  gettingUnansweredQuestionsAction,
  gotUnansweredQuestionsAction,
  AppState,
} from './Store';

export const HomePage = () => {
  const dispatch = useDispatch();
  const questions = useSelector(
    (state: AppState) => state.questions.unanswered,
  );
  const questionsLoading = useSelector(
    (state: AppState) => state.questions.loading,
  );
  const navigate = useNavigate();
  const handleAskQuestionClick = () => {
    navigate('ask');
  };
  React.useEffect(() => {
    const doGetUnansweredQuestions = async () => {
      dispatch(gettingUnansweredQuestionsAction());
      const unansweredQuestions = await getUnansweredQuestions();
      dispatch(gotUnansweredQuestionsAction(unansweredQuestions));
    };
    doGetUnansweredQuestions();
  }, []);
  return (
    <Page>
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
        `}
      >
        <div>
          <PageTitle>Unanswered Questions</PageTitle>
          <PrimaryButton onClick={handleAskQuestionClick}>
            Ask a question
          </PrimaryButton>
        </div>
        {/* <QuestionList data={getUnansweredQuestions()} /> */}
      </div>
      {questionsLoading ? (
        <div>Loading…</div>
      ) : (
        <QuestionList data={questions || []} />
      )}
    </Page>
  );
};
