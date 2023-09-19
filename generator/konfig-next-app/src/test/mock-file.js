global.File = class MockFile {
  constructor(blob, name, options) {
    this.blob = blob
    this.name = name
    this.options = options || {}
    this.type = this.options.type || ''
    this.lastModified = this.options.lastModified || Date.now()
  }
  // You can add more methods or properties if needed
}
