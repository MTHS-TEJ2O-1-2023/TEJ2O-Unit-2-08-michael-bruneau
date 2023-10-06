"""
Created by: Michael Bruneau
Created on: Oct 2023
This module is a Micro:bit MicroPython program
"""

from microbit import *

# setup
display.clear()
display.show(Image.HAPPY)
pin13.write_digital(0)
pin14.write_digital(0)
pin15.write_digital(0)

while True:
    if button_a.is_pressed():
        display.clear()
        pin13.write_digital(1)
        pin14.write_digital(0)
        pin15.write_digital(0)
        display.scroll("Red")

        pin13.write_digital(0)
        pin13.write_digital(1)
        pin13.write_digital(0)
        display.scroll("Blue")

        pin13.write_digital(0)
        pin13.write_digital(0)
        pin13.write_digital(1)
        display.scroll("Green")

        pin13.write_digital(1)
        pin13.write_digital(1)
        pin13.write_digital(0)
        display.scroll("Magenta")

        pin13.write_digital(1)
        pin13.write_digital(0)
        pin13.write_digital(1)
        display.scroll("Yellow")

        pin13.write_digital(0)
        pin13.write_digital(1)
        pin13.write_digital(1)
        display.scroll("Cyan")

        pin13.write_digital(1)
        pin13.write_digital(1)
        pin13.write_digital(1)
        display.scroll("White")
