/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Michael B
 * Created on: Oct 2023
 * This program shows all the coulours of RGB LED on micro bit
*/

// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)
pins.digitalWritePin(DigitalPin.P13, 0)
pins.digitalWritePin(DigitalPin.P14, 0)
pins.digitalWritePin(DigitalPin.P15, 0)

input.onButtonPressed(Button.A, function () {
  basic.clearScreen()
  pins.digitalWritePin(DigitalPin.P13, 1)
  basic.showString('Red')
  basic.pause(1000)

  pins.digitalWritePin(DigitalPin.P13, 0)
  pins.digitalWritePin(DigitalPin.P14, 1)
  basic.showString('Blue')
  basic.pause(1000)

  pins.digitalWritePin(DigitalPin.P14, 0)
  pins.digitalWritePin(DigitalPin.P15, 1)
  basic.showString('Green')
  basic.pause(1000)

  pins.digitalWritePin(DigitalPin.P13, 1)
  pins.digitalWritePin(DigitalPin.P14, 1)
  pins.digitalWritePin(DigitalPin.P15, 0)
  basic.showString('Magenta')
  basic.pause(1000)

  pins.digitalWritePin(DigitalPin.P13, 1)
  pins.digitalWritePin(DigitalPin.P14, 0)
  pins.digitalWritePin(DigitalPin.P15, 1)
  basic.showString('Yellow')
  basic.pause(1000)

  pins.digitalWritePin(DigitalPin.P13, 0) 
  pins.digitalWritePin(DigitalPin.P14, 1)
  pins.digitalWritePin(DigitalPin.P15, 1)
  basic.showString('Cyan')
  basic.pause(1000)

  pins.digitalWritePin(DigitalPin.P13, 1)
  pins.digitalWritePin(DigitalPin.P14, 1)
  pins.digitalWritePin(DigitalPin.P15, 1)
  basic.showString('White')
  basic.pause(1000)
})
