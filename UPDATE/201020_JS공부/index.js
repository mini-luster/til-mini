// 코모군의 교정코드 

const students = [
    {
      name : "코난",
      grade: [
        {subject: 'maths', score:92},
        {subject: 'english', score:92},
        {subject: 'society', score:78},
        {subject: 'science', score:72},
        {subject: 'korean', score:88}
      ]
    },
    {
      name : "캐스퍼",
      grade: [
        {subject: 'maths', score:87},
        {subject: 'english', score:75},
        {subject: 'society', score:100},
        {subject: 'science', score:72},
        {subject: 'korean', score:98}
      ]
    },
    {
      name : "이든",
      grade: [
        {subject: 'maths', score:100},
        {subject: 'english', score:98},
        {subject: 'society', score:99},
        {subject: 'science', score:22},
        {subject: 'korean', score:0}
      ]
    },
    {
      name : "햄씨",
      grade: [
        {subject: 'maths', score:100},
        {subject: 'english', score:100},
        {subject: 'society', score:87},
        {subject: 'science', score:56},
        {subject: 'korean', score:33}
      ]
    },
    {
      name : "이데",
      grade: [
        {subject: 'maths', score:100},
        {subject: 'english', score:98},
        {subject: 'society', score:22},
        {subject: 'science', score:0},
        {subject: 'korean', score:62}
      ]
    },
    {
      name : "반",
      grade: [
        {subject: 'maths', score:92},
        {subject: 'english', score:74},
        {subject: 'society', score:32},
        {subject: 'science', score:100},
        {subject: 'korean', score:100}
      ]
    }
  ];



//   솔루션 A 

// function solution1() { 
//     const studentsAverageArr = students.map(student => {
//       const gradeArr = student.grade.map(item => item.score);
//       return {
//         name: student.name,
//         averageGrade: gradeArr.reduce((a,b) => a+b, 0) / gradeArr.length
//       }
//     })
//     const winnerGrade = Math.max(...studentsAverageArr.map(student => student.averageGrade))
//     return studentsAverageArr.find(student => student.averageGrade === winnerGrade).name
//   }


//    솔루션 B

function solution2() {
    const subjectTitleArr = students[0].grade.map(_ => _.subject);
    const subjectGradeArr = [];
    subjectTitleArr.forEach(subject => {
      subjectGradeArr.push({
        title: subject,
        grade: (students.map(student => {
          return student.grade.filter(gwamok => gwamok.subject === subject)[0].score
        }).reduce((a,b)=> a+b, 0) / students.length).toFixed(2)
      })
    })
    const sortedSubject = [...subjectGradeArr].sort((a,b) => a.grade - b.grade)
    return `제일 점수대가 낮은 과목은 ${sortedSubject[0].title}이고, 평균점수는 ${sortedSubject[0].grade}이다. 반면 제일 점수대가 높은 과목은 ${sortedSubject[sortedSubject.length-1].title}이고, 평균점수는 ${sortedSubject[sortedSubject.length-1].grade}이다.`
  }