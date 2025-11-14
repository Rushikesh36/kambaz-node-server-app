const assignment = {
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 50,
};
const moduleObj = {
    id: "M101",
    name: "Lab 5 Module",
    description: "Module for practicing working with objects",
    course: "CS5610 Web Development",
};
export default function WorkingWithObjects(app) {
    const getAssignment = (req, res) => {
        res.json(assignment);
    };
    const getAssignmentTitle = (req, res) => {
        res.json(assignment.title);
    };
    const setAssignmentTitle = (req, res) => {
        const { newTitle } = req.params;
        assignment.title = newTitle;
        res.json(assignment);
    };
    app.get("/lab5/assignment/title/:newTitle", setAssignmentTitle);
    app.get("/lab5/assignment/title", getAssignmentTitle);

    app.get("/lab5/assignment", getAssignment);

    // Update assignment score
    const setAssignmentScore = (req, res) => {
        const { score } = req.params;
        assignment.score = Number(score);
        res.json(assignment);
    };
    app.get("/lab5/assignment/score/:score", setAssignmentScore);

    // Update assignment completed
    const setAssignmentCompleted = (req, res) => {
        const { completed } = req.params;
        assignment.completed = completed === "true";
        res.json(assignment);
    };
    app.get("/lab5/assignment/completed/:completed", setAssignmentCompleted);

    // Get full module
    const getModule = (req, res) => {
        res.json(moduleObj);
    };
    app.get("/lab5/module", getModule);

    // Get module name
    const getModuleName = (req, res) => {
        res.json({ name: moduleObj.name });
    };
    app.get("/lab5/module/name", getModuleName);

    // Update module name
    const setModuleName = (req, res) => {
        const { name } = req.params;
        moduleObj.name = name;
        res.json(moduleObj);
    };
    app.get("/lab5/module/name/:name", setModuleName);

    // Update module description
    const setModuleDescription = (req, res) => {
        const { description } = req.params;
        moduleObj.description = description;
        res.json(moduleObj);
    };
    app.get("/lab5/module/description/:description", setModuleDescription);
};
