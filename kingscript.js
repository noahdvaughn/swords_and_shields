////////////////////////////////
// Global Variables Here
let squares = document.querySelectorAll('.flexItem')
let counter = 0
let turnDisplayJs = document.querySelector('.turnDisplay')
let testArray = ['', '', '', '', '', '', '', '', '']
let swordWinCounter = parseInt(document.querySelector('.swordWins').innerText)
let shieldWinCounter = parseInt(document.querySelector('.shieldWins').innerText)
let drawCounter = parseInt(document.querySelector('#totalDraws').innerText)
let resetButton = document.querySelector('.resetButton')
let kingsSquare = ''
let kingsNum = 0

////////////////////////////////
// Functions For Game Logic Here
document.body.style.backgroundImage =
  "url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2FLDX4QKv.jpg&f=1&nofb=1&ipt=617cec71c4eeee29bc0db2ffea676296da2bc1ca93b438653901424f74e1f3a6&ipo=images')"

const kingChooses = () => {
  let kingsChoice = Math.floor(Math.random() * 8)
  return kingsChoice
}

const checkIfClicked = (squareParameter, i) => {
  if (counter % 2 === 0) {
    if (
      squareParameter.classList.contains('sword') ||
      squareParameter.classList.contains('shield')
    ) {
      alert('Already clicked fool!')
      return
    }
    turnDisplayJs.innerText = "It is now the King's turn"
    squareParameter.classList.toggle('woodBackground')
    squareParameter.classList.toggle('sword')
    testArray[i] = 'x'
    counter++
    checkIfWon(testArray)
  }
}

const kingCheckIfClicked = () => {
  if (counter % 2 != 0) {
    kingsNum = kingChooses()
    kingsSquare = squares[kingsNum]
    if (
      kingsSquare.classList.contains('sword') ||
      kingsSquare.classList.contains('shield')
    ) {
      kingsNum = kingChooses()
      kingsSquare = squares[kingsNum]
      kingCheckIfClicked(kingsSquare)
    } else {
      kingsSquare.classList.toggle('woodBackground')
      kingsSquare.classList.toggle('shield')
      testArray[kingsNum] = 'o'
      counter++
      checkIfWon(testArray)
      turnDisplayJs.innerText = 'It is now your miserable turn.'
    }
  }
}

const swordWin = () => {
  for (let i = 0; i < squares.length; i++) {
    squares[i].classList.remove('sword')
    squares[i].classList.remove('shield')
    squares[i].classList.add('woodBackground')
  }
  alert('👑You Win! The crown is yours!👑')
  swordWinCounter++
  document.querySelector('.swordWins').innerText = swordWinCounter
  testArray = ['', '', '', '', '', '', '', '', '']
  counter = 0
  turnDisplayJs.innerText = 'Play again if you dare. It is you to move first'
}

const shieldWin = () => {
  for (let i = 0; i < squares.length; i++) {
    squares[i].classList.remove('sword')
    squares[i].classList.remove('shield')
    squares[i].classList.add('woodBackground')
  }
  alert('👑Bow Down. The king always wins.👑')
  shieldWinCounter++
  document.querySelector('.shieldWins').innerText = shieldWinCounter
  testArray = ['', '', '', '', '', '', '', '', '']
  counter = 0
  turnDisplayJs.innerText = 'Play again if you dare. It is you to move first'
}

const userDraw = () => {
  for (let i = 0; i < squares.length; i++) {
    squares[i].classList.remove('sword')
    squares[i].classList.remove('shield')
    squares[i].classList.add('woodBackground')
  }
  alert('Stalemate! You have met your match')
  drawCounter++
  document.querySelector('#totalDraws').innerText = drawCounter
  testArray = ['', '', '', '', '', '', '', '', '']
  counter = 0
  turnDisplayJs.innerText = 'Play again if you dare. It is you to move first'
}

const resetGame = () => {
  for (let i = 0; i < squares.length; i++) {
    squares[i].classList.remove('sword')
    squares[i].classList.remove('shield')
    squares[i].classList.add('woodBackground')
  }
  testArray = ['', '', '', '', '', '', '', '', '']
}

const checkIfWon = (squareArray) => {
  if (
    squareArray[0] === 'x' &&
    squareArray[1] === 'x' &&
    squareArray[2] === 'x'
  ) {
    swordWin()
  } else if (
    squareArray[3] === 'x' &&
    squareArray[4] === 'x' &&
    squareArray[5] === 'x'
  ) {
    swordWin()
  } else if (
    squareArray[6] === 'x' &&
    squareArray[7] === 'x' &&
    squareArray[8] === 'x'
  ) {
    swordWin()
  }
  ///all vertical x win conditions
  else if (
    squareArray[0] === 'x' &&
    squareArray[3] === 'x' &&
    squareArray[6] === 'x'
  ) {
    swordWin()
  } else if (
    squareArray[1] === 'x' &&
    squareArray[4] === 'x' &&
    squareArray[7] === 'x'
  ) {
    swordWin()
  } else if (
    squareArray[2] === 'x' &&
    squareArray[5] === 'x' &&
    squareArray[8] === 'x'
  ) {
    swordWin()
  }
  //CROSS X WIN CONDITIONS
  else if (
    squareArray[0] === 'x' &&
    squareArray[4] === 'x' &&
    squareArray[8] === 'x'
  ) {
    swordWin()
  } else if (
    squareArray[2] === 'x' &&
    squareArray[4] === 'x' &&
    squareArray[6] === 'x'
  ) {
    swordWin()
  }
  // ALL HORIZONTAL O WIN CONS
  else if (
    squareArray[0] === 'o' &&
    squareArray[1] === 'o' &&
    squareArray[2] === 'o'
  ) {
    shieldWin()
  } else if (
    squareArray[3] === 'o' &&
    squareArray[4] === 'o' &&
    squareArray[5] === 'o'
  ) {
    shieldWin()
  } else if (
    squareArray[6] === 'o' &&
    squareArray[7] === 'o' &&
    squareArray[8] === 'o'
  ) {
    shieldWin()
  }
  ///all vertical o win conditions
  else if (
    squareArray[0] === 'o' &&
    squareArray[3] === 'o' &&
    squareArray[6] === 'o'
  ) {
    shieldWin()
  } else if (
    squareArray[1] === 'o' &&
    squareArray[4] === 'o' &&
    squareArray[7] === 'o'
  ) {
    shieldWin()
  } else if (
    squareArray[2] === 'o' &&
    squareArray[5] === 'o' &&
    squareArray[8] === 'o'
  ) {
    shieldWin()
  } else if (
    squareArray[0] === 'o' &&
    squareArray[4] === 'o' &&
    squareArray[8] === 'o'
  ) {
    shieldWin()
  } else if (
    squareArray[2] === 'o' &&
    squareArray[4] === 'o' &&
    squareArray[6] === 'o'
  ) {
    shieldWin()
  }
  //draw condition
  else if (counter === 9) {
    userDraw()
  }
}

////////////////////////////////
// Event Listeners Here

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', () => {
    checkIfClicked(squares[i], i)
    setTimeout(kingCheckIfClicked, 1000)
  })
  squares[i].addEventListener('mouseenter', () => {
    squares[i].style.width = '210px'
    squares[i].style.height = '210px'
  })
  squares[i].addEventListener('mouseleave', () => {
    squares[i].style.width = '200px'
    squares[i].style.height = '200px'
  })
}
resetButton.addEventListener('click', () => {
  resetGame()
})
resetButton.addEventListener('mouseenter', () => {
  resetButton.style.fontSize = '70px'
})
resetButton.addEventListener('mouseleave', () => {
  resetButton.style.fontSize = '60px'
})

////////////////////////////////
