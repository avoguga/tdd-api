import { CreateChallangeSubmission } from "./create-challenge-submission"
import { InMemoryStudentsRepository } from "../../../tests/repositories/in-memory-students-repository"
import { InMemoryChallangesRepository } from "../../../tests/repositories/in-memory-challenges-repository"
import { Challenge } from "../../domain/entities/challenge"
import { Student } from "../../domain/entities/student"


describe('Create challenge submission use case', () =>{
    it('should be able to create a new challenge submission', async () =>{
        const studentsRepository = new InMemoryStudentsRepository()
        const challangesRepository = new InMemoryChallangesRepository()

        const sut  = new CreateChallangeSubmission(
            studentsRepository,
            challangesRepository,
        );

        const student = Student.create({
            name: 'Gugas',
            email: 'gugas@gmail.com'
        })

        const challenge = Challenge.create({
            title: 'Challenge 01',
            instructionUrl: 'http://example.com'
        })

        studentsRepository.items.push(student);
        challangesRepository.items.push(challenge);

        const responde = await sut.execute({
            studentId: student.id,
            challengeId: challenge.id
        })

        expect(responde).toBeTruthy()
    })
})