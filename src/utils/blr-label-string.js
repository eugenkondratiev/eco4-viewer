const blrString = (blr) => {
    if (blr === "el") return "Турбіна. Електроенергія."
    if (blr === "blr1") return "Котел1. Водогрійний котел. Котельня1."
    if (blr === "blr2") return "Котел2. Водогрійний котел. Котельня2."
    if (blr === "blr4") return "Котел4. Паровий котел. Котельня1."
    return "Турбина. Котельня1."
}
export default blrString