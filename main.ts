function 舞蹈動作2 () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Heart)
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        150,
        robotbit.Motors.M1B,
        -150
        )
        basic.pause(200)
        basic.showIcon(IconNames.SmallHeart)
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        -150,
        robotbit.Motors.M1B,
        150
        )
        basic.pause(200)
    }
    robotbit.GeekServo(robotbit.Servos.S1, 90)
    basic.pause(500)
    左轉()
    左轉()
    robotbit.GeekServo(robotbit.Servos.S1, 0)
}
function 出發 () {
    basic.showNumber(3)
    basic.pause(1000)
    basic.showNumber(2)
    basic.pause(1000)
    basic.showNumber(1)
    basic.pause(1000)
    for (let index = 0; index < 8; index++) {
        暫存 = list.shift()
        if (暫存 == 1) {
            任意前進或後退(150, 500)
        } else if (暫存 == 2) {
            左轉()
        } else {
            右轉()
        }
        basic.pause(1000)
    }
    music.playMelody("D G C5 - C5 B A A ", 1000)
    功能編號 = 4
    basic.showNumber(功能編號)
}
function 左轉 () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    200,
    robotbit.Motors.M1B,
    -200
    )
    basic.pause(350)
    robotbit.MotorStopAll()
}
function 右轉 () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    -200,
    robotbit.Motors.M1B,
    200
    )
    basic.pause(350)
    robotbit.MotorStopAll()
}
input.onButtonPressed(Button.A, function () {
    if (功能編號 == 1) {
        功能編號 = 4
        basic.showNumber(功能編號)
    } else if (功能編號 == 99) {
        list.push(3)
        basic.showArrow(ArrowNames.West)
        if (list.length == 8) {
            出發()
        }
    } else {
        功能編號 += -1
        basic.showNumber(功能編號)
    }
})
function 開機打招呼 () {
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            # . . . #
            . # . # .
            # . . . #
            . . . . .
            . # # # .
            `)
        basic.pause(100)
        basic.showLeds(`
            # # . # #
            # # . # #
            . . . . .
            . # . # .
            . . # . .
            `)
        basic.pause(100)
    }
    robotbit.GeekServo(robotbit.Servos.S1, 90)
    basic.pause(500)
    robotbit.GeekServo(robotbit.Servos.S1, 0)
    music.playMelody("D G C5 - C5 B A A ", 1000)
}
input.onButtonPressed(Button.AB, function () {
    if (功能編號 == 1) {
        命令移動模式()
    } else if (功能編號 == 2) {
        舞蹈動作2()
    } else if (功能編號 == 3) {
        舞蹈動作1()
    } else if (功能編號 == 4) {
        追隨手掌()
    } else if (功能編號 == 99) {
        list.push(1)
        basic.showArrow(ArrowNames.North)
        if (list.length == 8) {
            出發()
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (功能編號 == 4) {
        功能編號 = 1
        basic.showNumber(功能編號)
    } else if (功能編號 == 99) {
        list.push(2)
        basic.showArrow(ArrowNames.East)
        if (list.length == 8) {
            出發()
        }
    } else {
        功能編號 += 1
        basic.showNumber(功能編號)
    }
})
function 追隨手掌 () {
    basic.showIcon(IconNames.Surprised)
    while (sonar.ping(
    DigitalPin.P14,
    DigitalPin.P15,
    PingUnit.Centimeters
    ) > 10) {
        basic.showIcon(IconNames.Surprised)
        basic.pause(100)
        basic.showIcon(IconNames.Asleep)
        basic.pause(100)
    }
    basic.showIcon(IconNames.Ghost)
    while (true) {
        if (sonar.ping(
        DigitalPin.P14,
        DigitalPin.P15,
        PingUnit.Centimeters
        ) <= 5) {
            robotbit.MotorRunDual(
            robotbit.Motors.M1A,
            -150,
            robotbit.Motors.M1B,
            -150
            )
        } else if (sonar.ping(
        DigitalPin.P14,
        DigitalPin.P15,
        PingUnit.Centimeters
        ) < 8) {
            robotbit.MotorStopAll()
        } else if (sonar.ping(
        DigitalPin.P14,
        DigitalPin.P15,
        PingUnit.Centimeters
        ) >= 15) {
            robotbit.MotorRunDual(
            robotbit.Motors.M1A,
            150,
            robotbit.Motors.M1B,
            150
            )
        }
    }
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    0,
    robotbit.Motors.M1B,
    0
    )
    basic.showIcon(IconNames.Heart)
}
function 任意前進或後退 (速度: number, 時間: number) {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    速度,
    robotbit.Motors.M1B,
    速度
    )
    basic.pause(時間)
    robotbit.MotorStopAll()
}
function 命令移動模式 () {
    功能編號 = 99
    list = []
    basic.showIcon(IconNames.Happy)
    music.playMelody("C D F A E F A C5 ", 800)
}
function 舞蹈動作1 () {
    for (let index = 0; index < 2; index++) {
        basic.showIcon(IconNames.Happy)
        robotbit.GeekServo(robotbit.Servos.S1, 100)
        任意前進或後退(200, 500)
        basic.showIcon(IconNames.Asleep)
        robotbit.GeekServo(robotbit.Servos.S1, 0)
        任意前進或後退(-200, 500)
    }
    music.playMelody("D G C5 - C5 B A A ", 1000)
}
let list: number[] = []
let 暫存 = 0
let 功能編號 = 0
開機打招呼()
功能編號 = 1
basic.showNumber(功能編號)
