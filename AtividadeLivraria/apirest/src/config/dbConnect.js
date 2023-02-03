import mongoose from 'mongoose'

//mongoose.connect('mongodb+srv://warley:wmvj@cluster0.wcd17cl.mongodb.net/webII-node')
mongoose.connect('mongodb+srv://felipevcastanheira:Fe26061996@cluster0.bnc2nib.mongodb.net/editora')

let db = mongoose.connection

export default db