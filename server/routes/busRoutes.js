import express from "express";
import { getBuses, getBus, searchBuses,  checkSeatAvailability, lockSeat, bookSeats, unlockSeat }  from '../controllers/busController.js'

const router = express.Router()

router.get("/search", searchBuses);
router.get("/", getBuses)
router.put("/book-seats", bookSeats);
router.post("/lock-seat", lockSeat);
router.post("/unlock-seat", unlockSeat);
router.get("/:id", getBus);
  
export default router

