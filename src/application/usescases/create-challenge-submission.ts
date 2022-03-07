import { Submission } from "../../domain/entities/submission"

type CreateChallangeSubmissionRequest = {
    studentId: string;
    challengeId: string;
}

export class CreateChallangeSubmission{
    execute({studentId, challengeId}: CreateChallangeSubmissionRequest){
        const submission = Submission.create({
            studentId,
            challengeId,
        })

        return submission;
    }
}