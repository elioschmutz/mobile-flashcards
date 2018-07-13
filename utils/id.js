export default generateId = () => {
  // Not collision secure id generator
  return Math.floor((1 + Math.random()) * 0x10000)
}
