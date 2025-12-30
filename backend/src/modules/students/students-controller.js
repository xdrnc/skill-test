const asyncHandler = require("express-async-handler");
const { getAllStudents, addNewStudent, getStudentDetail, setStudentStatus, updateStudent } = require("./students-service");

const handleGetAllStudents = asyncHandler(async (req, res) => {
    //write your code

});

const handleAddStudent = asyncHandler(async (req, res) => {
    //write your code
    /*
        const payload = req.body;
    const message = await addNewStudent(payload);
    res.json("alextest addstudent: " + message);
    ApiError: Unable to add student
    */
//    const payload = req.body;
    const payload = {
                    name: `${req.body.firstName} ${req.body.lastName}`,
                    email: req.body.email,
                    class: req.body.grade,
                    section: req.body.section,
                    ...req.body
                    };

console.log("alextest, payload while adding student: " + payload);
    const message = await addNewStudent(payload);
        console.log("alextest, message: " + message);
    res.json(message);
});

const handleUpdateStudent = asyncHandler(async (req, res) => {
    //write your code

});

const handleGetStudentDetail = asyncHandler(async (req, res) => {
    //write your code

});

const handleStudentStatus = asyncHandler(async (req, res) => {
    //write your code

});

module.exports = {
    handleGetAllStudents,
    handleGetStudentDetail,
    handleAddStudent,
    handleStudentStatus,
    handleUpdateStudent,
};
