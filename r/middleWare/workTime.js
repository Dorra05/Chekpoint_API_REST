

let today = new Date()
let jour = today.getDay();
let heure  = today.getHours()


const work = (req , res , next)=> {
if (jour>=1 && jour <=5 && heure>=8 && heure<23){
    next()
}
else { res.send('app is not ')}
}

module.exports= {work}