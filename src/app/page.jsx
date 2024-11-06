import Quiz from "./component/quiz";

const Home = () => {
  const quizQuestions = [
    {
      answer:"114",
      question:"1: Quran Pak me total kitni surtean hain?",
      option:["112","114","140","130"]
      },
      { 
          answer:"23 saal",
          question:"2: Quran Pak kitny arsay me mukamal nazil hoa?",
          option:["35 saal","25 saal","23 saal","15 saal"]
      },
      {
          answer:"Usman Bin Talha",
          question:"3: Fatahe Makkah k bad Khana Kaba ki chabi ka muhafiz kon tha?",
          option:["Usman Bin Talha","Abbu Suffiyan","Abbas","Koi bhi nahi"]
      },
      {
          answer:"86",
          question:"4: Quran Pak me makki surton ki tadad kya hy?",
          option:["84","82","86","88"]
      },
      {
          answr:"3",
          question:"5: Ek mard ko kafan ki kitni chadron me lapeta jata hy?",
          option:["5","4","2","3"]
      },
      {
          answer:"4",
          question:"6: Hazrat Muhammad S.A.W ne kitni bar umrah ada kiya?",
          option:["1","2","3","4"]
      },
      {
          answer:"4",
          question:"7: Naam Muhammad Quran Pak me kitni bar aya hy?",
          option:["2","3","4","5"]
      },
      {
          answer:"Surah-e-sauf",
          question:"8: Hazrat Muhammad ko Ahmed naam se kis surah me pukara gaya hy?",
          option:["Surah-e-Yaseen","Surah-e-Muzamil","Surah-e-Muhammad","Surah-e-sauf"]
      },
      {
          answer:"30 din",
          question:"9: Ghazwah-e-Khandaq me kitny din tak Madinay ka muhasrah kiya gaya tha?",
          option:["15 din","45 din","30 din","60 din"]
      },
      {
          answer:"Hazrat Luot A.S",
          question:"10: Kis Pegamber ki Qoum phataron ki barish se tabah hoi the?",
          option:["Hazrat Yaqoob A.S","Hazrat Shoaib A.S","Hazrat Hood A.S","Hazrat Luot A.S"]
      }
  ];

  return (
    <div>
      <div className="bg">
      <h1>Islamic Quiz App</h1>
      <Quiz question={quizQuestions} />
      </div>
    </div>
  );
};

export default Home;