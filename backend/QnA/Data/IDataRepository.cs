﻿using QnA.Data.Models;
using System.Collections.Generic;

namespace QnA.Data
{
    public interface IDataRepository
    {
        IEnumerable<QuestionGetManyResponse> GetQuestions();

        IEnumerable<QuestionGetManyResponse> GetQuestionsBySearch(string search);

        IEnumerable<QuestionGetManyResponse> GetUnansweredQuestions();

        QuestionGetSingleResponse GetQuestion(int questionId);

        bool QuestionExists(int questionId);

        AnswerGetResponse GetAnswer(int answerId);

        QuestionGetSingleResponse PostQuestion(QuestionPostFullRequest question);

        QuestionGetSingleResponse PutQuestion(int questionId, QuestionPutRequest question);

        void DeleteQuestion(int questionId);

        AnswerGetResponse PostAnswer(AnswerPostFullRequest answer);

    }
}
