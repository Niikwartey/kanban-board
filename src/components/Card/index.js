import React from 'react';
import { Box, Text, Button } from 'grommet';
import { Add, FormPrevious, FormNext} from 'grommet-icons';
import './style.css'
 
function Card({name, tasks, color, cardIndex, updateCard, updateTask}) {
  const addCard = () => {
    const newTask = window.prompt("Add a task");
    if (newTask) {
      updateCard(cardIndex, newTask);
    }
  }

  const moveCard = (task, taskIndex, prevCardIndex, newCardIndex) => {
    updateTask(task, taskIndex, prevCardIndex, newCardIndex);
  }

  return (
    <div className="Card">
      <Box width="100%" background="white">
        <Box background={color} height="30px" justify="center">
          <Text color="#fff" size="small" weight="bold">{name}</Text>
        </Box>

        <Box>
          {
            tasks.map((task, index) => (
              <Box key={index} className="task" direction="row" justify="between">
                <FormPrevious 
                  onClick={() => moveCard(task, index, cardIndex, cardIndex - 1)}
                  style={{
                    visibility: cardIndex > 0 ? "visible" : "hidden"
                  }} 
                />

                <Text truncate>{task}</Text>

                <FormNext
                  onClick={() => moveCard(task, index, cardIndex, cardIndex + 1)}
                  style={{
                    visibility: cardIndex < 3 ? "visible" : "hidden"
                  }}
                />
              </Box>
            ))
          }
        </Box>
      </Box>
      <Box align="start" pad={{vertical: "xsmall"}}>
        <Button 
          label={<Text size="small">Add a Card</Text>} 
          icon={<Add size="small" />}
          onClick={addCard}
          focusIndicator={false}
          plain
        />
      </Box>
    </div>
  );
}

export default Card;