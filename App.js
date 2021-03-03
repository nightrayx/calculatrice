import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';


const App = () => {

  const [currentNumber, setCurrentNumber] = useState('');
  const [lastNumber, setLastNumber] = useState('');
  const buttons = ['C', 'DEL', '/', 7, 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];
  const handleInput = (btnPressed) => {
    if (btnPressed === '+' || btnPressed === '-' || btnPressed === '*' || btnPressed === '/') {
      setCurrentNumber(currentNumber + btnPressed);
      return;
    }

    switch (btnPressed) {
      case 'DEL':
        setCurrentNumber(currentNumber.substring(0, (currentNumber.length - 1)))
        return
      case 'C':
        setLastNumber('');
        setCurrentNumber('');
        return
      case '=':
        setLastNumber(currentNumber + '=');
        calculate()
        return;
    }
    setCurrentNumber(currentNumber + btnPressed);
  }

  const calculate = () => {
    let lastArr = currentNumber[currentNumber.length - 1]
    if (lastArr === '/' || lastArr === '*' || lastArr === '-' || lastArr === '+' || lastArr === '.') {
      setCurrentNumber(currentNumber);
    }
    else {
      let result = eval(currentNumber).toString();
      setCurrentNumber(result);
      return;
    }
  }

  return (
    <>
      <View style={styles.View1}>
        <View>

          <View style={styles.buttons}>
            {buttons.map((btn) =>
              btn === '=' || btn === '/' || btn === '*' || btn === '-' || btn === '+' ?
                <TouchableOpacity key={btn} style={styles.button} onPress={() => handleInput(btn)}>
                  <Text style={[styles.textButton, { color: 'green', fontSize: 28 }]}>{btn}</Text>
                </TouchableOpacity>
                : btn === 0 ?
                  <Text style={styles.textButton}>{btn}</Text>

                  : btn === '.' || btn === 'DEL' ?
                    <TouchableOpacity key={btn} style={styles.button}
                      onPress={() => handleInput(btn)}
                    >
                      <Text style={styles.textButton}>{btn}</Text>
                    </TouchableOpacity>
                    : btn === 'C' ?
                      <TouchableOpacity key={btn} style={styles.button}
                        onPress={() => handleInput(btn)}
                      >
                        <Text style={styles.textButton}>{btn}</Text>
                      </TouchableOpacity>
                      :
                      <TouchableOpacity key={btn} style={styles.button}
                        onPress={() => handleInput(btn)}
                      >
                        <Text style={styles.textButton}>{btn}</Text>
                      </TouchableOpacity>

            )}
          </View>
        </View>
        <View style={styles.results}>
          <Text style={styles.historyText}>{lastNumber}</Text>
          <Text style={styles.resultText}>{currentNumber}</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  View1: {
    flex: 1,
  },
  resultText: {
    maxHeight: 45,
    color: 'blue',
    margin: 15,
    fontSize: 35,
    alignSelf: 'center',  
  },
  historyText: {
    fontSize: 20,
    marginRight: 10,
    alignSelf: 'center',
  },

  buttons: {
    width: '100%',
    height: '35%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '24%',
    minHeight: '54%',
    flex: 2,
  },
  textButton: {
    fontSize: 28,
  }
})


export default App;
