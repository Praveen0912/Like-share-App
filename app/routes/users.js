const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

function verifyToken(req, res, next){
  //Get auth header value
  const bearerHeader = req.headers['authorization'];
  //check  if bearer is undefined

  if(typeof bearerHeader !== "undefined"){
  //split at space
  const bearer = bearerHeader.split(' ');
  //Get token from array
  const bearerToken = bearer[1];
  //set the token
  req.token = bearerToken;
  
  //next middleware
  next();
  }
  else{
  //Forbidden
  res.json({message:'headerUndefined'});
  }
}



module.exports = router;
