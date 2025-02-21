'use strict'

function runExperiment(sampleSize) {
  const valueCounts = [0, 0, 0, 0, 0, 0]
  const results = []
  for (let i = 0; i < sampleSize; i++) {
    valueCounts[Math.floor(Math.random() * 6)] += 1
  }
  for (const count of valueCounts) {
    results.push(((count / sampleSize) * 100).toFixed(2))
  }

  return results
}

function main() {
  const sampleSizes = [100, 1000, 1000000]
  for (const size of sampleSizes) {
    let result = runExperiment(size)
    console.log(result, size)
  }
}

main()
