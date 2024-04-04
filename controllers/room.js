//patch room entries slot wise
//post empty default wala
//book room (patch request)

import express from "express";
import Room from "../models/room";

//get all (room timetable) - by room

export const getAllRooms = async (req, res) => {
  try {
    let rooms = await Room.find({ name: req.params.name });
    res.send(rooms);
  } catch (error) {
    res.status(400).send(error);
  }
};

//get all rooms by day
export const getAllRoomsByDay = async (req, res) => {
  try {
    let rooms = await Room.find({ day: req.params.day });
    res.send(rooms);
  } catch (error) {
    res.status(400).send(error);
  }
};
