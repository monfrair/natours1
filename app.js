const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.json());

const getAllTours = (req, res) => {
  res.json;
  console.log(req.params);
  const id = req.params.id * 1;
  const tour = tours.find(el => el.id === id);

  res.status(200).json({
    status: 'success',
    data: {
      tours
    }
  });
};

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

app.get('/api/v1/tours/:id', getAllTours);

app.post('/api/v1/tours', (req, res) => {
  // console.log(req.body);
  const newId = tours[tours.length - 1].id + 1;
<<<<<<< HEAD
  const newTour = Object.assign({ id: newId }, req.body);
=======
  const newTour = Object.assign({
    id: newId
  }, req.body);
>>>>>>> c5495b49273c7372c99683d02022c6c46bce2c4a

  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    err => {
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour
        }
      });
    }
  );
});

app.patch('/api/v1/tours/:id', (req, res) => {
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID'
    });
  }

  res.status(200).json({
    status: 'success',
    tour: '<updated tour here...>'
  });
});

app.delete('/api/v1/tours/:id', (req, res) => {
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID'
    });
  }

  res.status(204).json({
    status: 'success',
    data: null
  });
});

<<<<<<< HEAD
const port = 3000;
=======
// do I need this here?
const port = 5000;
>>>>>>> c5495b49273c7372c99683d02022c6c46bce2c4a

app.listen(port, () => {
  console.log(`app running on port ${port}...`);
});
<<<<<<< HEAD
=======

module.exports = app;
>>>>>>> c5495b49273c7372c99683d02022c6c46bce2c4a
