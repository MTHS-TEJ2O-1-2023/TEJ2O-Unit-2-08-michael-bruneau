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
  pins.digitalWritePin(DigitalPin.P13, 1)
  basic.showString('Red')
  basic.pause(1000)
})
