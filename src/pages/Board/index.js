import React, { useState } from 'react';
import { Box } from 'grommet';
import Card from '../../components/Card';
import { BOARD_NAME, INITIAL_CARDS } from '../../constants';

function Board() {
  let savedCards = window.localStorage.getItem(BOARD_NAME);
  savedCards = JSON.parse(savedCards) || INITIAL_CARDS;

  const [cards, setCards] = useState(savedCards);
  
  const saveCards = (cards) => {
    window.localStorage.setItem(BOARD_NAME, JSON.stringify(cards));
  }

  const updateCard = (index, newTask) => {
    const cardsCopy = [...cards];
    const card = cardsCopy[index];
    card.tasks.push(newTask);

    setCards(cardsCopy);
    saveCards(cardsCopy);
  }

  const updateTask = (task, taskIndex, cardIndex, newCardIndex) => {
    const cardsCopy = [...cards];
    const card = cardsCopy[cardIndex];
    const newCard = cardsCopy[newCardIndex]
    const { tasks } = card;
    tasks.splice(taskIndex, 1);
    newCard.tasks.push(task);

    setCards(cardsCopy);
    saveCards(cardsCopy);
  }

  return (
    <div className="Board">
      <Box 
        gap="25px" 
        direction="row-responsive" 
        width="100%"
        height="100vh"
        background="#ECEEEE"
        pad={{
          vertical: "large",
          horizontal: "25px"
        }}
      >
        {
          cards.map((card, index) => (
            <Card 
              key={index} 
              cardIndex={index}
              updateCard={updateCard}
              updateTask={updateTask}
              {...card}
            />
          ))
        }
      </Box>
    </div>
  );
}

export default Board;