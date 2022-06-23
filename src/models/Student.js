class Student{

    #id;
    #studentName;
    #score;
    #school;

    constructor(){}

    setData(id, studentName, score, school){
        this.#id = id;
        this.#studentName = studentName;
        this.#score = score;
        this.#school = school;
    }

    /* setters and getters */


}

export default Student;