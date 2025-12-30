const asyncHandler = require("express-async-handler");
const { getAllStudents, addNewStudent, getStudentDetail, setStudentStatus, updateStudent } = require("./students-service");

const handleGetAllStudents = asyncHandler(async (req, res) => {
    //write your code
    const { name, className, section, roll } = req.query;
    const students = await getAllStudents({ name, className, section, roll });
    res.json({students});
});

const handleAddStudent = asyncHandler(async (req, res) => {
    //write your code
    //frontend\src\domains\student\components\forms\basic-information.tsx
/*
console.log("alextest handleAddStudent, req.body1: " + req.body.name);
console.log("alextest handleAddStudent, req.body2: " + req.body.email);
console.log("alextest handleAddStudent, req.body3: " + req.body.class);
console.log("alextest handleAddStudent, req.body4: " + req.body.section);
*/
    const payload = {
                    name: req.body.name,
                    email: req.body.email,
                    class: req.body.class,
                    section: req.body.section,
                    ...req.body
                    };

    const message = await addNewStudent(payload);
    res.json(message);
});

const handleUpdateStudent = asyncHandler(async (req, res) => {
    //write your code

});

const handleGetStudentDetail = asyncHandler(async (req, res) => {
    //write your code
    const { id } = req.params;
    const student = await getStudentDetail(id);
    res.json(student);
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
