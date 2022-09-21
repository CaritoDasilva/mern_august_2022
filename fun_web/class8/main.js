const soldTickets = (money, movie) => {
    const availableMovies = ['Pulp Fiction', 'Tiburon', 'Harry Potter', 'Superman', 'Get out'];
    const ticketValue = 9000;

    // Condicionales
    if(availableMovies.includes(movie) && money >= ticketValue) {
        return true;
    } else {
        return false;
    }
}

// const getAvailableSpots = (seat) => {
//     const seatsInSala = [ [0,1,0,0],[0,1,1,0],[1,0,0,1],[0,0,0,0]];

//     for(let i = 0; i < seatsInSala.lenght; i++) {
//         for(let j = 0; j < seatsInSala.lenght[i]; j++) {
//             if (seatsInSala[seat[0]][seat[1]] === 0) {
//                 console.log('estoy en el true');
//                 return true;
//             } else {
//                 console.log('estoy en el false');
//                 return false;
//             }
//         }
//     }


// }
const getAvailableSpots = (spot)=>{
  const availableSpots = [
    [0,0,1],
    [1,1,0],
    [0,0,1]
  ];

  for (let i = 0; i < availableSpots.length; i++) {
    for (let j = 0; j < availableSpots[i].length; j++) {
      if (availableSpots[spot[0]][spot[1]] === 0) {
        return true;
      }else{
        return false;
      }
    }
  }
};


module.exports = {
    soldTickets,
    getAvailableSpots,
};