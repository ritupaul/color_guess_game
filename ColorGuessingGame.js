import React, { useState, useEffect } from 'react';

const getRandomColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const generateRandomHexCodes = (correctColor) => {
  const hexCodes = [correctColor];
  while (hexCodes.length < 3) {
    const randomCode = getRandomColor();
    if (!hexCodes.includes(randomCode)) {
      hexCodes.push(randomCode);
    }
  }
  return shuffleArray(hexCodes); // shuffle the array to randomize button order
};

const shuffleArray = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const ColorGuessingGame = () => {
  const [currentColor, setCurrentColor] = useState(getRandomColor());
  const [buttonHexCodes, setButtonHexCodes] = useState(generateRandomHexCodes(currentColor));
  const [userChoice, setUserChoice] = useState(null);

  useEffect(() => {
    setCurrentColor(getRandomColor());
    setButtonHexCodes(generateRandomHexCodes(currentColor));
  }, [userChoice]);

  const handleButtonClick = (hexCode) => {
    if (hexCode === currentColor) {
      setUserChoice('Correct!');
    } else {
      setUserChoice('Incorrect');
    }
  };

  return (
    <div>
      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: currentColor,
        }}
      />
      {buttonHexCodes.map((hexCode, index) => (
        <button
          key={index}
          style={{ backgroundColor: hexCode }}
          onClick={() => handleButtonClick(hexCode)}
        >
          {hexCode}
        </button>
      ))}
      <div>{userChoice}</div>
    </div>
  );
};

export default ColorGuessingGame;
