function multiplicationTable(row, col) {
  const table = []
  for (let i = 1; i <= row; i++) {
    let inner = [i]
    for (let j = 2; j <= col; j++) {
      inner.push(j*i)
    }
    table.push(inner)
  }
  return table
}