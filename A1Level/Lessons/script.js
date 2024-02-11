//  https://www.w3schools.com/howto/howto_css_modal_images.asp
var modal = document.getElementById("myModal");

var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}



var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal.style.display = "none";
}

function checkAnswers() {
  var form = document.getElementById('testForm');
  var selects = form.getElementsByTagName('select');
  var resultsDiv = document.getElementById('results');
  var correctAnswers = ['a', 'e', 'd', 'b', 'c', 'g', 'f'];
  var incorrectCount = 0;

  resultsDiv.innerHTML = '';

  for (var i = 0; i < selects.length; i++) {
      var userAnswer = selects[i].value;
      var listItem = selects[i].parentNode;
      var index = i + 1;

      if (userAnswer === "--") {
          alert("Please fill in all fields before submitting.");
          return;
      }

      if (userAnswer === correctAnswers[i]) {
          listItem.className = 'correct';
      } else {
          listItem.className = 'incorrect';
          resultsDiv.innerHTML += 'Question ' + index + ': Correct answer is ' + correctAnswers[i] + '<br>';
          incorrectCount++;
      }
  }

  if (incorrectCount === 0) {
      resultsDiv.innerHTML = 'All answers are correct!';
  }
}


function checkAnswers1() {
  var form = document.getElementById('testForm1');
  var selects = form.getElementsByTagName('select');
  var resultsDiv = document.getElementById('results1');
  var correctAnswers = ['c', 'b', 'e', 'g', 'f', 'a', 'd'];
  var incorrectCount = 0;

  resultsDiv.innerHTML = ''; 

  for (var i = 0; i < selects.length; i++) {
      var userAnswer = selects[i].value;
      var listItem = selects[i].parentNode;
      var index = i + 1;

      if (userAnswer === "--") {
          alert("Please fill in all fields before submitting.");
          return;
      }

      if (userAnswer === correctAnswers[i]) {
          listItem.className = 'correct';
      } else {
          listItem.className = 'incorrect';
          resultsDiv.innerHTML += 'Question ' + index + ': Correct answer is ' + correctAnswers[i] + '<br>';
          incorrectCount++;
      }
  }

  if (incorrectCount === 0) {
      resultsDiv.innerHTML = 'All answers are correct!';
  }
}


function submitForm2() {
  const answers = {
      "profesor": "M",
      "pero": "N",
      "namesti": "N",
      "ucitel": "M",
      "student": "M",
      "cizinka": "F",
      "studentka": "F",
      "muz": "M",
      "zena": "F",
      "otec": "M"
  };

  const form = document.getElementById('testForm2');
  const formData = new FormData(form);
  let wrongAnswers = [];

  formData.forEach((value, key) => {
      if (value.trim() === '') {
          isFormValid = false;
      }
  });

  if (!isFormValid) {
      alert('Please fill in all fields before submitting.');
      return;
  }


  formData.forEach((value, key) => {
      const answer = answers[key];
      const inputField = document.getElementById(key);
      if (value.toUpperCase() === answer) {
          inputField.classList.add('correct');
      } else {
          inputField.classList.add('incorrect');
          wrongAnswers.push(key);
      }
  });

  const resultsDiv = document.getElementById('results2');
  if (wrongAnswers.length > 0) {
      resultsDiv.innerHTML = `Incorrect answers: ${wrongAnswers.join(', ')}`;
  } else {
      resultsDiv.innerHTML = 'All answers are correct!';
  }
}


function submitForm3() {
  var form = document.getElementById('testForm3');
  var inputs = form.getElementsByTagName('input');
  var wrongAnswers = [];

  for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].value.trim() === '') {
          alert('Please fill in all fields before submitting.');
          return;
      }
  }

  var correctAnswers = ['mladá', 'vysoký', 'velké', 'černé', 'starý', 'nová', 'krásná'];

  for (var i = 0; i < inputs.length - 1; i++) {
      var userAnswer = inputs[i].value.trim();
      if (userAnswer.toLowerCase() === correctAnswers[i]) {
          inputs[i].classList.add('correct');
      } else {
          inputs[i].classList.add('incorrect');
          wrongAnswers.push((i + 1) + '. ' + correctAnswers[i]);
      }
  }

  var resultDiv = document.getElementById('result3');
  if (wrongAnswers.length > 0) {
      resultDiv.innerHTML = 'Wrong answers: ' + wrongAnswers.join(', ');
  } else {
      resultDiv.innerHTML = 'All answers are correct!';
  }
}


function submitForm8() {
  var resultDiv = document.getElementById('result8');
  resultDiv.innerHTML = 'Ne, ta kočka není bílá, je černá.\nNe, ta váza není zelená, je oranžová. \nNe, ta podlaha není černá, je hnědá. \nNe, to okno není špinavé, je čisté. \nNe, ta skříň není zavřená, je otevřená. \nNe, to zrcadlo není vpravo, je vlevo. \nNe, ta lampa není žlutá, je bílá/oranžová.';
}

function submitForm9() {
  var resultDiv = document.getElementById('result9');
  resultDiv.innerHTML = 'Babička je stará. Dědeček je mladý. Matka je hezká. Kamarádka je ošklivá. Student je velký. Stůl je nový. Květina je jarní. Sestra je krásná. Kočka je špinavá. Židle je černá.'
}

function submitForm10() {
  var resultDiv = document.getElementById('result10');
  resultDiv.innerHTML = 'Bratr, otec, dědeček, babička, syn, teta. RODINA.'
}

function submitForm20() {
  var resultDiv = document.getElementById('result20');
  resultDiv.innerHTML = '1) Mladý kluk, který má hnědé vlasy, pije mléko. 2) Děti nesou těžké tašky. 3) Hladový kluk jí špagety a pije vodu..';
}

function submitForm4() {
  var form = document.getElementById('testForm4');
  var inputs = form.getElementsByTagName('input');
  var wrongAnswers = [];

  for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].value.trim() === '') {
          alert('Please fill in all fields before submitting.');
          return;
      }
  }

  var correctAnswers = ['můj', 'jeho', 'jejich', 'její', 'naše', 'tvoje', 'moje', 'váš', 'náš'];

  for (var i = 0; i < inputs.length; i++) {
      var userAnswer = inputs[i].value.trim();
      if (userAnswer.toLowerCase() === correctAnswers[i]) {
          inputs[i].classList.add('correct');
      } else {
          inputs[i].classList.add('incorrect');
          wrongAnswers.push((i + 1) + '. ' + correctAnswers[i]);
      }
  }

  var resultDiv = document.getElementById('result4');
  if (wrongAnswers.length > 0) {
      resultDiv.innerHTML = 'Wrong answers: ' + wrongAnswers.join(', ');
  } else {
      resultDiv.innerHTML = 'All answers are correct!';
  }
}

function submitForm5() {
  var form = document.getElementById('testForm5');
  var inputs = form.getElementsByTagName('input');
  var wrongAnswers = [];

  for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].value.trim() === '') {
          alert('Please fill in all fields before submitting.');
          return;
      }
  }

  var correctAnswers = ['moje', 'její', 'náš', 'vaše', 'jeho', 'jejich', 'tvůj', 'jejich'];

  for (var i = 0; i < inputs.length; i++) {
      var userAnswer = inputs[i].value.trim();
      if (userAnswer.toLowerCase() === correctAnswers[i]) {
          inputs[i].classList.add('correct');
      } else {
          inputs[i].classList.add('incorrect');
          wrongAnswers.push((i + 1) + '. ' + correctAnswers[i]);
      }
  }

  var resultDiv = document.getElementById('result5');
  if (wrongAnswers.length > 0) {
      resultDiv.innerHTML = 'Wrong answers: ' + wrongAnswers.join(', ');
  } else {
      resultDiv.innerHTML = 'All answers are correct!';
  }
}


function submitForm6() {
  var form = document.getElementById('testForm6');
  var inputs = form.getElementsByTagName('input');
  var wrongAnswers = [];

  for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].value.trim() === '') {
          alert('Please fill in all fields before submitting.');
          return;
      }
  }

  var correctAnswers = ['máme', 'máte', 'mají', 'máš', 'máš', 'mám', 'máte', 'máme', 'máš'];

  for (var i = 0; i < inputs.length; i++) {
      var userAnswer = inputs[i].value.trim();
      if (userAnswer.toLowerCase() === correctAnswers[i]) {
          inputs[i].classList.add('correct');
      } else {
          inputs[i].classList.add('incorrect');
          wrongAnswers.push((i + 1) + '. ' + correctAnswers[i]);
      }
  }

  var resultDiv = document.getElementById('result6');
  if (wrongAnswers.length > 0) {
      resultDiv.innerHTML = 'Wrong answers: ' + wrongAnswers.join(', ');
  } else {
      resultDiv.innerHTML = 'All answers are correct!';
  }
}


function submitForm7() {
  var form = document.getElementById('testForm7');
  var inputs = form.getElementsByTagName('input');
  var wrongAnswers = [];

  for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].value.trim() === '') {
          alert('Please fill in all fields before submitting.');
          return;
      }
  }

  var correctAnswers = ['nemá', 'nemáme', 'nemáte', 'nemáš', 'nemají', 'nemá', 'nemá', 'nemám'];

  for (var i = 0; i < inputs.length; i++) {
      var userAnswer = inputs[i].value.trim();
      if (userAnswer.toLowerCase() === correctAnswers[i]) {
          inputs[i].classList.add('correct');
      } else {
          inputs[i].classList.add('incorrect');
          wrongAnswers.push((i + 1) + '. ' + correctAnswers[i]);
      }
  }

  var resultDiv = document.getElementById('result7');
  if (wrongAnswers.length > 0) {
      resultDiv.innerHTML = 'Wrong answers: ' + wrongAnswers.join(', ');
  } else {
      resultDiv.innerHTML = 'All answers are correct!';
  }
}

function submitForm11() {
  var form = document.getElementById('testForm11');
  var inputs = form.getElementsByTagName('input');
  var wrongAnswers = [];

  for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].value.trim() === '') {
          alert('Please fill in all fields before submitting.');
          return;
      }
  }

  var correctAnswers = ['Moje', 'velká', 'malá', 'pes', 'maminka', 'tatínek', 'můj', 'bratr', 'mám', 'kde', 'náš strýc', 'sestřenice', 'máma', 'má', 'nemám', 'mám', 'babičky', 'práce', 'nemá', 'čas'];

  for (var i = 0; i < inputs.length; i++) {
      var userAnswer = inputs[i].value.trim();
      if (userAnswer.toLowerCase() === correctAnswers[i].toLowerCase()) {
          inputs[i].classList.add('correct');
      } else {
          inputs[i].classList.add('incorrect');
          wrongAnswers.push((i + 1) + '. ' + correctAnswers[i]);
      }
  }

  var resultDiv = document.getElementById('result11');
  if (wrongAnswers.length > 0) {
      resultDiv.innerHTML = 'Wrong answers: ' + wrongAnswers.join(', ');
  } else {
      resultDiv.innerHTML = 'All answers are correct!';
  }
}

function submitForm12() {
  const answers = {
     'q1': 'b',
     'q2': 'a',
     'q3': 'c',
     'q4': 'c',
     'q5': 'b',
     'q6': 'c',
     'q7': 'd'
 };

 const resultsDiv = document.getElementById('result12');
 resultsDiv.innerHTML = '';

 let score = 0;

 for (let i = 1; i <= 7; i++) {
     const questionName = 'q' + i;
     const selectedAnswer = document.querySelector('input[name="' + questionName + '"]:checked');

     if (!selectedAnswer) {
         resultsDiv.innerHTML += 'You missed question ' + i + '.<br>';
     } else {
         const userAnswer = selectedAnswer.value;

         if (userAnswer === answers[questionName]) {
             score++;
             selectedAnswer.parentNode.classList.add('correct');
         } else {
             selectedAnswer.parentNode.classList.add('incorrect');
         }
     }
 }

 resultsDiv.innerHTML += 'Your score is ' + score + ' out of 7.';

}

function submitTestForm() {
  var form = document.getElementById('TestForm');
  var inputs = form.getElementsByTagName('input');
  var wrongAnswers = [];

  for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].value.trim() === '') {
          alert('Please fill in all fields before submitting.');
          return;
      }
  }

  var correctAnswers = ['manžel', 'manželka', 'dědeček', 'babička', 'sestřenice', 'bratranec', 'sourozence', 'sestra', 'bratr', 'manžel', 'strýc', 'manželka', 'teta', 'maminka', 'manžel', 'tatínek', 'syn', 'dcera', 'sestra', 'sourozenec', 'bratr'];

  for (var i = 0; i < inputs.length; i++) {
      var userAnswer = inputs[i].value.trim();
      if (userAnswer.toLowerCase() === correctAnswers[i]) {
          inputs[i].classList.add('correct');
      } else {
          inputs[i].classList.add('incorrect');
          wrongAnswers.push((i + 1) + '. ' + correctAnswers[i]);
      }
  }

  

  var resultDiv = document.getElementById('TestResult');
  if (wrongAnswers.length > 0) {
      resultDiv.innerHTML = 'Wrong answers: ' + wrongAnswers.join(', ');
  } else {
      resultDiv.innerHTML = 'All answers are correct!';
  }
}

function gradeQuiz() {
  var answers = ["NE", "NE", "ANO", "NE", "NE", "ANO", "NE", "NE", "NE", "NE"];
  var score = 0;
  var results = document.getElementById("results");
  var form = document.getElementById("quizForm");
  var formData = new FormData(form);
  var i = 0;

  for (var pair of formData.entries()) {
    if (pair[1] === answers[i]) {
        score++;
        form.elements["q" + (i + 1)].parentNode.classList.remove("incorrect");
        form.elements["q" + (i + 1)].parentNode.classList.add("correct");
    } else {
        form.elements["q" + (i + 1)].parentNode.classList.remove("correct");
        form.elements["q" + (i + 1)].parentNode.classList.add("incorrect");
    }
    i++;
}

  results.innerHTML = "Your score: " + score + "/10<br>";

  for (var j = 0; j < answers.length; j++) {
      results.innerHTML += "Question " + (j + 1) + ": " + answers[j] + "<br>";
  }
}

function quiz() {
    var answers = ["NE", "NE", "ANO", "NE", "ANO"];
    var score = 0;
    var results = document.getElementById("quiz");
    var form = document.getElementById("quiz1");
    var formData = new FormData(form);
    var i = 0;
  
    for (var pair of formData.entries()) {
        // Convert both the answer and the value to uppercase for comparison
        if (pair[1].toUpperCase() === answers[i].toUpperCase()) {
            score++;
            form.elements["q" + (i + 1)].parentNode.classList.remove("incorrect");
            form.elements["q" + (i + 1)].parentNode.classList.add("correct");
        } else {
            form.elements["q" + (i + 1)].parentNode.classList.remove("correct");
            form.elements["q" + (i + 1)].parentNode.classList.add("incorrect");
        }
        i++;
    }
  
    results.innerHTML = "Your score: " + score + "/5<br>";
  
    for (var j = 0; j < answers.length; j++) {
        results.innerHTML += "Question " + (j + 1) + ": " + answers[j] + "<br>";
    }
}


function checkAnswers() {
  var form = document.getElementById('testForm');
  var inputs = form.getElementsByTagName('input');
  var wrongAnswers = [];

  for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].value.trim() === '') {
          alert('Please fill in all fields before submitting.');
          return;
      }
  }

  var correctAnswers = ['Vstávám', 'Oblékám', 'Obědvá', 'Dělá', 'Posloucháš', 'Hlídáme', 'Neběhám', 'Odpočívám', 'Děláte', 'Poslouchám', 'Nezpívám', 'Čekáte', 'Znáte', 'Neznám'];

  for (var i = 0; i < inputs.length; i++) {
      var userAnswer = inputs[i].value.trim();
      if (userAnswer.toLowerCase() === correctAnswers[i].toLowerCase()) {
          inputs[i].classList.add('correct');
      } else {
          inputs[i].classList.add('incorrect');
          wrongAnswers.push((i + 1) + '. ' + correctAnswers[i]);
      }
  }

  var resultDiv = document.getElementById('testResult');
  if (wrongAnswers.length > 0) {
      resultDiv.innerHTML = 'Wrong answers: ' + wrongAnswers.join(', ');
  } else {
      resultDiv.innerHTML = 'All answers are correct!';
  }
}

function submitAnswers() {
  var table = document.getElementById('testTable');
  var inputs = table.getElementsByTagName('input');
  var correctAnswers = [
      'kupuju', 'dělám', 'vidím', 'říkám', 'kontroluju', 'mluvím',
      'kupuješ', 'děláš', 'vidíš', 'říkáš', 'kontroluješ', 'mluvíš',
      'kupuje', 'dělá', 'vidí', 'říká', 'kontroluje', 'mluví',
      'kupujeme', 'děláme', 'vidíme', 'říkáme', 'kontrolujeme', 'mluvíme',
      'kupujete', 'děláte', 'vidíte', 'říkáte', 'kontrolujete', 'mluvíte',
      'kupují', 'dělají', 'vidí', 'říkají', 'kontrolují', 'mluví'
  ];

  for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].value.trim().toLowerCase() === correctAnswers[i]) {
          inputs[i].classList.add('correct');
          inputs[i].classList.remove('incorrect');
      } else {
          inputs[i].classList.add('incorrect');
          inputs[i].classList.remove('correct');
      }
  }
}

function submitForm15() {
  var form = document.getElementById('testForm15');
  var inputs = form.getElementsByTagName('input');
  var wrongAnswers = [];

  for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].value.trim() === '') {
          alert('Please fill in all fields before submitting.');
          return;
      }
  }

  var correctAnswers = ['darujeme', 'cestují', 'plánuju', 'netancujete', 'stanujeme', 'sportuješ', 'maluje', 'kupuje', 'telefonujeme', 'opakujete', 'posiluješ', 'fotografuju'];

  for (var i = 0; i < inputs.length; i++) {
      var userAnswer = inputs[i].value.trim();
      if (userAnswer.toLowerCase() === correctAnswers[i]) {
          inputs[i].classList.add('correct');
      } else {
          inputs[i].classList.add('incorrect');
          wrongAnswers.push((i + 1) + '. ' + correctAnswers[i]);
      }
  }

  var resultDiv = document.getElementById('result15');
  if (wrongAnswers.length > 0) {
      resultDiv.innerHTML = 'Wrong answers: ' + wrongAnswers.join(', ');
  } else {
      resultDiv.innerHTML = 'All answers are correct!';
  }
}


function submitForm16() {
  var resultDiv = document.getElementById('result16');
  resultDiv.innerHTML = '1) Dívají se na televizní zprávy každý večer. 2) Televizní zprávy začínají v osm hodin. 3) Tatínka nejvíce zajímá politika. 4) Tatínek komentuje televizní noviny. 5) Rodina se dívá na televizi a pije čaj.';
}

function submitForm17() {
  var form = document.getElementById('testForm17');
  var inputs = form.getElementsByTagName('input');
  var wrongAnswers = [];

  for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].value.trim() === '') {
          alert('Please fill in all fields before submitting.');
          return;
      }
  }

  var correctAnswers = ['je', 'hezké', 'začínají', 'bydlíme', 'trvá', 'kupujeme', 'sedíme', 'máme', 'máme', 'dobrou náladu', 'známe', 'pomáháme', 'chodíme', 'sbíráme', 'koupeme', 'veselé'];

  for (var i = 0; i < inputs.length; i++) {
      var userAnswer = inputs[i].value.trim();
      if (userAnswer.toLowerCase() === correctAnswers[i]) {
          inputs[i].classList.add('correct');
      } else {
          inputs[i].classList.add('incorrect');
          wrongAnswers.push((i + 1) + '. ' + correctAnswers[i]);
      }
  }

  var resultDiv = document.getElementById('result17');
  if (wrongAnswers.length > 0) {
      resultDiv.innerHTML = 'Wrong answers: ' + wrongAnswers.join(', ');
  } else {
      resultDiv.innerHTML = 'All answers are correct!';
  }
}


function submitForm19() {
  var form = document.getElementById('grammarTestForm');
  var inputs = form.getElementsByTagName('input');
  var answers = ['nepije', 'žiju', 'neseš', 'spíme', 'nejíte', 'řeknu', 'se bojíš', 'stojí', 'čtou', 'berete'];
  var resultsDiv = document.getElementById('results');
  var wrongAnswers = [];

  for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].value.trim() === '') {
          alert('Please fill in all fields before submitting.');
          return;
      }
  }

  for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].value.trim() !== answers[i]) {
          inputs[i].classList.add('incorrect');
          wrongAnswers.push('Question ' + (i + 1) + ': ' + inputs[i].value.trim() + ' (Correct answer: ' + answers[i] + ')');
      } else {
          inputs[i].classList.remove('incorrect');
          inputs[i].classList.add('correct');
      }
  }

  var resultDiv = document.getElementById('results');
  if (wrongAnswers.length > 0) {
      resultDiv.innerHTML = 'Wrong answers: ' + wrongAnswers.join(', ');
  } else {
      resultDiv.innerHTML = 'All answers are correct!';
  }
}

function submitForm23() {
    var resultDiv = document.getElementById('result23');
    resultDiv.innerHTML = '1) Náš starý dědeček si neholí nohy, protože je muž. 2) Potřebuju mýdlo a ručník, protože se sprchuju. 3) Chceme koupit holící strojek, protože je to dobrý dárek. 4) O víkendu neodpočívají home. 5) Uklízím dům každý den.';
  }

  function submitForm24() {
    var resultDiv = document.getElementById('result24');
    var text = "Jan:  Jak vypadá tvůj den, Marie? Vypadáš špatně." + "<br />" + "Marie: Máš pravdu. Každý den mám hodně práce. Odpočívám jenom o víkendu." + "<br />" + "Jan: Říkáš, že pracuješ každý den?" + "<br />" + "Marie: Ano, učím se a pracuju každý den. Proto mám jeden den volno." + "<br />" + "Jan: Aha. Jaký je tvůj typický pracovní den?"  + "<br />" + "Marie: Vstávám v 6:30 ráno. Potom si myju obličej, snídám, oblékám se a líčím se. Potřebuju jít v 7:30, protože nesmím být pozdě." + "<br />" + "Jan: Pracuješ a učíš se?"  + "<br />" + "Marie: Ano, učím se dopoledne a potom pracuju do 6 večer."   + "<br />" + "Jan: Asi je to těžké.";
    resultDiv.innerHTML = text;
  }

function submitForm25() {
    var resultDiv = document.getElementById('result25');
    var text = "1) — c)" + "<br />" + "2) — b)";
    resultDiv.innerHTML = text;
  }

  function submitForm26() {
    var resultDiv = document.getElementById('result26');
    var text = "1) Eva vstává v 10 hodin, ale o víkendu vstává až ve 12 hodin." + "<br />" + "2) Petr vstává v 6 hodin ráno." + "<br />" + "3) Eva" + "<br />" + "4) Petr je ve škole odpoledne a někdy i večer." + "<br />" + "5) Odpoledne je ve škole, kde pracuje."  + "<br />" + "6) Petr" + "<br />" + "7) Eva"  + "<br />" + "8) Petr"   + "<br />" + "9) Eva" + "<br />" + "10) Eva večeří v 9 hodin, ale Petr večeří v 7 hodin večer.";
    resultDiv.innerHTML = text;
  }

  

function submitForm21() {
  var form = document.getElementById('grammarTestForm1');
  var inputs = form.getElementsByTagName('input');
  var answers = ['jdeme', 'jde', 'jdou', 'jdeš', 'jdu', 'jdete', 'jdete'];
  var resultsDiv = document.getElementById('results1');
  var wrongAnswers = [];

  for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].value.trim() === '') {
          alert('Please fill in all fields before submitting.');
          return;
      }
  }

  for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].value.trim() !== answers[i]) {
          inputs[i].classList.add('incorrect');
          wrongAnswers.push('Question ' + (i + 1) + ': ' + inputs[i].value.trim() + ' (Correct answer: ' + answers[i] + ')');
      } else {
          inputs[i].classList.remove('incorrect');
          inputs[i].classList.add('correct');
      }
  }

  var resultDiv = document.getElementById('results1');
  if (wrongAnswers.length > 0) {
      resultDiv.innerHTML = 'Wrong answers: ' + wrongAnswers.join(', ');
  } else {
      resultDiv.innerHTML = 'All answers are correct!';
  }
}

function submitForm22() {
  var form = document.getElementById('testForm22');
  var inputs = form.getElementsByTagName('input');
  var wrongAnswers = [];

  for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].value.trim() === '') {
          alert('Please fill in all fields before submitting.');
          return;
      }
  }

  var correctAnswers = ['chodím', 'říkají', 'není', 'jezdíme', 'přijdu', 'hraju', 'jsou', 'jedeme', 'leze'];

  for (var i = 0; i < inputs.length; i++) {
      var userAnswer = inputs[i].value.trim();
      if (userAnswer.toLowerCase() === correctAnswers[i].toLowerCase()) {
          inputs[i].classList.add('correct');
      } else {
          inputs[i].classList.add('incorrect');
          wrongAnswers.push((i + 1) + '. ' + correctAnswers[i]);
      }
  }

  var resultDiv = document.getElementById('result22');
  if (wrongAnswers.length > 0) {
      resultDiv.innerHTML = 'Wrong answers: ' + wrongAnswers.join(', ');
  } else {
      resultDiv.innerHTML = 'All answers are correct!';
  }
}