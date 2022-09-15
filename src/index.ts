/**
 * The program shows how to get input
 *   and deal with numbers.
 *
 * By:      Sydney Kuhn
 * Version: 1.0
 * Since:   2022-09-14
 */

import promptSync from 'prompt-sync'

const prompt = promptSync()
const logLengthString = prompt('How long are the logs in meters : ')

const logLength = parseFloat(logLengthString)

const logAmount = 1100 / (20 * logLength)

console.log(`${logAmount} is the maximum amount of logs.`)