const express = require('express');
const mongoose = require('mongoose');

const quizSchema = require("../model/quizSchema");
const quizRoute = express.Router();

quizRoute.post("/createQuiz", (req, res) => {
    quizSchema.create(req.body, (err, data) => {
        if (err) {
            return err;
        }
        else {
            const { id, testName, testCode, testStartTime, testEndTime, resultsTime, users, question, option1, option2, option3, option4, answer } = req.body;

            try {
                const quizDetails = new quizSchema({
                    instructorID: instructorID,
                    testName: testName,
                    testCode: testCode,
                    testStartTime: new Date(testStartTime),
                    testEndTime: new Date(testEndTime),
                    resultsTime: new Date(resultsTime),
                    users: users,
                    question: question,
                    option1: option1,
                    option2: option2,
                    option3: option3,
                    option4: option4,
                    answer: answer

                });
                res.json(quizDetails);
            }
            catch {

            }
        }
    })
})

quizRoute.get("/getQuiz", (req, res) => {
    quizSchema.find((err, data) => {
        if (err) {
            return err;
        }
        else {
            res.json(data)
        }
    })
})

quizRoute.route("/updateQuiz/:id")
    .get((req, res) => {
        quizSchema.findById(mongoose.Types.ObjectId(req.params.id), (err, data) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            } else {
                res.json(data);
            }
        });
    })
    .put((req, res) => {
        const {
            instructorID,
            testName,
            testCode,
            testStartTime,
            testEndTime,
            resultsTime,
            users,
            question,
            option1,
            option2,
            option3,
            option4,
            answer,
        } = req.body;

        const updatedQuiz = {
            instructorID,
            testName,
            testCode,
            testStartTime: new Date(testStartTime),
            testEndTime: new Date(testEndTime),
            resultsTime: new Date(resultsTime),
            users,
            question,
            option1,
            option2,
            option3,
            option4,
            answer,
        };
        console.log(updatedQuiz)
        quizSchema.findByIdAndUpdate(
            mongoose.Types.ObjectId(req.params.id),
            { $set: updatedQuiz },
            { new: true }, // Return the updated document
            (err, data) => {
                if (err) {
                    return res.status(500).json({ error: err.message });
                } else {
                    res.json(data);
                    console.log(res.data)
                }
            }
        );
    });



quizRoute.delete("/deleteQuiz/:id", (req, res) => {
    quizSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id), (err, data) => {
        if (err) {
            return err;
        }
        else {
            return res.json(data);
        }
    })
})

module.exports = quizRoute;