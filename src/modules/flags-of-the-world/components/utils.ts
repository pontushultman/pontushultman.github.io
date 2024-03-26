export const isMatch = (val: string, name?: string[] | string) => {

    console.log(val, name)

    if (!name) return false

    if (Array.isArray(name)) {
      return name.some((n) => n.toLowerCase() === val.toLowerCase())
    }
    return name.toLowerCase() === val.toLowerCase()
  }
