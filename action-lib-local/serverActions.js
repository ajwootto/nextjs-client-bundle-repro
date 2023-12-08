'use server'
export const serverAction = async () => {
    console.log("CALLED SERVER ACTION", typeof window != 'undefined' ? "on client" : "on server")
}
