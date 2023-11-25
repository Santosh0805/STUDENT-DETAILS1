
function Student(name, roll_no, _class, section, marks_of_5_subjects) {
    this.name = name;
    this.roll_no = roll_no;
    this.class = _class;
    this.section = section;
    this.marks_of_5_subjects = marks_of_5_subjects;

    this.printTop3Subjects = function () {
        const subjects = Object.keys(this.marks_of_5_subjects);
        subjects.sort((a, b) => this.marks_of_5_subjects[b] - this.marks_of_5_subjects[a]);
        console.log("Top 3 Subjects:");
        for (let i = 0; i < 3; i++) {
            console.log(subjects[i]);
        }
    };

    this.printReportCard = function () {
        console.log("+--------------------+");
        console.log("|     REPORT CARD    |");
        console.log("+--------------------+");
        console.log(`| Name     - ${this.name.padEnd(18)}|`);
        console.log(`| Roll no. - ${this.roll_no.toString().padEnd(5)} |`);
        console.log(`| Class    - ${this.class.padEnd(10)} |`);
        console.log(`| Section  - ${this.section.padEnd(10)} |`);
        for (const subject in this.marks_of_5_subjects) {
            console.log(`| ${subject.padEnd(8)} - ${this.marks_of_5_subjects[subject].toString().padEnd(4)} |`);
        }
        const totalMarks = Object.values(this.marks_of_5_subjects).reduce((acc, cur) => acc + cur, 0);
        const percentage = (totalMarks / (Object.keys(this.marks_of_5_subjects).length * 100)) * 100;
        console.log(`| Percentage - ${percentage.toFixed(1)} %  |`);
        console.log("+--------------------+");
    };
}
const studentDetails = {
    name: "Santosh Kumar",
    roll_no: 8,
    class: "10",
    section: "A",
    marks_of_5_subjects: {
        science: 70,
        maths: 55,
        social_science: 60,
        english: 85,
        hindi: 98
    }
};

const BillGets = new Student(
    studentDetails.name,
    studentDetails.roll_no,
    studentDetails.class,
    studentDetails.section,
    studentDetails.marks_of_5_subjects
);

BillGets.printTop3Subjects();
BillGets.printReportCard();