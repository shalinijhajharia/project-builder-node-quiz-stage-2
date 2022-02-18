const questions = [
    {
      id: 1,
      question: "Look at this series: 12, 11, 13, 12, 14, 13, … What number should come next?",
    },
    {
      id: 2,
      question: "Which word does NOT belong with the others?",
    },
    {
      id: 3,
      question: " Paw : Cat :: Hoof : ?",
    },
    {
      id: 4,
      question: "Look at this series: 7, 10, 8, 11, 9, 12, … What number should come next?",
    },
    {
      id: 5,
      question:
        "In a code language if POSE is coded as OQNPRTDF, then the word TYPE will be coded as",
    },
  ];
  
  const options = [
    {
      id: 1,
      optionA: "10",
      optionB: "16",
      optionC: "13",
      optionD: "15",
    },
    {
      id: 2,
      optionA: "index",
      optionB: "glossary",
      optionC: "chapter",
      optionD: "books",
    },
    {
      id: 3,
      optionA: "Lamb",
      optionB: "Horse",
      optionC: "Elephant",
      optionD: "Tiger",
    },
    {
      id: 4,
      optionA: "7",
      optionB: "12",
      optionC: "10",
      optionD: "13",
    },
    {
      id: 5,
      optionA: "SUXZOQFD",
      optionB: "SUXZQOFD",
      optionC: "SUXZOQDF",
      optionD: "SUXZQODE",
    },
  ];
  
  const answers = [
    { id: 1, answer: "15" },
    { id: 2, answer: "books" },
    { id: 3, answer: "Horse" },
    { id: 4, answer: "10" },
 
    { id: 5, answer: "SUXZQODE" },
  ];
  
  module.exports = { questions, options, answers };